<section class="hero" id="home">
	<div class="glow glow-left" aria-hidden="true"></div>
	<div class="glow glow-right" aria-hidden="true"></div>

	<div class="inner">
		<div class="badge" data-reveal>
			<span class="badge-dot" aria-hidden="true"></span>
			Software &amp; Gaming Technology
		</div>

		<h1 data-reveal data-reveal-delay="1">
			Building and operating<br />
			<span class="gradient-text">user-first platforms</span>
		</h1>

		<p data-reveal data-reveal-delay="2">
			We handle the complete stack — from architecture and infrastructure
			to compliance and growth. Trusted by gaming communities worldwide.
		</p>

		<div class="actions" data-reveal data-reveal-delay="3">
			<a href="#contact" class="btn-primary">Get in Touch</a>
			<a href="#platforms" class="btn-secondary">
				Explore our platforms
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<line x1="5" y1="12" x2="19" y2="12"/>
					<polyline points="12 5 19 12 12 19"/>
				</svg>
			</a>
		</div>

		<div class="stats" data-reveal data-reveal-delay="4">
			<div class="stat">
				<span class="stat-value">3+</span>
				<span class="stat-label">Active platforms</span>
			</div>
			<div class="stat-divider" aria-hidden="true"></div>
			<div class="stat">
				<span class="stat-value">24/7</span>
				<span class="stat-label">Uptime monitoring</span>
			</div>
			<div class="stat-divider" aria-hidden="true"></div>
			<div class="stat">
				<span class="stat-value">6</span>
				<span class="stat-label">Core services</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: calc(100vh - 64px);
		display: flex;
		align-items: center;
		overflow: hidden;
		padding: 6rem 1.5rem;
	}

	.glow {
		position: absolute;
		pointer-events: none;
		border-radius: 50%;
	}

	.glow-left {
		top: 15%;
		left: -15%;
		width: 55%;
		height: 65%;
		background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
	}

	.glow-right {
		bottom: 5%;
		right: -10%;
		width: 45%;
		height: 55%;
		background: radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, transparent 70%);
	}

	.inner {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 14px;
		border: 1px solid var(--border);
		border-radius: 100px;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--text-muted);
		margin-bottom: 2rem;
		background: var(--surface);
	}

	.badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
		flex-shrink: 0;
		animation: pulse 2.4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.35; }
	}

	h1 {
		font-size: clamp(2.25rem, 5.5vw, 3.75rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.03em;
		color: var(--text);
		margin: 0 0 1.5rem;
	}

	.gradient-text {
		background: linear-gradient(135deg, var(--accent) 0%, #8b5cf6 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	p {
		font-size: clamp(1rem, 2vw, 1.125rem);
		color: var(--text-muted);
		line-height: 1.75;
		margin: 0 0 2.5rem;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.875rem;
		flex-wrap: wrap;
		margin-bottom: 4rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
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

	.btn-primary:hover {
		background: var(--accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 0 1.5rem;
		height: 48px;
		border: 1px solid var(--border);
		background: var(--surface);
		color: var(--text);
		font-size: 0.9375rem;
		font-weight: 500;
		text-decoration: none;
		border-radius: 10px;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.btn-secondary:hover {
		border-color: var(--accent);
		color: var(--accent);
		transform: translateY(-2px);
	}

	.stats {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		flex-wrap: wrap;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}

	.stat-value {
		font-size: 1.625rem;
		font-weight: 700;
		color: var(--text);
		letter-spacing: -0.025em;
	}

	.stat-label {
		font-size: 0.8125rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	.stat-divider {
		width: 1px;
		height: 36px;
		background: var(--border);
	}

	@media (max-width: 480px) {
		.hero {
			padding: 4rem 1.25rem;
		}

		.stat-divider {
			display: none;
		}

		.stats {
			gap: 1.5rem;
		}
	}
</style>
