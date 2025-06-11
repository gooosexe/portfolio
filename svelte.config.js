import { mdsvex } from 'mdsvex';
import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md']
		})
	],
	kit: {
		adapter: vercel(),
		alias: {
			'@content': './src/content',
			'@': './src',
			$posts: path.resolve('./src/routes/blog/posts')
		}
	},
	prerender: {
		entries: ['*'] // Prerender all pages
	},
	extensions: ['.svelte', '.svx', '.md', '.mdsvex']
};

export default config;
