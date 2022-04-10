module.exports = {
    spec: '**/*.spec.ts',
    require: ['ts-node/register/transpile-only', './test/rootHooks/connectDB.ts'],
    ui: 'bdd',
};
