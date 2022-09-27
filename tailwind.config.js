/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary: '#242425',
			primary2: '#343434',
			font: '#D0CBC5',
			font2: '#ffffff',
			font3: '#000000',
			secondary: '#1053EE',
			secondary2: '#477BF3',
			plus: '#4FE855',
			minus: '#E84F4F',
		},
		extend: {},
	},
	plugins: [],
};
