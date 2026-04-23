<script lang="ts">
	const items = [
		'Operational reliability and 24/7 uptime',
		'Enterprise security standards and data protection',
		'Scalable infrastructure and performance',
		'Legal compliance and regulatory adherence',
		'Player-first community engagement',
		'Transparent and ethical practices'
	];
</script>

<section class="section">
	<div class="inner">
		<div class="content" data-reveal>
			<p class="eyebrow">Our Focus</p>
			<h2>What we stand for</h2>
			<p class="lead">
				Every decision we make is guided by a core set of principles that put users, operators, and
				the broader community first.
			</p>
		</div>

		<ul class="list" role="list">
			{#each items as item, i}
				<li class="item" data-reveal data-reveal-delay={String(Math.min(i + 1, 5))}>
					<span class="check" aria-hidden="true">
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<polyline points="20 6 9 17 4 12" />
						</svg>
					</span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		align-items: center;
	}

	.eyebrow {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.25rem);
		font-weight: 800;
		letter-spacing: -0.025em;
		color: var(--text);
		margin-bottom: 1.25rem;
	}

	.lead {
		font-size: 1.0625rem;
		color: var(--text-muted);
		line-height: 1.75;
	}

	.list {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.item {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--text);
		line-height: 1.5;
	}

	.check {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--accent-subtle);
		color: var(--accent);
		flex-shrink: 0;
		margin-top: 1px;
	}

	@media (max-width: 900px) {
		.inner {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		.list {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.section {
			padding: 4rem 1.25rem;
		}
	}
</style>
