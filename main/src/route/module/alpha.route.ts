import express from 'express';
import { MODULE_ROUTE } from '../../utils/route.enums';

const alphaModuleRoute = express.Router();

alphaModuleRoute.get(MODULE_ROUTE.alphaModule, async (req, res) => {
  return res.send('alpha module');
});

export default alphaModuleRoute;
