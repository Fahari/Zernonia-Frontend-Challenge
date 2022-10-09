<script context="module">
	export function getData() {
		return supabase.from('steam').select(`*`).range(10, 15);
	}
</script>

<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { supabase } from '../supabaseClient';
	const options = {
		type: 'loop',
		rewind: true,
		autoplay: true,
		arrows: false,
		height: '15rem',
		width: '100%',
		perPage: 3,
		gap: '1.5rem',
		focus: 'center',
		padding: { left: '1rem', right: '1rem' },
		breakpoints: {
			640: {
				perPage: 1
			}
		}
	};
</script>

<section class="index">
	{#await getData()}
		Loading...Carousel
	{:then response}
		<div class="wrapper md:pt-4" style="position: relative">
			<Splide {options} hasTrack={false} aria-labelledby="autoplay-example-heading">
				<div style="position: relative" class="pt-8">
					<SplideTrack>
						{#each response.data || '{}' as slide}
							<SplideSlide>
								<img class="rounded-2xl" src={slide.image} alt={slide.title} />
							</SplideSlide>
						{/each}
					</SplideTrack>
				</div>
			</Splide>
		</div>
	{/await}
</section>
