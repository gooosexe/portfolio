export const prerender = false;

export async function load({ params }) {
	try {
		const post = await import(`$posts/${params.slug}.svx`);
		const { title, date } = post.metadata || {};
		const content = post.default;

		if (!content) {
			throw new Error('Post content not found');
		}

		return {
			title: title || 'Untitled',
			date: date || 'Unknown date',
			content
		};
	} catch (error) {
		console.log(error);
		throw new Error(`Post not found: ${params.slug}`);
	}
}
