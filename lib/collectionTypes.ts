import { ObjectId, WithId } from "mongodb";

export type TUser = {
  name: string;
  email: string;
  emailVerified?: boolean;
  password?: string;
  accounts?: TAccount[];
};

export type TAccount = {
  userId: ObjectId;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
};

export type TUserWithId = WithId<TUser>;
export type TAccountWithId = WithId<TAccount>;
