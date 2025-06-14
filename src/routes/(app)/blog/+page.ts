import type { PostData } from '$lib/types';

export const prerender = false;

export const load = async () => {
	const postModules = import.meta.glob('./posts/*.svx', { eager: true });
	const posts: PostData[] = [];

	for (const path in postModules) {
		const module = postModules[path] as Record<string, PostData>;
		const date = new Date(module.metadata.date);
		if (module.metadata) {
			posts.push({
				title: module.metadata.title,
				date: date
					.toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})
					.toLowerCase(),
				path: path.replace(/^\.\/posts\/(.*)\.svx$/, '/blog/$1'),
				content: module.default.content
			});
		}
	}

	return { posts };
};
