require('dotenv').config();

const env = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }
  return value;
};

export const config = {
  port: +env('PORT'),
  host: env('HOST'),
  node_env: env('NODE_ENV'),
  mongoDB: {
    uri: env('MONGODB_URI'),
    username: env('MONGODB_USERNAME'),
    password: env('MONGODB_PASSWORD'),
    database: env('MONGODB_DATABASE'),
  },
  jwt: {
    secret: env('JWT_SECRET')
  },
};
