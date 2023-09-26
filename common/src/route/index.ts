/**
 * @description Gather all routes (including common and all modules) in this router.
 */

import express from 'express';
import dashboardRoute from './dashboard';
import commonRoute from './common.route';

const appRoute = express.Router();

appRoute.use(dashboardRoute);
appRoute.use(commonRoute);

export default appRoute;
