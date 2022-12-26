const router = require('koa-router')();

router.post('/save', (ctx) => {
	console.log(123123, ctx.request.body);
});

// 获取场景中所有组件数据
router.get('/components', (ctx) => {
	console.log(ctx);
});

module.exports = router;
