import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

const CORS_URL = ['https://productionUrl'];

const common = {
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 5000,
  env: process.env.NODE_ENV || 'development',

  corsUrl: (process.env.NODE_ENV === 'production' ? CORS_URL : true) || '',

  jwtSecret: process.env.JWT_SECRET || '',
};

export default common;
