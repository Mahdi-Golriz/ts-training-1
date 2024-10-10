// import type { IUser } from "./Models";

// export const LibraryUsers: Record<librariesId, IUser[]> = {
//   [librariesId.A]: [users[0], users[1]],
//   [librariesId.B]: [users[2], users[3]],
//   [librariesId.C]: [users[4], users[5]],
//   [librariesId.D]: [],
// };

// // type LibrariesId = keyof typeof LibraryUsers;

// function userManagement(libraryId: keyof typeof LibraryUsers, newUser: IUser) {
//   const userExists = LibraryUsers[libraryId].some(
//     (user) => user.userId === newUser.userId
//   );

//   if (!userExists) {
//     LibraryUsers[libraryId].push(newUser);
//   }
// }

// userManagement(librariesId.A, { name: "ali", userId: 8 });
// userManagement(librariesId.B, { name: "ali", userId: 9 });


// class UserManagement {





// }