const bookData = [
    {
        id: 1,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "fiction",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/17/The_Seven_Husbands_of_Evelyn_Hugo.jpg",
        rating: 4.8,
        available: true,
        description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now? Monique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career. Summoned to Evelyn’s luxurious apartment, Monique listens in fascination as the actress tells her story. From making her way to Los Angeles in the 1950s to her decision to leave show business in the ‘80s, and, of course, the seven husbands along the way, Evelyn unspools a tale of ruthless ambition, unexpected friendship, and a great forbidden love. Monique begins to feel a very real connection to the legendary star, but as Evelyn’s story nears its conclusion, it becomes clear that her life intersects with Monique’s own in tragic and irreversible ways."
    },
    {
        id: 2,
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        genre: "sci-fi",
        cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Klara_and_the_Sun_%28Kazuo_Ishiguro%29.png",
        rating: 4.6,
        available: true,
        description: "From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful that a customer will soon choose her. Klara and the Sun is a thrilling book that offers a look at our changing world through the eyes of an unforgettable narrator, and one that explores the fundamental question: what does it mean to love?"
    },
    {
        id: 3,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "fiction",
        cover: "https://www.matthaig.com/wp-content/uploads/2020/10/41jr1Is-a4L._SX329_BO1204203200_.jpg",
        rating: 4.5,
        available: false,
        description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets? A novel about all the choices that go into a life well lived."
    },
    {
        id: 4,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "mystery",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Gone_Girl_%28Flynn_novel%29.jpg",
        rating: 4.7,
        available: true,
        description: "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick’s clever and beautiful wife disappears. As the police begin to investigate, Nick’s strange behavior raises eyebrows. He’s evasive, he’s bitter, and he’s definitely not acting like a grieving husband. What has happened to Amy? And what is Nick hiding? Gone Girl is a thriller that will have you on the edge of your seat."
    },
    {
        id: 5,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        genre: "romance",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1e/TheSongofAchilles.png",
        rating: 4.9,
        available: true,
        description: "Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles. By all rights their paths should never cross, but Achilles takes the shamed prince as his friend, and as they grow into young men skilled in the arts of war and medicine, their bond blossoms into something deeper - despite the displeasure of Achilles's mother Thetis, a cruel sea goddess. But when word comes that Helen of Sparta has been kidnapped, Achilles must go to war in distant Troy and fulfill his destiny. Torn between love and fear for his friend, Patroclus goes with him, little knowing that the years that follow will test everything they hold dear."
    },
    {
        id: 6,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "sci-fi",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg",
        rating: 4.9,
        available: true,
        description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it."
    },
    {
        id: 7,
        title: "Dune",
        author: "Frank Herbert",
        genre: "sci-fi",
        cover: "https://www.pixartprinting.it/blog/wp-content/uploads/2024/08/3.jpg",
        rating: 4.8,
        available: false,
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness."
    },
    {
        id: 8,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "mystery",
        cover: "https://upload.wikimedia.org/wikipedia/en/d/df/The_Silent_Patient_early_2019_UK_edition.png",
        rating: 4.7,
        available: true,
        description: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word."
    },
    {
        id: 9,
        title: "The Guest List",
        author: "Lucy Fokley",
        genre: "mystery",
        cover: "https://target.scene7.com/is/image/Target/GUEST_d7aa0c11-240d-445c-a546-5167a7e0676e?wid=800&hei=800&qlt=80&fmt=pjpeg",
        rating: 4.6,
        available: true,
        description: "On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one. The groom: handsome and charming, a rising television star. The bride: smart and ambitious, a magazine publisher. It’s a wedding for a magazine, or for a celebrity: the designer dress, the remote location, the luxe party favors, the boutique whiskey. The cell phone service may be spotty and the waves may be rough, but every detail has been expertly planned and will be expertly executed."
    },
    {
        id: 10,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "romance",
        cover: "https://www.pixartprinting.co.uk/blog/wp-content/uploads/2025/05/image-12.jpeg",
        rating: 4.8,
        available: true,
        description: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. Thus begins Pride and Prejudice, Jane Austen's witty comedy of manners--one of the most popular novels of all time--that features splendidly civilized sparring between the proud Mr. Darcy and the prejudiced Elizabeth Bennet as they play out their spirited courtship in a series of eighteenth-century drawing-room intrigues."
    },
    {
        id: 11,
        title: "The Kiss Quotient",
        author: "Helen Hoang",
        genre: "romance",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1527983720i/36577586.jpg",
        rating: 4.5,
        available: false,
        description: "Stella Lane thinks math is the only thing that unites the universe. She comes up with algorithms to predict customer purchases--a job that has given her more money than she knows what to do with, and way less experience in the dating department than the average thirty-year-old. It doesn't help that Stella has Asperger's and French kissing reminds her of a shark getting its teeth cleaned by pilot fish."
    },
    {
        id: 12,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "non-fiction",
        cover: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Sapiens-_A_Brief_History_of_Humankind.png",
        rating: 4.9,
        available: true,
        description: "One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition."
    },
    {
        id: 13,
        title: "Educated: A Memoir",
        author: "Tara Westover",
        genre: "non-fiction",
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png",
        rating: 4.8,
        available: true,
        description: "Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her “head-for-the-hills bag”. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father’s junkyard."
    },
    {
        id: 14,
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        genre: "non-fiction",
        cover: "https://upload.wikimedia.org/wikipedia/en/9/91/TheBodyKeepstheScore.jpg",
        rating: 4.7,
        available: false,
        description: "Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust."
    },
    {
        id: 15,
        title: "Milk and Honey",
        author: "Rupi Kaur",
        genre: "poetry",
        cover: "https://rupikaur.com/cdn/shop/files/Milk_Honey_Cover_PRESALE-01-01-01_1946x.jpg?v=1712550986",
        rating: 4.6,
        available: true,
        description: "Milk and Honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity. The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. Milk and Honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look."
    },
    {
        id: 16,
        title: "The Hill We Climb",
        author: "Amanda Gorman",
        genre: "poetry",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1615516611i/57002000.jpg",
        rating: 4.9,
        available: true,
        description: "On January 20, 2021, Amanda Gorman became the sixth and youngest poet to deliver a poetry reading at a presidential inauguration. Taking the stage after the 46th president of the United States, Joe Biden, Gorman captivated the nation and the world with her poem “The Hill We Climb.”"
    },
    {
        id: 17,
        title: "Where the Sidewalk Ends",
        author: "Shel Silverstein",
        genre: "poetry",
        cover: "https://upload.wikimedia.org/wikipedia/en/b/b3/Where_the_Sidewalk_Ends_%281974%29.jpg",
        rating: 4.8,
        available: false,
        description: "If you are a dreamer, come in. If you are a dreamer, a wisher, a liar, a hope-er, a pray-er, a magic bean buyer... If you're a pretender, come sit by my fire. For we have some flax golden tales to spin. Come in! Come in!"
    },
    {
        id: 18,
        title: "Circe",
        author: "Madeline Miller",
        genre: "fiction",
        cover: "https://upload.wikimedia.org/wikipedia/en/9/9b/Circe_%28novel%29_Madeline_Milller.jpeg",
        rating: 4.8,
        available: true,
        description: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child--not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power--the power of witchcraft, which can transform rivals into monsters and menace the gods themselves."
    },
    {
        id: 19,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        genre: "romance",
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e4/It_Ends_with_Us_%28Colleen_Hoover%29.png",
        rating: 4.9,
        available: true,
        description: "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town in Maine where she grew up—she graduated from college, moved to Boston, and started her own business. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life suddenly seems almost too good to be true."
    },
    {
        id: 20,
        title: "The Dutch House",
        author: "Ann Patchett",
        genre: "fiction",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Dutch_House_%28Patchett_novel%29.png",
        rating: 4.7,
        available: true,
        description: "At the end of the Second World War, Cyril Conroy combines luck and a single canny investment to begin an enormous real estate empire, propelling his. family from poverty to enormous wealth. His first order of business is to buy the Dutch House, a lavish estate in the suburbs outside of Philadelphia. Meant as a surprise for his wife, the house sets in motion the undoing of everyone he loves."
    },
    {
        id: 21,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        genre: "mystery",
        cover: "https://cdn.penguin.co.uk/dam-assets/books/9780241988268/9780241988268-jacket-large.jpg",
        rating: 4.6,
        available: true,
        description: "In a peaceful retirement village, four unlikely friends meet up once a week to investigate unsolved murders. But when a brutal killing takes place on their very doorstep, the Thursday Murder Club find themselves in the middle of their first live case. Elizabeth, Joyce, Ibrahim and Ron might be pushing eighty but they still have a few tricks up their sleeves."
    },
    {
        id: 22,
        title: "Red, White & Royal Blue",
        author: "Casey McQuiston",
        genre: "romance",
        cover: "https://upload.wikimedia.org/wikipedia/en/8/80/Red%2C_White_%26_Royal_Blue_Book_Cover.jpg",
        rating: 4.8,
        available: true,
        description: "What happens when America's First Son falls in love with the Prince of Wales? When his mother became President, Alex Claremont-Diaz was promptly cast as the American equivalent of a young royal. Handsome, charismatic, genius—his image is pure millennial-marketing gold for the White House. There's only one problem: Alex has a beef with the actual prince, Henry, across the pond."
    },
    {
        id: 23,
        title: "Exhalation",
        author: "Ted Chiang",
        genre: "sci-fi",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1534388394i/41160292.jpg",
        rating: 4.9,
        available: true,
        description: "This collection of nine stunningly original, provocative, and poignant stories—two of which have never been published before—is the second from Ted Chiang, the author of the international bestseller Stories of Your Life and Others."
    },
    {
        id: 24,
        title: "Entangled Life",
        author: "Merlin Sheldrake",
        genre: "non-fiction",
        cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1577743020i/50174716.jpg",
        rating: 4.8,
        available: true,
        description: "In Entangled Life, the brilliant young biologist Merlin Sheldrake shows us the world from a fungal point of view, providing an exhilarating change of perspective. Sheldrake’s vivid exploration takes us from yeast to psychedelics, to the fungi that range for miles underground and are the largest organisms on the planet, to those that link plants together in complex networks known as the “Wood Wide Web,” to those that infiltrate and manipulate insect bodies with devastating precision."
    },
    {
        id: 25,
        title: "Devotions",
        author: "Mary Oliver",
        genre: "poetry",
        cover: "https://rukminim2.flixcart.com/image/416/416/k0r15e80/book/2/4/9/devotions-original-imafkgfqegft9pyw.jpeg?q=70&crop=false",
        rating: 4.9,
        available: true,
        description: "Pulitzer Prize-winning poet Mary Oliver presents a personal selection of her best work in this definitive collection spanning more than five decades of her esteemed literary career."
    }
];
// Search suggestions data
const searchSuggestions = [
    ...new Set([
        ...bookData.map(book => book.title),
        ...bookData.map(book => book.author),
        ...bookData.map(book => book.genre)
    ])
];
