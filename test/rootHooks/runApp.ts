import { NODE_ENVS } from '../../config/static';
import App from '../../core/app';

export const mochaHooks = {
    beforeAll: async function () {
        process.env.NODE_ENV = NODE_ENVS.MOCHA;

        await App;
    },
};
