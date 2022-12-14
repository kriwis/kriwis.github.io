/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'background-pattern': "url('./src/assets/code.svg')",
				'logo': "url('./src/assets/a_plus.png')"
			},
		},
	},
	plugins: [],
}
