<script lang="ts">
	import { handleSubmit } from '$lib/contact'; // adjust the path as needed
	import Header from '../../components/header.svelte';
	import { DiscordLogo, LinkedinLogo, Envelope } from 'phosphor-svelte';

	let status = 'submit ->';

	// The form submission function that calls the imported one
	const onSubmit = async (event: Event) => {
		await handleSubmit(event, (newStatus: string) => {
			status = newStatus;
		});
	};
</script>

<Header />

<main class="mx-auto mb-10 max-w-3xl p-6">
	<h1 class="mb-10 text-4xl font-bold">contact.</h1>

	<section class="mb-10">
		<p class="mt-2 leading-loose">
			feel free to reach out to me. whether it's a question, suggestion, or just to say hi, i'm
			always happy to chat.
		</p>
	</section>

	<section class="mb-10">
		<h1 class="mb-6 text-2xl font-bold">some links.</h1>
		<ul>
			<!-- discord -->
			<li>
				<DiscordLogo class="inline-block h-6 w-6" /> discord -> __gooose
			</li>
			<!-- linkedin -->
			<li>
				<LinkedinLogo class="inline-block h-6 w-6" /> linkedin ->
				<a href="https://www.linkedin.com/in/oliver-huang-931947232/">oliver huang</a>
			</li>
			<!-- email -->
			<li>
				<Envelope class="inline-block h-6 w-6" /> email ->
				<a href="mailto:ohuang4131@gmail.com">ohuang4131@gmail.com</a>
			</li>
		</ul>
	</section>

	<section>
		<h2 class="text-2xl font-semibold">contact form.</h2>
		<!-- <form action="https://formspree.io/f/xrbparpp" method="POST" class="mt-4"> -->
		<form on:submit|preventDefault={onSubmit} class="mt-4">
			<input type="hidden" name="access_key" value="access-key" />
			<div class="mb-4">
				<label for="name" class="block text-lg font-medium">name</label>
				<input type="text" id="name" name="name" required />
			</div>

			<div class="mb-4">
				<label for="email" class="block text-lg font-medium">email</label>
				<input type="email" id="email" name="email" required />
			</div>

			<div class="mb-4">
				<label for="message" class="block text-lg font-medium">message</label>
				<textarea id="message" name="message" rows="5" required></textarea>
			</div>

			<div class="mb-4">
				<button type="submit">{status}</button>
			</div>
		</form>
	</section>
</main>

<style>
	input {
		background-color: var(--bg-1);
		width: 100%;
		border-radius: 8px;
		border: 3px solid var(--bg-2);
		padding: 0.5rem;
		font-size: 1rem;
		transition: border 0.2s ease;
	}

	input:focus {
		box-shadow: none;
		border: 3px solid var(--bg-3);
	}

	textarea {
		background-color: var(--bg-1);
		width: 100%;
		border-radius: 8px;
		border: 3px solid var(--bg-2);
		padding: 0.5rem;
		font-size: 1rem;
	}

	textarea:focus {
		box-shadow: none;
		border: 3px solid var(--bg-3);
	}

	button {
		background-color: var(--bg-2);
		color: var(--fg-1);
		padding: 10px 20px;
		font-size: 1rem;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	button:hover {
		background-color: var(--bg-3);
	}
</style>
