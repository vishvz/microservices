import dotenv from 'dotenv';

const cwd = process.cwd();
const serviceName = 'api-gateway';
const envPath = cwd.includes(serviceName)
  ? `${cwd}/.env`
  : cwd + `/${serviceName}/.env`;
dotenv.config({ path: envPath });
interface ICustomProcessEnv {
  NODE_ENV: 'development' | 'production';
  PORT?: string;
  AUTH_URL: string;
  MAIN_URL: string;
  COMMON_URL: string;
  MESSAGE_URL: string;
  API_GATEWAY_URL: string;
  MONGODB_URL: string;
  JWT_SECRET: string;
  JWT_EXPIRE: string;
  JWT_EXPIRE_REFRESH: string;
  JWT_SECRET_REFRESH: string;
}

/**
 *
 * @param key
 * @returns Environment variable
 */
export default function getEnv(key: keyof ICustomProcessEnv) {
  return process.env[key];
}
