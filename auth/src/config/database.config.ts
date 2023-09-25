import { connect, set } from 'mongoose';
import getEnv from './env.config';
import { Sequelize, Options } from 'sequelize';
import { queryLogger } from '../helpers/logger';

const connectDb = async () => {
  try {
    const MONGO_URL = getEnv('MONGODB_URL')!;

    set('strictQuery', true);
    await connect(MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

const sequelizeOpts: Options = {
  host: getEnv('POST_DATABASE_HOST'),
  dialect: 'postgres',
  logging: q => queryLogger.info(q),
};
export const sequelize = new Sequelize(
  getEnv('POST_DATABASE'),
  getEnv('POST_DATABASE_USER'),
  getEnv('POST_DATABASE_PASSWORD'),
  sequelizeOpts,
);

export default connectDb;
