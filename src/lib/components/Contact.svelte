<section id="contact" class="section">
	<div class="inner">
		<div class="content" data-reveal>
			<p class="eyebrow">Get in Touch</p>
			<h2>Let's build something together</h2>
			<p class="lead">
				Whether you need a scalable platform, robust infrastructure, or a community built from the
				ground up — whatever the domain, we'd love to hear from you.
			</p>

			<ul class="contact-points" role="list">
				<li>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg
					>
					Full-stack consulting &amp; development
				</li>
				<li>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg
					>
					Infrastructure design &amp; management
				</li>
				<li>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg
					>
					Community platform partnerships
				</li>
			</ul>
		</div>

		<div class="email-card" data-reveal data-reveal-delay="2">
			<div class="email-icon" aria-hidden="true">
				<svg
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.75"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>
			</div>
			<p class="email-label">Email us directly</p>
			<a href="mailto:contact@rustworks.org" class="email-address"> contact@rustworks.org </a>
			<p class="email-note">We typically respond within one business day.</p>
			<a href="mailto:contact@rustworks.org" class="email-btn">
				Send an Email
				<svg
					width="15"
					height="15"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<line x1="5" y1="12" x2="19" y2="12" />
					<polyline points="12 5 19 12 12 19" />
				</svg>
			</a>
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
		margin-bottom: 2rem;
	}

	.contact-points {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.contact-points li {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--text);
	}

	.contact-points svg {
		color: var(--accent);
		flex-shrink: 0;
	}

	/* Email card */
	.email-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		padding: 2.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
	}

	.email-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		border-radius: 12px;
		background: var(--accent-subtle);
		color: var(--accent);
		flex-shrink: 0;
	}

	.email-label {
		font-size: 0.8125rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--text-muted);
	}

	.email-address {
		font-size: 1.375rem;
		font-weight: 700;
		color: var(--text);
		text-decoration: none;
		letter-spacing: -0.015em;
		transition: color 0.15s;
	}

	.email-address:hover {
		color: var(--accent);
	}

	.email-note {
		font-size: 0.9375rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.email-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-top: 0.5rem;
		padding: 0 1.5rem;
		height: 48px;
		background: var(--accent);
		color: #fff;
		font-size: 0.9375rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 10px;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.email-btn:hover {
		background: var(--accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
	}

	@media (max-width: 900px) {
		.inner {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	@media (max-width: 560px) {
		.section {
			padding: 4rem 1.25rem;
		}
		.email-card {
			padding: 1.75rem;
		}
		.email-address {
			font-size: 1.125rem;
		}
	}
</style>
