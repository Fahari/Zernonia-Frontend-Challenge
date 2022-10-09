<script context="module">
	function getData() {
		return supabase.from('steam').select(`*`).range(0, 200);
	}
</script>

<script>
	import { supabase } from '../supabaseClient';
	import logo from '$lib/images/Windows.svg';
	import logo2 from '$lib/images/Linux.svg';
	import logo3 from '$lib/images/Mac.svg';
	let searchGame = '';
</script>

<section>
	<div class="md:flex md:p-0 md:pt-4 md:px-4 md:justify-between">
		<div class="search pt-8 md:pt-4 flex justify-center">
			<input
				type="text"
				placeholder="Search"
				bind:value={searchGame}
				class="input-sm w-full max-w-xs bg-style rounded-3xl"
			/>
		</div>
		<div class="sort flex space-x-4 justify-center md:justify-end px-24 md:px-0 pt-4">
			<p class="capitalize min-w-max">sort by:</p>
			<select class="select select-sm w-full max-w-xs bg-style rounded-3xl">
				<option disabled selected>Default</option>
				<option>Title</option>
				<option>Price</option>
			</select>
		</div>
	</div>
</section>
<section class="index">
	{#await getData()}
		Loading...
	{:then response}
		<div class="content pt-4 px-4 flex items-center flex-col">
			{#each response.data || '{}' as { id, title, price, image, tags, platforms }}
				<div class="card card-compact w-full shadow-xl mt-8 lg:flex-row">
					<picture class="basis-2/5"
						><a sveltekit:prefetch href={'#'}> <img class="w-full" src={image} alt={title} /></a>
					</picture>
					<div class="card-body bg-style2 flex flex-col lg:flex-row lg:justify-between basis-3/5">
						<div>
							<h2 class="card-title mt-4">{title}</h2>
							<p class="mt-4">{tags}</p>
							<div class="h-2.5 w-1/3 bg-style rounded-xl mt-4" />
						</div>
						<div class="card-actions flex lg:flex-col justify-between pt-4 items-center">
							<div class="flex">
								{#each platforms as platform}
									<!-- <figure class="lg:px-4"><img src={`$lib/images/${platform}.svg`} alt={platform} /></figure class="lg:px-4"> -->
									{#if platform == 'Windows'}
										<figure class="lg:px-1"><img src={logo} alt={platform} /></figure>
									{:else if platform == 'Linux'}
										<figure class="lg:px-1"><img src={logo2} alt={platform} /></figure>
									{:else}
										<figure class="lg:px-1"><img src={logo3} alt={platform} /></figure>
									{/if}
								{/each}
							</div>
							<h2>${price}</h2>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/await}
</section>
<svelte:head>
	<link href="https://fonts.google.com/noto/specimen/Noto+Sans?query=noto+sans" rel="stylesheet" />
</svelte:head>

<style>
	.bg-style {
		background-color: rgb(33, 75, 107);
	}
	.bg-style2 {
		background-color: rgb(23, 32, 45);
	}
	.card {
		width: 100%;
	}
</style>
