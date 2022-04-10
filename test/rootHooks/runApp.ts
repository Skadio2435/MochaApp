import App from '../../core/app';

export const mochaHooks = {
    beforeAll: async function () {
        await App;
    },
};
