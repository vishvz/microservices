import express from 'express';
import commonRoute from './common.route';

const appRoute = express.Router();

appRoute.use(commonRoute);

export default appRoute;
