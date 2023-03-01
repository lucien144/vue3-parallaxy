/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				4: '4px',
				8: '8px',
				16: '16px',
				32: '32px',
				64: '64px',
				128: '128px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
