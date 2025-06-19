// vitest.config.js
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	test: {
		environment: 'node',
		include: ['src/tests/**/*.test.ts', 'src/tests/**/*.spec.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './coverage'
		},
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
});
