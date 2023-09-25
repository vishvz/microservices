import { createLogger, format } from 'winston';
import DailyRotateFile, {
  DailyRotateFileTransportOptions,
} from 'winston-daily-rotate-file';
const { json, simple, timestamp, combine, printf } = format;

const dailyRotate: (type: 'normal' | 'query') => DailyRotateFile = type => {
  const opts: DailyRotateFileTransportOptions = {
    filename: 'error-%DATE%.log',
    datePattern: 'DD-MM-YYYY',
    dirname: 'logs/',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  };
  if (type === 'query') {
    opts['filename'] = type + '-%DATE%.log';
  }

  return new DailyRotateFile(opts);
};

const logger = createLogger({
  format: json(),
  transports: [dailyRotate('normal')],
});

const custom = printf(({ message, timestamp }) => {
  return `${timestamp} ${message}`;
});

export const queryLogger = createLogger({
  format: combine(timestamp(), custom),
  transports: [dailyRotate('query')],
});

export default logger;
