import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.config';

const Task = sequelize.define(
  'Task',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { timestamps: true },
);
export default Task;
