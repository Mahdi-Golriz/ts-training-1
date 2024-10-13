import type { Category, IBook, ILibrary, ILibraryImplementation, ISearchableItem, IUser } from "./Models.js";
import StoreManagement from "./store.js";

class Library implements ILibraryImplementation {
  libraryId: number;

  constructor(libraryId: number) {
    this.libraryId = libraryId;
  }

  addBook(book: IBook): void {
    const result = StoreManagement.Instance.addBookToLibrary(this.libraryId, book);

    if (!result) {
      console.log("Failed to add book to library");
    } else {
      console.log("Book added to library successfully.")
    }
  }

  removeBook(isbn: number): void {
    const result = StoreManagement.Instance.removeBookFromLibrary(this.libraryId, isbn);

    if (!result) {
      console.log("Failed to remove book to library");
    } else {
      console.log("Book removed from library successfully.")
    }
  }

  findBookByISBN(isbn: number): IBook | undefined {
    const library = StoreManagement.Instance.getLibrary(this.libraryId);

    if (!library) {
      console.log(`Cannot find specified library: ${this.libraryId}`);
      return;
    }

    return library.books.find(x => x.isbn === isbn);
  }

  listAvailabeBooks(): IBook[] {
    const library = StoreManagement.Instance.getLibrary(this.libraryId);

    if (!library) {
      console.log(`Cannot find specified library: ${this.libraryId}`);
      return [];
    }

    return library.books.filter(x => x.isAvailable !== false);
  }

  // updateBook(isbn: number, bookDetails: Partial<IBook>): void {
  //   this.books = this.books.map((book) =>
  //     book.isbn === isbn ? { ...book, ...bookDetails } : book
  //   );
  // }

  userExistsInLibrary(userId: number, libraryId: number) {
    return StoreManagement.Instance.getLibraryUsers[libraryId].some(x => x === userId)
  }

  borrowBook(isbn: number, user: IUser): void {

    if (!this.userExistsInLibrary(user.userId, this.libraryId)) {
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
    // this.updateBook(isbn, { isAvailable: false });
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
