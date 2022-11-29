const genTempConfig = require('../utils/genTempConfig');
const createTemplate = require('../utils/createTmeplate');

class User {
	async getUser(ctx) {
		ctx.body = { name: 'jack' };
	}

	async getUserInfo(ctx) {
		const config = await genTempConfig(ctx.request.body);
		console.log('user.js', config);

		let templateCode = createTemplate(config);
		ctx.body = {
			code: 0,
			data: templateCode,
			msg: 'success'
		};
	}
}

module.exports = new User();