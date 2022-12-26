const genTempConfig = require('../utils/genTempConfig');
const createTemplate = require('../utils/createTmeplate');

class Component {
	async componentCode(ctx) {
		const config = await genTempConfig(ctx.request.body);
		let templateCode = createTemplate(config);
		ctx.body = {
			code: 0,
			data: templateCode,
			msg: 'success'
		};
	}
}

module.exports = new Component();
