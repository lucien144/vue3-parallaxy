/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		commonjs: true,
		amd: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	parserOptions: { ecmaVersion: 'latest' },
	rules: {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'no-console': 'warn',
		'no-debugger': 'warn',
		'vue/max-len': [
			'warn', {
				code: 150,
				tabWidth: 4,
				ignoreStrings: true,
				ignoreHTMLAttributeValues: true,
				ignoreHTMLTextContents: true,
			},
		],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': ['warn', 'always'],
		'object-curly-newline': ['warn', { 'multiline': true, 'minProperties': 3 }],
		'array-bracket-newline': ['warn', { 'multiline': true, 'minItems': 3 }],
		'arrow-parens': ['warn', 'as-needed'],
		'linebreak-style': ['warn', 'unix'],
	},
};
