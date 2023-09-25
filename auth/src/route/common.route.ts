import express from 'express';
import userRoute from './user.route';
import adminRoute from './admin.route';
const commonRoute = express.Router();

export default commonRoute;
