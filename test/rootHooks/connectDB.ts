import db from '../../core/database';

export const mochaHooks = {
    beforeAll: async function () {
        await db.setup();
    },
};
