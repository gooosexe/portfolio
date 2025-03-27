<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.body.style.backgroundColor = 'rgb(29,29,36)';
		document.body.style.color = 'rgb(216,211,179)';
		document.body.style.fontFamily = 'Cascadia Code, monospace';
	});
</script>

<div class="container">
	<h1>oliver huang.</h1>
	<p>math and physics student.</p>
	<nav>
		<a class="nav-item" href="/about">about</a>
		<a class="nav-item" href="/projects">projects</a>
		<a class="nav-item" href="/contact">contact</a>
	</nav>
</div>

<style>
	.container {
		width: 60%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		margin: 0 auto;
	}

	h1 {
		font-size: 3rem;
	}

	nav {
		margin-top: 1rem;
		display: flex;
		gap: 1.5rem;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.2rem;
		text-decoration: none;
		color: rgb(216, 211, 179);
		position: relative;
		transition: transform 0.3s ease-in-out;
	}

	.nav-item::before {
		content: '->';
		opacity: 1;
		transform: translateX(0px);
		transition:
			opacity 0.3s ease-in-out,
			transform 0.3s ease-in-out;
	}

	.nav-item:hover {
		transform: translateX(3px);
	}

	.nav-item:hover::before {
		opacity: 1;
		transform: rotate(0deg) scale(1) translateX(2px);
	}
</style>
