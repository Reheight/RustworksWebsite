<footer>
	<div class="inner">
		<div class="top">
			<div class="brand">
				<a href="/" class="logo" aria-label="Rustworks home">
					<span class="logo-mark" aria-hidden="true">R</span>
					Rustworks
				</a>
				<p>
					Building and operating user-first platforms that prioritize operational excellence,
					security, and community engagement.
				</p>
			</div>

			<nav class="link-cols" aria-label="Footer navigation">
				<div class="col">
					<p class="col-title">Services</p>
					<ul role="list">
						<li><a href="/#services">Full-Stack Dev</a></li>
						<li><a href="/#services">Infrastructure</a></li>
						<li><a href="/#services">Security</a></li>
						<li><a href="/#services">Payments</a></li>
						<li><a href="/#services">Data Processing</a></li>
						<li><a href="/#services">Community Ops</a></li>
					</ul>
				</div>

				<div class="col">
					<p class="col-title">Platforms</p>
					<ul role="list">
						<li>
							<a href="https://tropicalrust.org" target="_blank" rel="noopener noreferrer">
								Tropical Rust
								<svg
									width="11"
									height="11"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-label="Opens in new tab"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									<polyline points="15 3 21 3 21 9" />
									<line x1="10" y1="14" x2="21" y2="3" />
								</svg>
							</a>
						</li>
						<li>
							<a href="https://rustyrails.org" target="_blank" rel="noopener noreferrer">
								Rusty Rails
								<svg
									width="11"
									height="11"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-label="Opens in new tab"
								>
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
									<polyline points="15 3 21 3 21 9" />
									<line x1="10" y1="14" x2="21" y2="3" />
								</svg>
							</a>
						</li>
					</ul>
				</div>

				<div class="col">
					<p class="col-title">Company</p>
					<ul role="list">
						<li><a href="/#home">About</a></li>
						<li><a href="/#contact">Contact</a></li>
					</ul>
				</div>
			</nav>
		</div>

		<div class="bottom">
			<p class="copy">&copy; {new Date().getFullYear()} Rustworks LLC. All rights reserved.</p>
			<p class="tagline">Built with operational excellence in mind.</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--bg-subtle);
		border-top: 1px solid var(--border);
		padding: 4rem 1.5rem 2rem;
	}

	.inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	.top {
		display: grid;
		grid-template-columns: 1.6fr 1fr;
		gap: 4rem;
		margin-bottom: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--border);
	}

	.brand {
		max-width: 340px;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 1rem;
		font-weight: 700;
		color: var(--text);
		text-decoration: none;
		margin-bottom: 1rem;
		letter-spacing: -0.01em;
	}

	.logo-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		background: var(--accent);
		color: #fff;
		border-radius: 5px;
		font-size: 0.75rem;
		font-weight: 800;
		flex-shrink: 0;
	}

	.brand p {
		font-size: 0.875rem;
		color: var(--text-muted);
		line-height: 1.7;
	}

	.link-cols {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.col-title {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text);
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	ul a {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 0.875rem;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	ul a:hover {
		color: var(--text);
	}

	.bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.copy,
	.tagline {
		font-size: 0.8125rem;
		color: var(--text-muted);
	}

	@media (max-width: 900px) {
		.top {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
		.brand {
			max-width: 100%;
		}
	}

	@media (max-width: 560px) {
		footer {
			padding: 3rem 1.25rem 1.5rem;
		}
		.link-cols {
			grid-template-columns: repeat(2, 1fr);
		}
		.bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
