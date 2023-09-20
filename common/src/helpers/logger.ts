import { createLogger, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { json } = format;

const dailyRotate: DailyRotateFile = new DailyRotateFile({
  filename: 'error-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  dirname: 'logs/',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = createLogger({
  format: json(),
  transports: [dailyRotate],
});

export default logger;
