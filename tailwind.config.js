module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'landing-page': "url('/src/assets/landing-page.png')",
			},
			colors: {
				customDarkPurple: '#06032C',
				customDarkerPurple: '#050221',
				customLightPink: '#EADAFF',
				customLightPurple: '#7C77B3',
				customAccent: '#27A68E',
			},
			fontFamily: {
				bebasNeue: ['Bebas Neue'],
				inter: ['Inter'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'),],
};
