    const books = [
      {"id": "b1", "name": "The Great Gatsby", "category": "Fiction", "author": "F. Scott Fitzgerald", "description": "A novel about the American Dream in the 1920s", "isBorrowed": false},
      {"id": "b2", "name": "To Kill a Mockingbird", "category": "Fiction", "author": "Harper Lee", "description": "A novel set in the American South during the 1930s", "isBorrowed": false},
      {"id": "b3", "name": "1984", "category": "Science Fiction", "author": "George Orwell", "description": "A dystopian novel set in a totalitarian society", "isBorrowed": false},
      {"id": "b4", "name": "Harry Potter and the Sorcerer's Stone", "category": "Fantasy", "author": "J.K. Rowling", "description": "The first book in the Harry Potter series", "isBorrowed": false},
      {"id": "b5", "name": "The Catcher in the Rye", "category": "Fiction", "author": "J.D. Salinger", "description": "A novel about teenage angst and alienation", "isBorrowed": false},
      {"id": "b6", "name": "Pride and Prejudice", "category": "Romance", "author": "Jane Austen", "description": "A classic romance novel set in early 19th-century England", "isBorrowed": false},
      {"id": "b7", "name": "The Hobbit", "category": "Fantasy", "author": "J.R.R. Tolkien", "description": "A fantasy novel about the quest of a hobbit to reclaim treasure guarded by a dragon", "isBorrowed": false},
      {"id": "b8", "name": "Moby-Dick", "category": "Adventure", "author": "Herman Melville", "description": "The epic tale of Captain Ahab's quest for revenge on the white whale", "isBorrowed": false},
      {"id": "b9", "name": "The Lord of the Rings", "category": "Fantasy", "author": "J.R.R. Tolkien", "description": "A high fantasy novel about the quest to destroy the One Ring", "isBorrowed": false},
      {"id": "b10", "name": "Crime and Punishment", "category": "Fiction", "author": "Fyodor Dostoevsky", "description": "A psychological novel exploring themes of guilt and redemption", "isBorrowed": false},
      {"id": "b11", "name": "Alice's Adventures in Wonderland", "category": "Fantasy", "author": "Lewis Carroll", "description": "A whimsical tale of a young girl falling through a rabbit hole into a fantastical world", "isBorrowed": false},
      {"id": "b12", "name": "The Adventures of Huckleberry Finn", "category": "Adventure", "author": "Mark Twain", "description": "A novel about the adventures of a young boy and a runaway slave along the Mississippi River", "isBorrowed": false},
      {"id": "b13", "name": "The Picture of Dorian Gray", "category": "Fiction", "author": "Oscar Wilde", "description": "A novel about a man who remains young and beautiful while his portrait ages", "isBorrowed": false},
      {"id": "b14", "name": "The Odyssey", "category": "Epic Poetry", "author": "Homer", "description": "An ancient Greek epic poem attributed to Homer, chronicling the adventures of Odysseus", "isBorrowed": false},
      {"id": "b15", "name": "Frankenstein", "category": "Gothic", "author": "Mary Shelley", "description": "A novel about a scientist who creates a sapient creature in an unorthodox scientific experiment", "isBorrowed": false},
      {"id": "b16", "name": "The Alchemist", "category": "Fiction", "author": "Paulo Coelho", "description": "A philosophical novel about a shepherd named Santiago who travels to find a hidden treasure", "isBorrowed": false},
      {"id": "b17", "name": "Don Quixote", "category": "Novel", "author": "Miguel de Cervantes", "description": "A Spanish novel that follows the adventures of Alonso Quixano, an hidalgo who reads so many chivalric novels that he decides to set out to revive chivalry, under the name Don Quixote", "isBorrowed": false},
      {"id": "b18", "name": "War and Peace", "category": "Historical Fiction", "author": "Leo Tolstoy", "description": "An epic novel set during the Napoleonic Wars, focusing on the impact of historical events on several characters' lives", "isBorrowed": false},
      {"id": "b19", "name": "One Hundred Years of Solitude", "category": "Magical Realism", "author": "Gabriel García Márquez", "description": "A novel that tells the multi-generational story of the Buendía family in the fictional town of Macondo", "isBorrowed": false},
      {"id": "b20", "name": "The Brothers Karamazov", "category": "Philosophical Novel", "author": "Fyodor Dostoevsky", "description": "A philosophical novel that explores moral and existential questions through the story of the three Karamazov brothers", "isBorrowed": false},
      {"id": "b21", "name": "The Road", "category": "Post-Apocalyptic Fiction", "author": "Cormac McCarthy", "description": "A post-apocalyptic novel that follows a father and his young son as they journey across a desolate landscape", "isBorrowed": false},
      {"id": "b22", "name": "Wuthering Heights", "category": "Gothic Fiction", "author": "Emily Brontë", "description": "A novel that explores the destructive and obsessive love between Catherine Earnshaw and Heathcliff", "isBorrowed": false},
      {"id": "b23", "name": "The Count of Monte Cristo", "category": "Adventure", "author": "Alexandre Dumas", "description": "A novel about a man who escapes from prison, acquires a fortune, and sets about exacting revenge on those responsible for his imprisonment", "isBorrowed": false},
      {"id": "b24", "name": "Anna Karenina", "category": "Realist Novel", "author": "Leo Tolstoy", "description": "A realist novel that explores themes of love, infidelity, jealousy, and redemption", "isBorrowed": false},
      {"id": "b25", "name": "The Stranger", "category": "Philosophical Novel", "author": "Albert Camus", "description": "A novel that explores themes of existentialism and absurdism through the story of Meursault, an emotionally detached and indifferent French Algerian", "isBorrowed": false},
      {"id": "b26", "name": "The Divine Comedy", "category": "Epic Poem", "author": "Dante Alighieri", "description": "An epic poem that follows the journey of Dante through the realms of the afterlife: Hell, Purgatory, and Paradise", "isBorrowed": false},
      {"id": "b27", "name": "Gone with the Wind", "category": "Historical Fiction", "author": "Margaret Mitchell", "description": "A novel set in the American South during the Civil War and Reconstruction era, focusing on the life of Scarlett O'Hara", "isBorrowed": false},
      {"id": "b28", "name": "The Adventures of Sherlock Holmes", "category": "Mystery", "author": "Arthur Conan Doyle", "description": "A collection of twelve short stories featuring the detective Sherlock Holmes", "isBorrowed": false},
      {"id": "b29", "name": "The Grapes of Wrath", "category": "Realist Novel", "author": "John Steinbeck", "description": "A novel that follows the Joad family as they migrate from Dust Bowl-era Oklahoma to California during the Great Depression", "isBorrowed": false},
      {"id": "b30", "name": "The Trial", "category": "Absurdist Fiction", "author": "Franz Kafka", "description": "A novel about a man who is arrested and prosecuted by a remote, inaccessible authority, with the nature of his crime revealed neither to him nor to the reader", "isBorrowed": false},
      {"id": "b31", "name": "The Canterbury Tales", "category": "Medieval Literature", "author": "Geoffrey Chaucer", "description": "A collection of 24 stories connected by a larger framing narrative of a group of pilgrims who travel together from London to Canterbury", "isBorrowed": false},
      {"id": "b32", "name": "Les Misérables", "category": "Historical Novel", "author": "Victor Hugo", "description": "A historical novel that follows the lives of several characters, particularly the struggles of ex-convict Jean Valjean and his experience of redemption", "isBorrowed": false},
      {"id": "b33", "name": "Dracula", "category": "Gothic Horror", "author": "Bram Stoker", "description": "A novel that tells the story of Count Dracula's attempt to move from Transylvania to England to find new blood and spread the undead curse", "isBorrowed": false},
      {"id": "b34", "name": "Jane Eyre", "category": "Gothic Fiction", "author": "Charlotte Brontë", "description": "A novel that follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall", "isBorrowed": false},
      {"id": "b35", "name": "Walden", "category": "Philosophical Literature", "author": "Henry David Thoreau", "description": "A reflection upon simple living in natural surroundings, part personal declaration of independence, social experiment, voyage of spiritual discovery, satire, and manual for self-reliance", "isBorrowed": false},
      {"id": "b36", "name": "The Iliad", "category": "Epic Poetry", "author": "Homer", "description": "An ancient Greek epic poem set during the Trojan War, the ten-year siege of the city of Troy by a coalition of Greek states", "isBorrowed": false},
      {"id": "b37", "name": "Little Women", "category": "Coming-of-Age Novel", "author": "Louisa May Alcott", "description": "A novel that follows the lives of four sisters—Meg, Jo, Beth, and Amy March—detailing their passage from childhood to womanhood", "isBorrowed": false},
      {"id": "b38", "name": "A Tale of Two Cities", "category": "Historical Fiction", "author": "Charles Dickens", "description": "A historical novel set in London and Paris before and during the French Revolution", "isBorrowed": false},
      {"id": "b39", "name": "Slaughterhouse-Five", "category": "Science Fiction", "author": "Kurt Vonnegut", "description": "A satirical novel that explores the experiences of Billy Pilgrim, a soldier who becomes unstuck in time and experiences various moments of his life in a non-linear fashion", "isBorrowed": false},
      {"id": "b40", "name": "The Call of the Wild", "category": "Adventure", "author": "Jack London", "description": "A novel about a domesticated dog named Buck who is kidnapped from his home in California and sold into the brutal life of an Alaskan sled dog", "isBorrowed": false},
      {"id": "b41", "name": "Heart of Darkness", "category": "Adventure", "author": "Joseph Conrad", "description": "A novel that follows the journey of Charles Marlow as he recounts his experiences traveling up the Congo River in Africa", "isBorrowed": false},
      {"id": "b42", "name": "Meditations", "category": "Philosophy", "author": "Marcus Aurelius", "description": "A series of personal writings by Marcus Aurelius, Roman Emperor from AD 161 to 180, recording his private notes to himself and ideas on Stoic philosophy", "isBorrowed": false},
      {"id": "b43", "name": "The Scarlet Letter", "category": "Romance", "author": "Nathaniel Hawthorne", "description": "A novel that tells the story of Hester Prynne, a woman who conceives a daughter through an affair and struggles to create a new life of repentance and dignity", "isBorrowed": false},
      {"id": "b44", "name": "Great Expectations", "category": "Realist Novel", "author": "Charles Dickens", "description": "A novel that depicts the personal growth and development of an orphan named Pip", "isBorrowed": false},
      {"id": "b45", "name": "The Adventures of Tom Sawyer", "category": "Adventure", "author": "Mark Twain", "description": "A novel about a young boy growing up along the Mississippi River in the mid-19th century", "isBorrowed": false},
      {"id": "b46", "name": "The Metamorphosis", "category": "Absurdist Fiction", "author": "Franz Kafka", "description": "A novella about a man who wakes up one morning to find himself transformed into a large, insect-like creature", "isBorrowed": false},
      {"id": "b47", "name": "Frankenstein", "category": "Gothic", "author": "Mary Shelley", "description": "A novel about a scientist who creates a sapient creature in an unorthodox scientific experiment", "isBorrowed": false},
      {"id": "b48", "name": "The Sun Also Rises", "category": "Fiction", "author": "Ernest Hemingway", "description": "A novel about a group of American and British expatriates who travel from Paris to the Festival of San Fermín in Pamplona to watch the running of the bulls and the bullfights", "isBorrowed": false},
      {"id": "b49", "name": "In Search of Lost Time", "category": "Modernist Novel", "author": "Marcel Proust", "description": "A novel in seven volumes, written by Marcel Proust (1871–1922). It is considered one of the greatest novels of all time", "isBorrowed": false},
      {"id": "b50", "name": "Middlemarch", "category": "Realist Novel", "author": "George Eliot", "description": "A novel about the lives of the residents of the fictitious English town of Middlemarch", "isBorrowed": false}
  ];

  function sortAlphabetically ()  {
    books.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
 };


 sortAlphabetically();

 export {books};
