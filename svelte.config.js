import { mdsvex } from 'mdsvex';
import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { adapter: vercel() },
	prerender: {
		entries: ['*'] // Prerender all pages
	},
	extensions: ['.svelte', '.svx']
};

export default config;
