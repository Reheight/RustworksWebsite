<script lang="ts">
	const platforms = [
		{
			name: 'Tropical Rust',
			role: 'Gaming network by Rustworks',
			tagline: 'Modded servers done right.',
			subtitle: 'Where strategy meets speed',
			description:
				'Modded Rust servers with balanced gameplay, enhanced gathering rates, fair competition, and a thriving community of dedicated players who value skill over exploits.',
			href: 'https://tropicalrust.org',
			external: true
		},
		{
			name: 'Rusty Rails',
			role: 'Gaming network by Rustworks',
			tagline: 'Earn every wipe, dominate every fight.',
			subtitle: 'Where strategy meets speed',
			description:
				'Modded Rust servers built for competitive players. Balanced gameplay, sophisticated anti-cheat systems, statistics and leaderboards, and a passionate community.',
			href: 'https://rustyrails.org',
			external: true
		}
	];
</script>

<section id="platforms" class="section">
	<div class="inner">
		<div class="section-header" data-reveal>
			<p class="eyebrow">Our Platforms</p>
			<h2>Gaming networks by Rustworks</h2>
			<p class="section-subtitle">
				Rustworks LLC is the parent company behind these platforms — handling every layer of
				infrastructure, security, and community operations so each network can focus on delivering a
				world-class player experience.
			</p>
		</div>

		<div class="grid">
			{#each platforms as platform, i}
				<a
					href={platform.href}
					class="card"
					target="_blank"
					rel="noopener noreferrer"
					data-reveal
					data-reveal-delay={String(i + 1)}
				>
					<div class="card-top">
						<span class="platform-name">{platform.name}</span>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="ext-icon"
							aria-hidden="true"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</div>

					<p class="tagline">{platform.tagline}</p>
					<p class="subtitle-text">{platform.subtitle}</p>
					<p class="description">{platform.description}</p>

					<div class="card-footer">
						<span class="role">{platform.role}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 6rem 1.5rem;
		background: var(--bg);
	}

	.inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		max-width: 600px;
		margin: 0 auto 4rem;
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}

	.section-header h2 {
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		font-weight: 800;
		letter-spacing: -0.025em;
		color: var(--text);
		margin-bottom: 1rem;
	}

	.section-subtitle {
		font-size: 1.0625rem;
		color: var(--text-muted);
		line-height: 1.7;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		padding: 2rem;
		border: 1px solid var(--border);
		border-radius: 14px;
		background: var(--surface);
		text-decoration: none;
		color: inherit;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
	}

	.card-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.platform-name {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--text);
		letter-spacing: -0.01em;
	}

	.ext-icon {
		color: var(--text-muted);
		flex-shrink: 0;
		margin-top: 2px;
		transition: color 0.15s;
	}

	.card:hover .ext-icon {
		color: var(--accent);
	}

	.tagline {
		font-size: 1rem;
		font-weight: 600;
		color: var(--accent);
		line-height: 1.3;
	}

	.subtitle-text {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.description {
		font-size: 0.9375rem;
		color: var(--text-muted);
		line-height: 1.65;
		flex: 1;
		margin-top: 0.25rem;
	}

	.card-footer {
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid var(--border);
	}

	.role {
		font-size: 0.8125rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	@media (max-width: 640px) {
		.section {
			padding: 4rem 1.25rem;
		}
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
