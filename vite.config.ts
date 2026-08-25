import { defineConfig } from 'vite-plus'

export default defineConfig({
	lint: {
		ignorePatterns: ['.astro/**', 'dist/**', '**/*.astro'],
		options: {
			typeAware: true,
			typeCheck: true,
		},
		rules: {
			'no-unused-vars': 'error',
		},
	},
	fmt: {
		ignorePatterns: ['.astro/**', 'dist/**', '**/*.astro'],
		useTabs: true,
		singleQuote: true,
		semi: false,
		sortImports: {
			groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
			newlinesBetween: true,
		},
	},
	run: {
		tasks: {
			build: {
				command: ['astro check', 'astro build'],
				input: [{ auto: true }, '!.astro', '!.astro/**', '!dist', '!dist/**'],
				output: ['.astro/**', 'dist/**'],
			},
			typecheck: {
				command: 'vp check --no-fmt --no-lint',
				input: [{ auto: true }, '!.astro', '!.astro/**'],
			},
		},
	},
})
