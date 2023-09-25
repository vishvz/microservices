import { CountryModel } from '../types/country.types';
import { z } from 'zod';
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.config';
import { MODEL_NAMES } from '../utils/constants';

const Country = sequelize.define<CountryModel>(
  MODEL_NAMES.Country,
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

export const CountrySchema = z.object({
  name: z.string().nonempty(),
  iso: z.string(),
  code: z.string().nonempty(),
});

export default Country;
