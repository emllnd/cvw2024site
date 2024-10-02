<script lang="ts">
	import { isMobileMenuOpen } from './stores/menuStore';
	export let posts;

	const toggleMobileMenu = () => {
		isMobileMenuOpen.update(() => false);
	};

	import { onMount } from 'svelte';
	onMount(() => {
		document.querySelectorAll('.menu-closing-link').forEach((item) => {
			item.addEventListener('click', toggleMobileMenu);
		});
	});
</script>

<ul class="my-4 pl-4 pr-2 md:block" class:hidden={!$isMobileMenuOpen}>
	<li class="py-1">
		<span>
			<a href="/" class="menu-closing-link font-bold text-black no-underline visited:text-black">
				Coding Virtual Worlds
			</a>
		</span>
	</li>
	{#each posts as post}
		{#if post.path !== '/landing'}
			<li class="py-0">
				<span>
					<a href={post.path} class="menu-closing-link text-black no-underline visited:text-black">
						{#if !post.meta.title.includes('Week') && post.meta.title !== 'Additional'}
							<p class="bulletlist">{post.meta.title}</p>
						{:else}
							<p class="weektitle">{post.meta.title}</p>
						{/if}
					</a>
				</span>
			</li>
		{/if}
	{/each}
</ul>

<style>
	.weektitle {
		font-weight: bold;
	}
</style>
