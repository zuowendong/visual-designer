const genTempConfig = require('../utils/genTempConfig');
const createTemplate = require('../utils/createTmeplate');

class Component {
	async getCode(ctx) {
		const config = await genTempConfig(ctx.request.body);
		let templateCode = createTemplate(ctx.request.body);
		ctx.body = {
			code: 0,
			data: templateCode,
			msg: 'success'
		};
	}
}

module.exports = new Component();
