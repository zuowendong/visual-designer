class User {
	async getUser(ctx) {
		ctx.body = { name: 'jack' };
	}

	async getUserInfo(ctx) {
		let { name, age } = ctx.request.body;
		ctx.body = {
			code: 0,
			data: {
				name: `${name}今年${age}岁了`
			},
			msg: 'success'
		};
	}
}

module.exports = new User();
