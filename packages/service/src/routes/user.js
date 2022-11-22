const router = require('koa-router')();
const { getUser, getUserInfo } = require('../controllers/user');

router.get('/user', (ctx) => {
	getUser(ctx);
});

router.post('/info', (ctx) => {
	getUserInfo(ctx);
});

module.exports = router;
