import winston from 'winston';
import { config } from '../config/environments';

const filePath = './logs/';

const transports = [];

if (config.node_env !== 'development') {
  transports.push(
    new winston.transports.File({
      filename: `${filePath}logs.log`,
      level: 'info',
    })
  );
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
        winston.format.colorize()
      ),
    })
  );
}

export const logger = winston.createLogger({
  level: 'info',
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
});
