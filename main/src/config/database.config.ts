import { connect, set } from 'mongoose';
import getEnv from './env.config';
import { Sequelize } from 'sequelize';

const connectMongo = async () => {
  try {
    const MONGO_URL = getEnv('MONGODB_URL')!;

    set('strictQuery', true);
    await connect(MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

export const sequelize = new Sequelize(
  getEnv('POST_DATABASE'),
  getEnv('POST_DATABASE_USER'),
  getEnv('POST_DATABASE_PASSWORD'),
  {
    dialect: 'postgres',
  },
);

// const models = {
//   User: getUserModel(sequelize, Sequelize),
//   Message: getMessageModel(sequelize, Sequelize),
// };

// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

// export default models;

export default connectMongo;
