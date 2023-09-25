import { Model } from 'sequelize';
import { DefaultTableFieldsT } from './common.types';

export type AccountAttributes = {
  name: string;
  isDeleted: boolean;
  isActive: boolean;
};

export type AccountModel = Model<AccountAttributes & DefaultTableFieldsT>;
