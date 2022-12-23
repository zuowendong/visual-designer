const Koa = require('koa');
const Router = require('koa-router');
const { koaBody } = require('koa-body');

const user = require('./routes/user.js');
const component = require('./routes/components');

//koa实例化
const app = new Koa();
const router = new Router();

app.use(koaBody());

router.get('/', async (ctx) => {
	ctx.body = 'hello World !!';
});

router.use('/user', user.routes());
router.use('/component', component.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
	console.log('The service starts at http://127.0.0.1:3000');
});
