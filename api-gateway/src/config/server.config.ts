import express from 'express';
import { COMMON_ROUTE } from '../utils/route.enums';
import proxyRouter from './proxy.config';
import cors, { CorsOptions } from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.config';

const app = express();

const corsOpts: CorsOptions = {
  origin: '*',
};

app.use(cors(corsOpts));
app.use(COMMON_ROUTE.api, proxyRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use(express.json());

export default app;
