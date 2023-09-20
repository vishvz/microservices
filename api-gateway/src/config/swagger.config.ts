import swaggerJSDoc, { SwaggerDefinition, Options } from 'swagger-jsdoc';
import getEnv from './env.config';
const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Api Documentation',
    version: '1.0.0',
  },
  servers: [
    {
      url: getEnv('API_GATEWAY_URL'),
      description: 'Gateway',
    },
  ],
};

const cwd = process.cwd();

const swaggerOpts: Options = {
  swaggerDefinition,
  apis: [
    `${cwd}/auth/src/route/*.ts`,
    `${cwd}/common/src/route/*.ts`,
    `${cwd}/main/src/route/*.ts`,
    `${cwd}/message/src/route/*.ts`,
  ],
};

export const swaggerSpec = swaggerJSDoc(swaggerOpts);
