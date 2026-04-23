let current = $state<'dark' | 'light'>('dark');

export const theme = {
	get current(): 'dark' | 'light' {
		return current;
	},
	set current(value: 'dark' | 'light') {
		current = value;
	},
	toggle() {
		current = current === 'dark' ? 'light' : 'dark';
	}
};
