<script lang="ts">
	// SVG strings are hard-coded in this file and never sourced from user input.
	const services = [
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
			title: 'Full-Stack Development',
			description:
				'End-to-end platform development from frontend interfaces to backend services, APIs, and real-time systems.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
			title: 'Infrastructure Management',
			description:
				'Reliable deployment, scaling, monitoring, and maintenance of production systems across any environment.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
			title: 'Security & Compliance',
			description:
				'Enterprise-grade security practices, data protection, legal compliance, and secure architecture design.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
			title: 'Payment Processing',
			description:
				'Secure payment integrations via Stripe and other providers with proper PCI compliance and fraud prevention.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
			title: 'Data Processing',
			description:
				'Efficient data pipelines, analytics, reporting, and real-time data synchronization across distributed systems.'
		},
		{
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			title: 'Community Operations',
			description:
				'Client-first platform design, moderation workflows, community management tools, and engagement systems for any audience.'
		}
	];
</script>

<section id="services" class="section">
	<div class="inner">
		<div class="section-header" data-reveal>
			<p class="eyebrow">What We Do</p>
			<h2>A complete platform stack</h2>
			<p class="subtitle">
				End-to-end capabilities to build, scale, and protect your digital products.
			</p>
		</div>

		<div class="grid">
			{#each services as service, i}
				<div class="card" data-reveal data-reveal-delay={String(Math.min((i % 3) + 1, 5))}>
					<div class="card-icon">
						{@html service.icon}
					</div>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 6rem 1.5rem;
		background: var(--bg-subtle);
	}

	.inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		max-width: 520px;
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

	.subtitle {
		font-size: 1.0625rem;
		color: var(--text-muted);
		line-height: 1.7;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
		border-radius: 16px;
		overflow: hidden;
	}

	.card {
		background: var(--surface);
		padding: 2rem;
		transition: background 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.card:hover {
		background: var(--surface-raised);
	}

	.card-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 10px;
		background: var(--accent-subtle);
		color: var(--accent);
		margin-bottom: 1.25rem;
	}

	.card h3 {
		font-size: 0.9375rem;
		font-weight: 700;
		color: var(--text);
		margin-bottom: 0.5rem;
		letter-spacing: -0.01em;
	}

	.card p {
		font-size: 0.875rem;
		color: var(--text-muted);
		line-height: 1.65;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.section {
			padding: 4rem 1.25rem;
		}
		.grid {
			grid-template-columns: 1fr;
			border-radius: 12px;
		}
	}
</style>
