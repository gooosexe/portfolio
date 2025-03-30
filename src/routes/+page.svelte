<div class="container leading-normal">
	<h1>oliver huang.</h1>
	<p>cs and physics student.</p>
	<nav class="mt-3">
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
		display: flex;
		gap: 2.5rem;
	}

	.nav-item {
		display: flex;
		align-items: center;
		font-family: 'Overpass Mono', monospace;
		gap: 0.5rem;
		font-size: 1.2rem;
		text-decoration: none;
		position: relative;
		transition: transform 0.3s ease-in-out;
	}

	.nav-item::before {
		content: '→';
		position: absolute;
		left: 0;
		width: 100%;
		opacity: 0; /* Initially hidden */
		transition:
			opacity 0.3s ease-in-out,
			transform 0.3s ease-in-out;
	}

	.nav-item:hover {
		transform: translateX(15px);
	}

	.nav-item:hover::before {
		opacity: 1;
		transform: translateX(-15px); /* Move the arrow into position */
	}
</style>
