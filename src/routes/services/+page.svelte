<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Services — Rustworks LLC</title>
</svelte:head>

<Nav />

<main class="stub">
	<div class="inner">
		<p class="eyebrow">Services</p>
		<h1>Coming soon</h1>
		<p>A detailed breakdown of our service offerings is on the way.</p>
		<a href="/">← Back to home</a>
	</div>
</main>

<Footer />

<style>
	.stub {
		min-height: calc(100vh - 64px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 1.5rem;
		text-align: center;
	}

	.inner {
		max-width: 480px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent);
	}

	h1 {
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: -0.025em;
		color: var(--text);
	}

	p {
		font-size: 1rem;
		color: var(--text-muted);
		line-height: 1.65;
	}

	a {
		font-size: 0.9375rem;
		font-weight: 600;
		color: var(--accent);
		text-decoration: none;
		margin-top: 0.5rem;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
