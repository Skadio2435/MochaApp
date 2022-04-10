import { NODE_ENVS } from '../../config/static';
import db from '../../core/database';

export const mochaHooks = {
    beforeAll: async function () {
        process.env.NODE_ENV = NODE_ENVS.MOCHA;
 
        await db.setup();
    },
};
