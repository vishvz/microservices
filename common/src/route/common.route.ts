/**
 * @description Independent routes (like user) which are not associated with any particular module but whole application.
 */

import express from 'express';
import userRoute from './user.route';
import authMw from '../middleware/auth.middleware';

const commonRoute = express.Router();

commonRoute.use(authMw);
commonRoute.use(userRoute);

export default commonRoute;
