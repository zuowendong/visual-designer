const router = require('koa-router')();
const { componentCode } = require('../controllers/component');

router.post('/code', (ctx) => {
	componentCode(ctx);
});

module.exports = router;
