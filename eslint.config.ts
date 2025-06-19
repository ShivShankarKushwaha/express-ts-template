import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.node // Focus on Node.js globals
			},
			parserOptions: {
				project: './tsconfig.json' // Important for TypeScript backend
			}
		},
		plugins: {
			'@typescript-eslint': typescriptEslint,
			'unused-imports': unusedImports
		},
		rules: {
			eqeqeq: ['error', 'always'],
			curly: 'error',
			'@typescript-eslint/no-explicit-any': 'off', // Adjust based on your needs
			'@typescript-eslint/no-unused-vars': 'off', // Adjust based on your needs
			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			]
		}
	},
	{
		ignores: ['node_modules/', 'dist/', 'build/'] // Standard Node.js ignores
	}
);
