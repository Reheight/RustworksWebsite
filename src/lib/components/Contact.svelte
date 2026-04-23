<script lang="ts">
	import { enhance } from '$app/forms';

	let success = $state(false);
	let errorMsg = $state('');
	let loading = $state(false);
</script>

<section id="contact" class="section">
	<div class="inner">
		<div class="content" data-reveal>
			<p class="eyebrow">Get in Touch</p>
			<h2>Let's build something together</h2>
			<p class="lead">
				Whether you need a scalable platform, robust infrastructure, or a gaming community built
				from the ground up — we'd love to hear from you.
			</p>

			<ul class="contact-points" role="list">
				<li>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
					Full-stack consulting &amp; development
				</li>
				<li>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
					Infrastructure design &amp; management
				</li>
				<li>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
					Gaming network partnerships
				</li>
			</ul>
		</div>

		<div class="form-wrap" data-reveal data-reveal-delay="2">
			{#if success}
				<div class="success-state">
					<div class="success-icon" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
							<polyline points="22 4 12 14.01 9 11.01"/>
						</svg>
					</div>
					<h3>Message received!</h3>
					<p>Thanks for reaching out. We'll get back to you as soon as possible.</p>
				</div>
			{:else}
				<form
					method="POST"
					use:enhance={() => {
						loading = true;
						errorMsg = '';
						return async ({ result }) => {
							loading = false;
							if (result.type === 'success') {
								success = true;
							} else if (result.type === 'failure') {
								const data = result.data as Record<string, unknown> | undefined;
								errorMsg = String(data?.error ?? 'Something went wrong. Please try again.');
							} else {
								errorMsg = 'Network error. Please try again.';
							}
						};
					}}
				>
					<div class="row">
						<div class="field">
							<label for="name">Name <span aria-hidden="true">*</span></label>
							<input id="name" name="name" type="text" placeholder="Your name" required autocomplete="name" />
						</div>
						<div class="field">
							<label for="email">Email <span aria-hidden="true">*</span></label>
							<input id="email" name="email" type="email" placeholder="you@example.com" required autocomplete="email" />
						</div>
					</div>

					<div class="field">
						<label for="company">Company <span class="optional">(optional)</span></label>
						<input id="company" name="company" type="text" placeholder="Your company or project" autocomplete="organization" />
					</div>

					<div class="field">
						<label for="message">Message <span aria-hidden="true">*</span></label>
						<textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
					</div>

					{#if errorMsg}
						<p class="error" role="alert">{errorMsg}</p>
					{/if}

					<button type="submit" class="submit" disabled={loading}>
						{#if loading}
							<svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
								<path d="M21 12a9 9 0 1 1-6.219-8.56"/>
							</svg>
							Sending…
						{:else}
							Send Message
						{/if}
					</button>
				</form>
			{/if}
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
		align-items: start;
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

	/* Form */
	.form-wrap {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text);
	}

	.optional {
		font-weight: 400;
		color: var(--text-muted);
	}

	input,
	textarea {
		width: 100%;
		padding: 0.625rem 0.875rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--bg);
		color: var(--text);
		font-size: 0.9375rem;
		font-family: inherit;
		line-height: 1.5;
		transition: border-color 0.15s, box-shadow 0.15s;
		outline: none;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--text-muted);
		opacity: 0.7;
	}

	input:focus,
	textarea:focus {
		border-color: var(--accent);
		box-shadow: 0 0 0 3px var(--accent-subtle);
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.error {
		font-size: 0.875rem;
		color: #ef4444;
		padding: 0.625rem 0.875rem;
		background: rgba(239, 68, 68, 0.08);
		border: 1px solid rgba(239, 68, 68, 0.2);
		border-radius: 8px;
	}

	.submit {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		height: 48px;
		background: var(--accent);
		color: #fff;
		font-size: 0.9375rem;
		font-weight: 600;
		font-family: inherit;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.submit:hover:not(:disabled) {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}

	.submit:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.spinner {
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	/* Success state */
	.success-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 3rem 1rem;
		gap: 1rem;
		min-height: 300px;
	}

	.success-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: var(--accent-subtle);
		color: var(--accent);
		margin-bottom: 0.5rem;
	}

	.success-state h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text);
	}

	.success-state p {
		font-size: 0.9375rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	@media (max-width: 900px) {
		.inner {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		.row {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.section {
			padding: 4rem 1.25rem;
		}
		.form-wrap {
			padding: 1.5rem;
		}
	}
</style>
