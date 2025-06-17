import type { PostData } from '$lib/types';

export const prerender = false;

export const load = async () => {
	const postModules = import.meta.glob('./posts/*.svx', { eager: true });
	const posts: PostData[] = [];

	for (const path in postModules) {
		const module = postModules[path] as Record<string, PostData>;
		// Parse date manually to avoid timezone issues
		const dateStr =
			typeof module.metadata.date === 'string'
				? module.metadata.date
				: (module.metadata.date as Date).toISOString().split('T')[0];
		const dateParts = dateStr
			.split('-')
			.map((x: string, i: number) => (i === 1 ? parseInt(x) - 1 : parseInt(x)));
		const date = new Date(Date.UTC(dateParts[0], dateParts[1], dateParts[2]));
		if (module.metadata) {
			posts.push({
				title: module.metadata.title,
				subtitle: module.metadata.subtitle,
				date: date
					.toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric',
						timeZone: 'UTC'
					})
					.toLowerCase(),
				path: path.replace(/^\.\/posts\/(.*)\.svx$/, '/blog/$1'),
				content: module.default.content
			});
		}
	}

	// Sort posts by date (newest first)
	posts.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);
		return dateB.getTime() - dateA.getTime();
	});

	return { posts };
};
