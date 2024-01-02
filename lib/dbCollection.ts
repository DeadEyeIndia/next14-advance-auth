import { db } from "./mongodb";
import { TUser, TAccount } from "./collectionTypes";

db.collection<TUser>("users").createIndex({ email: 1 }, { unique: true });
db.collection<TAccount>("accounts").createIndex(
  { provider: 1, providerAccountId: 1 },
  { unique: true }
);

export const Users = db.collection<TUser>("users");
export const Accounts = db.collection<TAccount>("accounts");
