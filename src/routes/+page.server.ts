import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const company = String(data.get('company') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || !email || !message) {
			return fail(400, {
				error: 'Please fill in all required fields.',
				name,
				email,
				company,
				message
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				name,
				email,
				company,
				message
			});
		}

		// TODO: Integrate email delivery (e.g. SendGrid, Resend, SMTP)

		return { success: true };
	}
};
