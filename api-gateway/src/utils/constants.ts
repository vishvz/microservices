import getEnv from '../config/env.config';
import { TPROXIES } from '../types/common.types';
import { COMMON_ROUTE, SERVICES_ROUTE } from './route.enums';

export const x = 'x';


export const PROXIES: TPROXIES[] = [
  {
    url: SERVICES_ROUTE.auth,
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5,
    },
    proxy: {
      target: getEnv('AUTH_URL'),
      changeOrigin: true,

      pathRewrite: {
        [`^${COMMON_ROUTE.api}${SERVICES_ROUTE.auth}`]: COMMON_ROUTE.api,
      },
    },
  },
  {
    url: SERVICES_ROUTE.common,
    auth: true,
    creditCheck: true,
    proxy: {
      target: getEnv('COMMON_URL'),
      changeOrigin: true,

      pathRewrite: {
        [`^${COMMON_ROUTE.api}${SERVICES_ROUTE.common}`]: COMMON_ROUTE.api,
      },
    },
  },
  {
    url: SERVICES_ROUTE.main,
    auth: true,
    creditCheck: true,
    proxy: {
      target: getEnv('MAIN_URL'),
      changeOrigin: true,

      pathRewrite: {
        [`^${COMMON_ROUTE.api}${SERVICES_ROUTE.main}`]: COMMON_ROUTE.api,
      },
    },
  },
];
