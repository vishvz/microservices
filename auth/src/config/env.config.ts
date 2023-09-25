import dotenv from 'dotenv';

const cwd = process.cwd();
const serviceName = 'auth';

const envPath = cwd.includes(serviceName)
  ? `${cwd}/.env`
  : cwd + `/${serviceName}/.env`;
dotenv.config({ path: envPath });
interface ICustomProcessEnv {
  MONGODB_URL: string;
  AUTH_URL: string;
  MAIN_URL: string;
  COMMON_URL: string;
  MESSAGE_URL: string;
  API_GATEWAY_URL: string;
  NODE_ENV: 'development' | 'production';
  PORT?: string;
  SMTP_EMAIL_HOST: string;
  SMTP_EMAIL_PORT: string;
  SMTP_EMAIL_ADDRESS: string;
  SMTP_EMAIL_PASSWORD: string;
  JWT_SECRET: string;
  JWT_EXPIRE: string;
  JWT_SECRET_REFRESH: string;
  JWT_EXPIRE_REFRESH: string;
  POST_DATABASE: string;
  POST_DATABASE_USER: string;
  POST_DATABASE_PASSWORD: string;
  POST_DATABASE_HOST: string;
}

/**
 *
 * @param key
 * @returns Environment variable
 */
export default function getEnv(key: keyof ICustomProcessEnv) {
  return process.env[key];
}
