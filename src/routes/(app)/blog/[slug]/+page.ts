export const prerender = false;

export async function load({ params }) {
	try {
		const post = await import(`$posts/${params.slug}.svx`);
		const { title } = post.metadata || {};

		const date = new Date(post.metadata.date);

		const content = post.default;

		if (!content) {
			throw new Error('Post content not found');
		}

		return {
			title: title || 'Untitled',
			date: date
				.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				})
				.toLowerCase(),
			path: `/blog/${params.slug}`,
			content
		};
	} catch (error) {
		console.log(error);
		throw new Error(`Post not found: ${params.slug}`);
	}
}
