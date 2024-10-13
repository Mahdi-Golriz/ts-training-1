import type { IUser } from "./Models";
import StoreManagement from "./store";

class UserManagement {

    createUser(user: IUser) {
        StoreManagement.Instance.addUser(user);

        return user;
    }

    getUser(userId: number) {
        return StoreManagement.Instance.getUsers.find(x => x.userId === userId);
    }

    addToLibrary(libraryId: number, userId: number) {
        StoreManagement.Instance.addUserToLibrary(libraryId, userId);
    }
}

export default UserManagement;