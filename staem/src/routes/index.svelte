<script>
	import Navbar from '$lib/navbar.svelte';
	import Slides from '$lib/slides.svelte';
	import Trend from '$lib/trending.svelte';
	import Cards from '$lib/cards.svelte';
</script>

<section>
	<Navbar />
	<Slides />
	<Trend />
	<Cards />
</section>
<style>
	:global(body) {
		background-color: #1b2837;
		color: white;
		min-height: 100vh;
		height: 100%;
		max-height: 100%;
	}
</style>