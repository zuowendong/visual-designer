function genTempConfig(config) {
	return new Promise((resolve) => {
		console.log('genTempConfig.js', config);

		resolve(config);
	});
}

module.exports = genTempConfig;
