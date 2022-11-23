const createTemplate = require('../utils/createTmeplate');

class User {
	async getUser(ctx) {
		ctx.body = { name: 'jack' };
	}

	async getUserInfo(ctx) {
		let { name, age } = ctx.request.body;

		let data = createTemplate();
		console.log('user.js', data);

		ctx.body = {
			code: 0,
			data: {
				data: data,
				name: `${name}今年${age}岁了`,
				...ctx.request.body
			},
			msg: 'success'
		};
	}
}

module.exports = new User();
