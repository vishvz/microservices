import 'dotenv/config';

interface ICustomProcessEnv {
  MONGODB_URL: string;
  NODE_ENV: 'development' | 'production';
  PORT?: string;
  SMTP_EMAIL_HOST: string;
  SMTP_EMAIL_PORT: string;
  SMTP_EMAIL_ADDRESS: string;
  SMTP_EMAIL_PASSWORD: string;
  AUTH_URL: string;
  MAIN_URL: string;
  COMMON_URL: string;
  MESSAGE_URL: string;
  API_GATEWAY_URL: string;
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
