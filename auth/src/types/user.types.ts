import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';
import { USER_TYPES } from '../utils/constants';

export type UserAttributes = {
  name: string;
  email: string;
  type: USER_TYPES;
  accountId: string;
  contactNo: string;
  dob: string;
  password: string;
  country?: any;
  account?: any;
};

export type UserModel = Model<UserAttributes & DefaultTableFieldsT>;
