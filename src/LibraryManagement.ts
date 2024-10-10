import type { Category, IBook, ILibrary, ILibraryImplementation, ISearchableItem, IUser } from "./Models.js";

class Library implements ILibraryImplementation {
  libraryId: number;
  name: string;
  address: string;
  books: IBook[] = [];

  constructor(library: ILibrary) {
    const { id, name, address } = library;

    this.libraryId = id;
    this.name = name;
    this.address = address;
  }

  addBook(book: IBook): void {
    this.books = [...this.books, book];
  }

  removeBook(isbn: number): void {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  findBookByISBN(isbn: number): IBook | undefined {
    return this.books.find((value) => value.isbn === isbn);
  }

  listAvailabeBooks(): IBook[] {
    return this.books.filter((book) => book.isAvailable);
  }

  updateBook(isbn: number, bookDetails: Partial<IBook>): void {
    this.books = this.books.map((book) =>
      book.isbn === isbn ? { ...book, ...bookDetails } : book
    );
  }


  userExistsInLibrary(userId: number, libraryId: number) {
    return LibraryUsers[this.libraryId].some((item) => item.userId === user.userId)

  }

  borrowBook(isbn: number, user: IUser): void {

    if (!this.userExistsInLibrary(1, 1)) {
      console.log("You are not a member of this Library");
      return;
    }

    console.log("Congratulation! You are a member of this Library");

    const isAvailable = this.findBookByISBN(isbn);

    if (!isAvailable) {
      console.log("Your requested book is not available in our Library");
      return;
    }

    const isAccessible = this.listAvailabeBooks().some(
      (item) => item.isbn === isbn
    );

    if (!isAccessible) {
      console.log("Your requested book is borrowed to someone else!");
      return;
    }

    console.log("You can get this book");
    this.updateBook(isbn, { isAvailable: false });
  }

  borrowedBooks(): void {
    const unAccessibleBooks = this.books.filter(
      (book) => book.isAvailable === false
    );

    if (unAccessibleBooks.length === 0) {
      console.log("All books are accessible");
    } else {
      console.log(unAccessibleBooks);
    }
  }

  libraryUsers() {
    const libUsers = LibraryUsers[this.libraryId];
    console.log(libUsers);
  }

  logItem<T>(item: T): void {
    console.log(item);
  }

  searchItemById<T extends ISearchableItem>(
    items: T[],
    id: number
  ): T | undefined {
    return items.find((item) => item.id === id);
  }

  sortCategory(book: IBook): Category | undefined {
    if (book.category === undefined) {
      return undefined;
    }
    return book.category;
  }
}

export default Library;
