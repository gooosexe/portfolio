<script>
	let content = {
		languages: {
			web: ['js', 'ts', 'html', 'css'],
			scripting: ['python', 'bash', 'zsh'],
			embedded: ['c', 'c++'],
			other: ['java', 'sql']
		},
		tech: {
			frontend: ['react', 'next.js', 'sveltekit', 'tailwind'],
			backend: ['node.js', 'express', 'postgresql', 'mongodb', 'spring'],
			tools: ['docker', 'postman', 'git', 'figma'],
			editors: ['zed', 'vscode', 'nvim', 'intellij idea']
		}
	};
</script>

<main class="mx-auto mb-10 max-w-3xl p-6">
	<h1 class="mb-10 text-4xl font-bold">about</h1>

	<section class="mb-10">
		<p class="mt-2 leading-loose">
			hey there, i'm oliver. i’m a passionate student in toronto studying at u of t. i'm interested
			in astrophysics, game dev, web dev, and design, among other topics.
		</p>
	</section>

	<section class="mb-6">
		<h2 class="text-2xl font-semibold">languages</h2>
		<ul class="mt-2 list-disc pl-6 leading-loose">
			{#each Object.entries(content.languages) as [category, items] (category)}
				<li>
					{category} ->
					{#each items as item, i (item)}
						{item}
						{#if i < items.length - 1}
							<span class="split">/</span>&nbsp; <!-- adding non-breaking space -->
						{/if}
					{/each}
				</li>
			{/each}
		</ul>
		<h2 class="mt-6 text-2xl font-semibold">tech</h2>
		<ul class="mt-2 list-disc pl-6 leading-loose">
			{#each Object.entries(content.tech) as [category, items] (category)}
				<li>
					{category} ->
					{#each items as item, i (item)}
						{item}
						{#if i < items.length - 1}
							<span class="split">/</span>&nbsp; <!-- adding non-breaking space -->
						{/if}
					{/each}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1 class="text-2xl font-semibold">this site</h1>
		<a href="https://us.umami.is/share/HwZnyuHQ5Rqz3NWf/refact0r.dev" class="external"
			>analytics<span class="arrow">/></span></a
		>
		<div class="info">
			stack -> sveltekit <span class="split">/</span> mdsvex
			<span class="split">/</span> vite <span class="split">/</span> github pages
		</div>
		<div class="info">
			fonts -> overpass mono <span class="split">/</span>
			<span style="font-family: 'Overpass'" class="tracking-wider">overpass</span>
		</div>
		<div class="info">
			<div class="colors">
				<div class="color" style="background: var(--bg-1); border: 2px solid var(--bg-2);">bg</div>
				<div class="color" style="background: var(--bg-2);">bg-2</div>
				<div class="color" style="background: var(--fg-2); color: var(--bg-1)">fg-2</div>
				<div class="color" style="background: var(--fg-1); color: var(--bg-1)">fg-1</div>
			</div>
		</div>
	</section>
</main>

<style>
	.colors {
		display: inline-flex;
		margin-top: 0.4rem;
		flex-wrap: wrap;
	}

	.color {
		display: inline-block;
		width: 5rem;
		text-align: center;
		font-size: 1em;
		border: 2px solid rgba(0, 0, 0, 0);
	}
</style>
