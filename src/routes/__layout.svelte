<script>
	import '../app.css';
	import { onMount } from 'svelte';

	const THEME_KEY = 'nickmura-theme';
	let theme = 'dark';

	const applyTheme = (mode) => {
		if (typeof document === 'undefined') return;
		document.documentElement.dataset.theme = mode;
	};

	const setTheme = (mode) => {
		theme = mode;
		applyTheme(mode);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(THEME_KEY, mode);
		}
	};

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	onMount(() => {
		if (typeof localStorage !== 'undefined') {
			const stored = localStorage.getItem(THEME_KEY);
			if (stored === 'light' || stored === 'dark') {
				theme = stored;
			}
		}
		applyTheme(theme);
	});
</script>

<div class="min-h-screen relative">
	<div class="fixed top-6 right-6 z-50">
		<button
			type="button"
			class="theme-toggle shadow-sm"
			on:click={toggleTheme}
			aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} theme`}
			aria-pressed={theme === 'light'}
		>
			{theme === 'dark' ? 'Light' : 'Dark'}
		</button>
	</div>

	<slot />
</div>
