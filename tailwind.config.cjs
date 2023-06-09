const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui],
	// darkMode: ['class', '[data-theme="business"]'],
	daisyui: {
		themes: ['corporate', 'business'],
		darkTheme: 'business'
	}
};

module.exports = config;
