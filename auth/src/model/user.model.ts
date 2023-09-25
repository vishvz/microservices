import { DataTypes } from 'sequelize';
import { UserModel } from '../types/user.types';
import { z } from 'zod';
import { sequelize } from '../config/database.config';
import Country from './country.model';
import { MODEL_NAMES, USER_TYPES } from '../utils/constants';
import Account from './account.model';

const User = sequelize.define<UserModel>(
  MODEL_NAMES.User,
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM,
      values: Object.values(USER_TYPES),
      defaultValue: USER_TYPES.USER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: true },
);

export const UserSchema = z.object({
  name: z.string().nonempty(),
  countryId: z.number(),
  email: z.string(),
  contactNo: z.string().nonempty(),
  dob: z.string(),
});

User.belongsTo(Country, { foreignKey: 'countryId', as: 'country' });
User.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

export default User;
