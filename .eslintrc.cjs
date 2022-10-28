/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
		'vue-global-api'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	globals: { defineOptions: 'writable' },
	rules: {
		'vue/multi-word-component-names': 'off'
	}
};
