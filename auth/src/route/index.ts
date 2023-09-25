import express from 'express';
import commonRoute from './common.route';
import userRoute from './user.route';
import adminRoute from './admin.route';

const appRoute = express.Router();

appRoute.use(commonRoute);
appRoute.use(userRoute);
appRoute.use(adminRoute);

export default appRoute;
