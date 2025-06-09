<script>
	import Header from '$lib/header.svelte';
	import Card from '$lib/card.svelte';
</script>

<Header />

<main>
	<h1 class="mb-10 text-4xl font-bold">projects</h1>
	<section>
		<p>a collection of some of the things i've made.</p>
	</section>

	<section>
		<div class="project-container">
			<Card
				href="https://github.com/gooosexe/boids"
				imageSrc="/images/boids.png"
				title="boids"
				subtitle="simple simulation of flocking behavior in birds"
			/>
			<Card
				href="https://corkboard-gray.vercel.app/"
				imageSrc="/images/corkboard.png"
				title="corkboard"
				subtitle="a message board with an interesting twist"
			/>
			<Card
				href="https://github.com/gooosexe/nbodysim"
				imageSrc="/images/nbodysim.png"
				title="nbodysim"
				subtitle="an nbody simulation, using the barnes-hut algorithm"
			/>
			<Card
				href="https://hack404.dev/"
				imageSrc="/images/hack404.png"
				title="hack404"
				subtitle="website for hack404, a toronto-based hackathon"
			/>
			<Card
				href="https://paperade.vercel.app/"
				imageSrc="/images/paperade.png"
				title="paperade"
				subtitle="a tool to help you find and read papers efficiently"
			/>
		</div>
	</section>
</main>

<style>
	.project-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
	}
</style>
