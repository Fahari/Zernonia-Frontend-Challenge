<script context="module">
	function getData() {
		return supabase.from('steam').select(`*`).range(0, 5);
	}
</script>
<script>
	import { supabase } from '../supabaseClient';
    let searchGame = ""
</script>
<section>
<div class="md:flex md:p-0 md:pt-4 md:px-4 md:justify-between">
    <div class="search pt-8 md:pt-4 flex justify-center">
        <input type="text" placeholder="Search" bind:value={searchGame} class="input-sm w-full max-w-xs bg-style rounded-3xl" />
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
<style>
    .bg-style{
        background-color: rgb(33, 75, 107);
    }
</style>