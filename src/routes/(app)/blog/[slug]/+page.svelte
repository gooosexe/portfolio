<script lang="ts">
	import type { PageData } from '$lib/types';
	
	export let data: PageData;
</script>

<article>
	<h1>{data.title}</h1>
	<p>{data.date}</p>
	{#if data.content}
		<svelte:component this={data.content} />
	{:else}
		<p>Content not available.</p>
	{/if}
</article>
