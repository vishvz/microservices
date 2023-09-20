import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { PROXIES } from '../utils/constants';
import { TPROXIES } from '../types/common.types';
import authMw from '../middleware/auth.middleware';

const proxyRouter = express.Router();

const setupProxies = (routes: TPROXIES[]) => {
  routes.forEach(r => {
    if (r.auth) proxyRouter.use(r.url, authMw, createProxyMiddleware(r.proxy));
    else proxyRouter.use(r.url, createProxyMiddleware(r.proxy));
  });
};

const setupRateLimit = (routes: TPROXIES[]) => {
  routes.forEach(r => {
    if (r.rateLimit) {
      proxyRouter.use(r.url, rateLimit(r.rateLimit));
    }
  });
};
setupProxies(PROXIES);
setupRateLimit(PROXIES);
export default proxyRouter;
