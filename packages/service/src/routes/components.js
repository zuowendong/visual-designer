const router = require('koa-router')();
const { getCode } = require('../controllers/component');

router.post('/info', (ctx) => getCode(ctx));

module.exports = router;
