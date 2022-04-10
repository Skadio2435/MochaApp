import { NODE_ENVS } from './static';
import dotenv from 'dotenv';
dotenv.config();

const envs = {
    [NODE_ENVS.DEVELOPMENT]: process.env.DATABASE_URL_DEVELOPMENT,
    [NODE_ENVS.MOCHA]: process.env.DATABASE_URL_MOCHA,
    [NODE_ENVS.PRODUCTION]: process.env.DATABASE_URL_PRODUCTION,
};

const GLOBAL_CONFIG = {
    NODE_ENV: process.env.NODE_ENV || NODE_ENVS.DEVELOPMENT,

    DATABASE: {
        get URL() {
            return envs[GLOBAL_CONFIG.NODE_ENV as NODE_ENVS] || null;
        },
    },
};

export default GLOBAL_CONFIG;
