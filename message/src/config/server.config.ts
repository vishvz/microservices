import appRoute from '../route';
import express, { Express } from 'express';
import { COMMON_ROUTE } from '../utils/route.enums';
import cors, { CorsOptions } from 'cors';
import getEnv from './env.config';

const corsOpts: CorsOptions = {
  origin: getEnv('API_GATEWAY_URL'),
};

const app: Express = express();

app.use(cors(corsOpts));

app.use(COMMON_ROUTE.api, appRoute);

export default app;
