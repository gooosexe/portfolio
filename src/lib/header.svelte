<header>
	<a href="/"><span class="title">oliver huang</span></a>
	<nav>
		<a href="/about" class="nav-item">about</a>
		<a href="/projects" class="nav-item">projects</a>
		<a href="/contact" class="nav-item">contact</a>
	</nav>
</header>

<style>
	header {
		background-color: var(--bg-1);
		color: var(--fg-1);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'overpass mono', monospace;
		transition: background-color 0.3s ease;
	}

	nav {
		display: flex;
		gap: 2.5rem;
		margin-right: 1.5rem;
	}

	.nav-item {
		text-decoration: none;
		color: var(--fg-1);
		font-size: 1.2rem;
		position: relative;
		transition: transform 0.3s ease-in-out;
	}

	.nav-item::before {
		content: '→';
		position: absolute;
		left: 0;
		width: 100%;
		opacity: 0;
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

	.title {
		position: relative;
		display: inline-block;
		font-size: 2rem;
		text-decoration: underline transparent;
		transition: text-decoration 0.2s ease-in-out;
	}

	.title:hover {
		cursor: pointer;
		text-decoration: underline currentColor;
	}

	@media (max-width: 768px) {
		.title {
			display: none;
		}
	}
</style>
