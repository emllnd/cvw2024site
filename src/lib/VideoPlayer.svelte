<script lang="ts">
    export let videoUrl: string;

    // Validate the video URL
    function isValidVideoUrl(url: string): boolean {
        return url.endsWith('.mp4') || url.endsWith('.mov');
    }
</script>

<div class="w-full vidcontain">
{#if isValidVideoUrl(videoUrl)}
    <video controls>
        <source src={videoUrl} type={videoUrl.endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'}>
        Your browser does not support the video tag.
    </video>
{:else}
    <p>Invalid video URL.</p>
{/if}
</div>

<style>
    vidcontain {
        max-width: 100%;
        height: 30rem;
    }
</style>
