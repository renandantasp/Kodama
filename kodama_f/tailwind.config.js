const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')
const ratioPlugin = require('@tailwindcss/aspect-ratio')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		extend: {
			padding: {
				'1/3': '33.33333%',
				'2/3': '66.66667%'
			}
		},
		minHeight: {
			'1/2': '50%'
		},
		height: {
			128: '28rem'
		},
		fontFamily: {
			sans: ['noto sans', 'FontAwesome']
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin, ratioPlugin]
}
module.exports = config
