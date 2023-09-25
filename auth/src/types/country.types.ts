import { Model } from 'sequelize';

export type CountryAttributes = {
  name: string;
  code: number;
  iso: string;
  isDeleted: boolean;
  isActive: boolean;
};

export type CountryModel = Model<CountryAttributes>;
