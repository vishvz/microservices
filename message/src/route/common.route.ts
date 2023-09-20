/**
 * @description Independent routes (like user) which are not associated with any particular module but whole application.
 */

import express from 'express';
import userRoute from './user.route';

const commonRoute = express.Router();

commonRoute.use(userRoute);

export default commonRoute;