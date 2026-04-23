<script lang="ts">
	import { theme } from '$lib/theme.svelte.js';

	let menuOpen = $state(false);
</script>

<nav>
	<div class="inner">
		<a href="/" class="logo">
			<span class="logo-mark" aria-hidden="true">R</span>
			Rustworks
		</a>

		<div class="links">
			<a href="/#services">Services</a>
			<a href="/#platforms">Platforms</a>
			<a href="/#contact">Company</a>
		</div>

		<div class="actions">
			<button
				class="theme-btn"
				onclick={() => theme.toggle()}
				aria-label={theme.current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if theme.current === 'dark'}
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<circle cx="12" cy="12" r="5"/>
						<line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
						<line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
					</svg>
				{:else}
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
					</svg>
				{/if}
			</button>

			<a href="/#contact" class="cta">Get in Touch</a>

			<button
				class="hamburger"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle navigation menu"
				aria-expanded={menuOpen}
			>
				{#if menuOpen}
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
						<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
					</svg>
				{:else}
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
						<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div class="mobile-nav" role="navigation" aria-label="Mobile navigation">
			<a href="/#services" onclick={() => (menuOpen = false)}>Services</a>
			<a href="/#platforms" onclick={() => (menuOpen = false)}>Platforms</a>
			<a href="/#contact" onclick={() => (menuOpen = false)}>Company</a>
			<a href="/#contact" onclick={() => (menuOpen = false)} class="mobile-cta">Get in Touch</a>
		</div>
	{/if}
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 100;
		border-bottom: 1px solid var(--border);
		background-color: color-mix(in srgb, var(--bg) 85%, transparent);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		transition: border-color 0.3s ease;
	}

	.inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 1rem;
		font-weight: 700;
		color: var(--text);
		text-decoration: none;
		flex-shrink: 0;
		letter-spacing: -0.01em;
	}

	.logo-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		background: var(--accent);
		color: #fff;
		border-radius: 6px;
		font-size: 0.8125rem;
		font-weight: 800;
		flex-shrink: 0;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.links a {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.15s;
	}

	.links a:hover {
		color: var(--text);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.theme-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: transparent;
		color: var(--text-muted);
		cursor: pointer;
		transition: all 0.15s;
		flex-shrink: 0;
	}

	.theme-btn:hover {
		color: var(--text);
		background: var(--surface);
	}

	.cta {
		display: inline-flex;
		align-items: center;
		padding: 0 1rem;
		height: 36px;
		background: var(--accent);
		color: #fff;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.15s;
		white-space: nowrap;
	}

	.cta:hover {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}

	.hamburger {
		display: none;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		background: transparent;
		border: 1px solid var(--border);
		border-radius: 8px;
		color: var(--text);
		cursor: pointer;
		flex-shrink: 0;
		transition: all 0.15s;
	}

	.hamburger:hover {
		background: var(--surface);
	}

	.mobile-nav {
		border-top: 1px solid var(--border);
		padding: 0.75rem 1rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.mobile-nav a {
		padding: 0.625rem 0.75rem;
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--text);
		text-decoration: none;
		border-radius: 8px;
		transition: background 0.15s;
	}

	.mobile-nav a:hover {
		background: var(--surface);
	}

	.mobile-cta {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.5rem;
		height: 44px;
		background: var(--accent) !important;
		color: #fff !important;
		font-weight: 600;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		.links {
			display: none;
		}
		.cta {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}
</style>
