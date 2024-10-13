import { IBook, ILibrary, IUser } from "./Models";

// Encapsulation
class StoreManagement {
    private _users: IUser[] = [];
    private _libraries: ILibrary[] = [];

    // {libraryId: users[]}
    private _libraryUsers: Record<number, number[]> = {};

    private static _instance: StoreManagement;

    public static get Instance() {
        return this._instance || (this._instance = new this())
    }

    public get getUsers() {
        return this._users;
    }

    public get getLibraries() {
        return this._libraries;
    }

    public get getLibraryUsers() {
        return this._libraryUsers;
    }

    addUser(user: IUser) {
        this._users.push(user);
    }

    addLibrary(library: ILibrary) {
        this._libraries.push(library);

        return library;
    }

    getLibrary(libraryId: number) {
        return this._libraries.find(x => x.id === libraryId);
    }

    addUserToLibrary(libraryId: number, userId: number) {
        this._libraryUsers[libraryId].push(userId);
    }

    addBookToLibrary(libraryId: number, book: IBook) {
        const libraryIndex = this._libraries.findIndex(x => x.id === libraryId);

        if (libraryIndex < 0) {
            return false;
        }

        this._libraries[libraryIndex].books.push(book);

        return true;
    }

    removeBookFromLibrary(libraryId: number, isbn: number) {
        const libraryIndex = this._libraries.findIndex(x => x.id === libraryId);

        if (libraryIndex < 0) {
            return false;
        }

        this._libraries[libraryIndex].books.filter(x => x.isbn !== isbn)

        return true;
    }
}

export default StoreManagement;
