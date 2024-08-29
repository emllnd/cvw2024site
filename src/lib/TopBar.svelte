<script lang="ts">
	import hamburger from '$lib/assets/icons/icon-hamburger.svg';
	import { isMobileMenuOpen } from './stores/menuStore';

	const toggleMobileMenu = () => {
		isMobileMenuOpen.update((value) => !value);
	};

	import { onMount } from 'svelte';
	onMount(() => {
		document.getElementById('menuButton').addEventListener('click', toggleMobileMenu);
	});
</script>

<div class="h-16 bg-gray-300 md:h-24">
	<div class="absolute mx-auto flex w-full flex-row justify-between align-middle">
		<ul class="list-reset text-md inline-flex px-4 py-5 sm:px-4 sm:py-4 md:py-8 md:text-lg">
			<a href="/" class="font-semibold text-black no-underline visited:text-black">
				Coding Virtual Worlds 2024
			</a>
		</ul>

		<button id="menuButton" class="block px-4 py-5 sm:px-8 sm:py-4 md:hidden">
			<img src={hamburger} alt="Menu" class="h-6 w-6" />
		</button>
	</div>
</div>
