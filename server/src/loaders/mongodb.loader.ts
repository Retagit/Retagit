import mongoose from 'mongoose';
import { logger } from '../utils/logger';
import { config } from '../config/environments';

const db = mongoose.connection;
mongoose.set('strictQuery', false); // to allow empty queries

export const mongodbConnect = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: config.mongoDB.database,
  };

  try {
    await mongoose.connect(config.mongoDB.uri, options);
    return db;
  } catch (error: any) {
    logger.error('❌  MongoDB connection error: %o', error.message);
    process.exit(1);
  }
};
