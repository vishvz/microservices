/**
 * @description Gather all routes (including common and all modules) in this router. 
 */

import express from 'express';
import moduleRoute from './module';
import commonRoute from './common.route';

const appRoute = express.Router();

appRoute.use(moduleRoute);
appRoute.use(commonRoute);

export default appRoute;
