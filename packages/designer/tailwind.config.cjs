/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'../components/src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'img-locked': "url('./src/assets/images/locked.png)"
			}
		}
	},
	plugins: [],
	important: true
};
