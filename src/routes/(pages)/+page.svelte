<script>
    import PostOrLandingContent from '$lib/PostOrLandingContent.svelte';
    export let data;
</script>

<PostOrLandingContent
  navbarPosts="{data.navbarPosts}"
  title="{data.title}"
  content="{data.content}" />
