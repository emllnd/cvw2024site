<script lang="ts">
    export let videoUrl: string;

    const removeAllParamsFromUrl = (url: string): string => {
        const urlObject = new URL(url);
        urlObject.search = '';
        urlObject.hash = '';
        return urlObject.toString();
    }

    const isValidVideoUrl = (url: string): boolean => {
        const urlNoParams = removeAllParamsFromUrl(url);
        return urlNoParams.endsWith('.mp4') || urlNoParams.endsWith('.mov');
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
