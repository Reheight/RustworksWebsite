<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { theme } from '$lib/theme.svelte.js';
	import { browser } from '$app/environment';

	let { children } = $props();

	// Read saved preference once on mount
	$effect(() => {
		if (!browser) return;
		const saved = localStorage.getItem('rw-theme');
		if (saved === 'dark' || saved === 'light') {
			theme.current = saved;
		}
	});

	// Sync class + localStorage whenever theme changes
	$effect(() => {
		if (!browser) return;
		document.documentElement.classList.toggle('dark', theme.current === 'dark');
		localStorage.setItem('rw-theme', theme.current);
	});

	// Scroll-reveal via IntersectionObserver
	$effect(() => {
		if (!browser) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('visible');
				});
			},
			{ threshold: 0.1 }
		);
		document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Rustworks LLC — User-First Platforms</title>
</svelte:head>

{@render children()}
