// Modern Library Digital Experience - Main JavaScript

// Global variables
let currentFilter = 'all';
let displayedBooks = 12;
let filteredBooks = [...bookData];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderBooks();
    initializeAnimations();
    setupFloatingParticles();
    setupSearch();

    const searchQuery = localStorage.getItem('searchQuery');
    if (searchQuery) {
        localStorage.removeItem('searchQuery');
        document.getElementById('searchInput').value = searchQuery;
        performSearch(searchQuery);
    }
}

function setupEventListeners() {
    // Filter tags
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            handleFilterChange(this.dataset.filter);
        });
    });

    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreBooks);
    }

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('blur', hideSearchSuggestions);
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                // Allow normal navigation
                return;
            }
            e.preventDefault();
            updateActiveNavLink(this);
        });
    });
}

function handleFilterChange(filter) {
    currentFilter = filter;
    displayedBooks = 12;
    
    // Update active filter tag
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.dataset.filter === filter) {
            tag.classList.add('active');
        }
    });

    // Filter books
    if (filter === 'all') {
        filteredBooks = [...bookData];
    } else {
        filteredBooks = bookData.filter(book => book.genre === filter);
    }

    renderBooks();
}

function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    if (!booksGrid) return;

    const borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    const booksToShow = filteredBooks.slice(0, displayedBooks);
    
    booksGrid.innerHTML = booksToShow.map(book => {
        const isBorrowed = borrowedBooks.includes(book.id) || !book.available;
        return `
        <div class="book-card bg-white rounded-xl p-4 shadow-lg cursor-pointer fade-in" onclick="openBookDetails(${book.id})">
            <div class="relative mb-3">
                <img src="${book.cover}" alt="${book.title}" class="book-cover w-full h-48 object-cover">
                <div class="absolute top-2 right-2">
                    ${!isBorrowed ?
                        '<span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Available</span>' : 
                        '<span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Borrowed</span>'
                    }
                </div>
            </div>
            <h3 class="font-semibold text-charcoal text-sm mb-1 line-clamp-2">${book.title}</h3>
            <p class="text-warm-gray text-xs mb-2">by ${book.author}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="text-gold text-sm">⭐</span>
                    <span class="text-sm text-warm-gray ml-1">${book.rating}</span>
                </div>
                <button class="text-terracotta text-xs font-medium hover:underline" onclick="event.stopPropagation(); addToReadingList(${book.id})">
                    + Add to List
                </button>
            </div>
        </div>
    `}).join('');

    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (displayedBooks >= filteredBooks.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    // Trigger fade-in animations
    setTimeout(() => {
        const bookCards = document.querySelectorAll('.book-card');
        bookCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50);
        });
    }, 100);
}

function loadMoreBooks() {
    displayedBooks += 12;
    renderBooks();
}

function openBookDetails(bookId) {
    // Store the book ID in localStorage for the details page
    localStorage.setItem('selectedBookId', bookId);
    window.location.href = 'book-details.html';
}

function addToReadingList(bookId) {
    let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
    
    if (!readingList.some(item => item.id === bookId)) {
        const book = bookData.find(b => b.id === bookId);
        if (book) {
            readingList.push(book);
            localStorage.setItem('readingList', JSON.stringify(readingList));
            showNotification('Book added to your reading list!', 'success');
        } else {
            showNotification('Could not find book details.', 'error');
        }
    } else {
        showNotification('This book is already in your reading list.', 'info');
    }
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    
    if (!searchInput || !suggestionsContainer) return;

    let currentSuggestionIndex = -1;

    searchInput.addEventListener('keydown', function(e) {
        const suggestions = suggestionsContainer.querySelectorAll('.suggestion-item');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentSuggestionIndex = Math.min(currentSuggestionIndex + 1, suggestions.length - 1);
                updateSuggestionHighlight(suggestions, currentSuggestionIndex);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentSuggestionIndex = Math.max(currentSuggestionIndex - 1, -1);
                updateSuggestionHighlight(suggestions, currentSuggestionIndex);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentSuggestionIndex >= 0 && suggestions[currentSuggestionIndex]) {
                    selectSuggestion(suggestions[currentSuggestionIndex].textContent);
                } else {
                    performSearch(this.value);
                }
                break;
            case 'Escape':
                hideSearchSuggestions();
                break;
        }
    });
}

function showSearchSuggestions() {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    const searchInput = document.getElementById('searchInput');
    
    if (!suggestionsContainer || !searchInput) return;

    const query = searchInput.value.toLowerCase();
    const filteredSuggestions = searchSuggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(query)
    ).slice(0, 8);

    if (filteredSuggestions.length > 0) {
        suggestionsContainer.innerHTML = filteredSuggestions.map(suggestion => `
            <div class="suggestion-item px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0" 
                 onclick="selectSuggestion('${suggestion}')">
                ${suggestion}
            </div>
        `).join('');
        
        suggestionsContainer.classList.add('show');
    } else {
        hideSearchSuggestions();
    }
}

function hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (suggestionsContainer) {
        suggestionsContainer.classList.remove('show');
    }
}

function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = suggestion;
        performSearch(suggestion);
    }
    hideSearchSuggestions();
}

function updateSuggestionHighlight(suggestions, index) {
    suggestions.forEach((suggestion, i) => {
        if (i === index) {
            suggestion.classList.add('bg-gray-100');
        } else {
            suggestion.classList.remove('bg-gray-100');
        }
    });
}

const debouncedSearch = debounce(performSearch, 300);

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    
    if (query.length > 0) {
        showSearchSuggestions();
        debouncedSearch(query);
    } else {
        hideSearchSuggestions();
        handleFilterChange('all');
    }
}

function performSearch(query) {
    if (typeof query !== 'string') {
        return;
    }

    const lowerCaseQuery = query.toLowerCase();

    // Filter books based on search query
    filteredBooks = bookData.filter(book => 
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.genre.toLowerCase().includes(lowerCaseQuery)
    );

    displayedBooks = 12;
    currentFilter = 'search';
    
    // Update filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    
    renderBooks();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function initializeAnimations() {
    // Set up intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Initial animation for hero elements
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 200);
            }
        });
    }, 500);
}

function setupFloatingParticles() {
    const particlesContainer = document.getElementById('floatingParticles');
    if (!particlesContainer) return;

    // Create floating particles using CSS animations
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(196, 112, 74, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }

    // Add CSS animation for floating
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) translateX(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Recalculate any responsive elements if needed
    const bookGrid = document.getElementById('booksGrid');
    if (bookGrid) {
        // Trigger reflow for grid items
        bookGrid.style.display = 'none';
        bookGrid.offsetHeight; // Force reflow
        bookGrid.style.display = 'grid';
    }
}, 250));

// Export functions for global access
window.libraryApp = {
    openBookDetails,
    addToReadingList,
    scrollToSection,
    showNotification
};
