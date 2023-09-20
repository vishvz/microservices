import 'dotenv/config';

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
}

/**
 *
 * @param key
 * @returns Environment variable
 */
export default function getEnv(key: keyof ICustomProcessEnv) {
  return process.env[key];
}
