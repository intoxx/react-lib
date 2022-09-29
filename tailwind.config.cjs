/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./{src,lib}/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: false
	},
	plugins: [],
	prefix: "rl-"
} 
