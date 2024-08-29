<script lang="ts">
    export let youtubeId = '';
</script>

{#if youtubeId !== ''}
    <div class="relative w-full h-64 md:h-96">
        <iframe src="https://www.youtube.com/embed/{youtubeId}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allowfullscreen="" title="YouTube Video"></iframe>
    </div>
{:else}
    <div>[missing youtube embed]</div>
{/if}
