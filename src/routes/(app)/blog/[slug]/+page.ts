export const prerender = false;

export async function load({ params }: { params: { slug: string } }) {
	try {
		const post = await import(`$posts/${params.slug}.svx`);
		const { title, subtitle } = post.metadata || {};

		// Parse date manually to avoid timezone issues
		const dateStr =
			typeof post.metadata.date === 'string'
				? post.metadata.date
				: (post.metadata.date as Date).toISOString().split('T')[0];
		const dateParts = dateStr
			.split('-')
			.map((x: string, i: number) => (i === 1 ? parseInt(x) - 1 : parseInt(x)));
		const date = new Date(Date.UTC(dateParts[0], dateParts[1], dateParts[2]));

		const content = post.default;

		if (!content) {
			throw new Error('Post content not found');
		}

		return {
			title: title || 'Untitled',
			subtitle: subtitle || '',
			date: date
				.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					timeZone: 'UTC'
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
