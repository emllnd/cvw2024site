<script>
	import LeftNav from '$lib/Navigation.svelte';
	import CodeEmbedStyles from '$lib/CodeEmbedStyles.svelte';
	export let navbarPosts;
	export let title;
	export let content;
</script>

<CodeEmbedStyles />

<!-- Wide screen layout (row) -->
<div class="hidden w-full flex-row pb-4 pt-4 md:flex">
	<div class="w-1/4">
		<LeftNav posts={navbarPosts} />
	</div>

	<div class="flex w-2/3 flex-col px-0">
		<h1 class="text-3xl font-bold">{title}</h1>
		<div class="line-numbers my-4">
			<svelte:component this={content} />
		</div>
	</div>

	<div class="w-1/6"></div>
</div>

<!-- Mobile layout (column) -->
<div class="flex w-full flex-col pb-4 pt-0 sm:pt-2 md:hidden">
	<div class="mt-4 px-4">
		<LeftNav posts={navbarPosts} />
	</div>

	<div class="mt-4 px-4">
		<h1 class="text-3xl font-bold">{title}</h1>
		<div class="line-numbers bulletlist my-4">
			<svelte:component this={content} />
		</div>
	</div>
</div>
