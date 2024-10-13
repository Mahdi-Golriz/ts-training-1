import Library from "./LibraryManagement";
import { Category } from "./Models";
import StoreManagement from "./store";
import UserManagement from "./UserManagement";

// Libraries
const tehranLibrary = StoreManagement.Instance.addLibrary({
    id: 1,
    name: "Tehran Library",
    address: "Tehran, Vanak",
    books: [],
});

const mashhadLibrary = StoreManagement.Instance.addLibrary({
    id: 2,
    name: "Mashhad Library",
    address: "Mashhad, Sajjad Boulevar",
    books: [],
})


// Users
const userManager = new UserManagement();

const user1 = userManager.createUser({
    userId: 1,
    name: "Reza"
});

const user2 = userManager.createUser({
    userId: 2,
    name: "Mehdi"
});

const user3 = userManager.createUser({
    userId: 3,
    name: "Majid"
});


// Add users to libraries
userManager.addToLibrary(tehranLibrary.id, user1.userId);
userManager.addToLibrary(tehranLibrary.id, user2.userId);
userManager.addToLibrary(mashhadLibrary.id, user3.userId);

// Add Book to library

const library1 = new Library(tehranLibrary.id);
const library2 = new Library(mashhadLibrary.id);

library1.addBook({
    isbn: 1,
    author: "X",
    category: Category.Fiction,
    title: "My Title",
    pages: 10
})

library2.addBook({
    isbn: 2,
    author: "Y",
    category: Category.NonFiction,
    title: "My Title 2",
    pages: 10
})

// Remove book from library
library1.removeBook(2);