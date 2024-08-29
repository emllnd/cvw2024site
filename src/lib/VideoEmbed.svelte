<script lang="ts">
    import VideoEmbedVimeo from "$lib/VideoEmbedVimeo.svelte";
    import VideoEmbedYoutube from "$lib/VideoEmbedYoutube.svelte";
    export let vimeo = '';
    export let youtube = '';
</script>

{#if vimeo !== '' || youtube !== '' }
    {#if vimeo !== ''}
        <VideoEmbedVimeo vimeoId="{vimeo}"></VideoEmbedVimeo>
    {:else}
        {#if youtube !== ''}
            <VideoEmbedYoutube youtubeId="{youtube}"></VideoEmbedYoutube>
        {/if}
    {/if}
{:else}
    <div>[missing video embed]</div>
{/if}
