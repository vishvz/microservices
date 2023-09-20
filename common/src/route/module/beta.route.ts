import express from 'express';
import { MODULE_ROUTE } from '../../utils/route.enums';

const betaModuleRoute = express.Router();

betaModuleRoute.get(MODULE_ROUTE.betaModule, async (req, res) => {
  return res.send('beta module');
});

export default betaModuleRoute;
