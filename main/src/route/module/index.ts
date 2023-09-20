/**
 * @description Gather this particular module's all routes in here and export router.
 */

import express from 'express';
import betaModuleRoute from './beta.route';
import { COMMON_ROUTE } from '../../utils/route.enums';
import alphaModuleRoute from './alpha.route';

const moduleRoute = express.Router();

moduleRoute.use(COMMON_ROUTE.module, betaModuleRoute);
moduleRoute.use(COMMON_ROUTE.module, alphaModuleRoute);

export default moduleRoute;
