<script lang="ts">
	export let imageSrc: string;
	export let title: string;
	export let subtitle: string;
	export let href: string;
</script>

<div class="card">
	<a {href} class="hover:no-underline">
		<img src={imageSrc} alt={title} class="card-image" />
		<div class="card-content">
			<h2 class="card-title">{title}</h2>
			<p class="card-subtitle">{subtitle}</p>
		</div>
	</a>
</div>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.card {
		border-radius: 1rem;
		overflow: hidden;
		background-color: var(--bg-2);
		color: var(--fg-1);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		max-width: 300px;
		transition: transform 0.2s ease;
	}

	.card:hover {
		transform: translateY(-5px);
	}

	.card-image {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.card-content {
		padding: 1rem;
	}

	.card-title {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.card-subtitle {
		margin-top: 0.5rem;
		font-size: 0.95rem;
		color: var(--fg-2);
	}
</style>
