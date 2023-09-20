import { Model } from 'mongoose';

export type UserType = {
name:string;
email:string;
password:string;
}

export type UserModel = Model<
  UserType
>;
