<script>
	import '../app.postcss';
	import Footer from '$lib/Footer.svelte';
	import TopBar from '$lib/TopBar.svelte';
</script>

<TopBar />
<div class="w-full bg-gray-100">
	<slot />
</div>

<Footer />

<style>
	:global(body) {
		background-color: rgb(209, 213, 219);
	}

	:global(p) {
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
	}

	:global(a) {
		text-decoration: underline;
		color: #f3850f;
	}

	:global(a:visited) {
		text-decoration: underline;
		color: #c41205;
	}

	:global(h1) {
		font-weight: bold;
		font-size: xx-large;
	}

	:global(h2) {
		font-weight: bold;
		font-size: x-large;
	}

	:global(h3) {
		font-weight: bold;
		font-size: large;
	}

	:global(.bulletlist:before) {
		content: '• ';
	}
</style>
