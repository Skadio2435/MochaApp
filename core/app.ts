import Koa from 'koa';

async function runApp() {
    const app = new Koa();

    app.use(async ctx => {
        ctx.body = 'Message';
    });

    app.listen(3001, () => console.log('Server has been started at 3000'));
}

export default runApp();
