import Koa from 'koa';
import db from './database';

async function runApp() {
    const app = new Koa();

    await db.setup();

    app.use(async ctx => {ctx.body = 'Message';});

    app.listen(3001, () => console.log('Server has been started at 3000'));
}

export default runApp();
