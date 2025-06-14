<script lang="ts">
	import type { PostData } from '$lib/types';

	export let data: PostData;
</script>

<main>
	<article>
		<div class="mb-10 flex flex-col">
			<h1>{data.title}</h1>
			<p>{data.date}</p>
		</div>
		{#if data.content}
			<svelte:component this={data.content} />
		{:else}
			<p>Content not available.</p>
		{/if}
	</article>
</main>
