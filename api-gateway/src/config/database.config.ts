import { connect, set } from 'mongoose';
import getEnv from './env.config';

const connectMongo = async () => {
  try {
    const MONGO_URL = getEnv('MONGODB_URL')!;

    set('strictQuery', true);
    await connect(MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
