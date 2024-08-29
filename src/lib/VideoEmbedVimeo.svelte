<script lang="ts">
    export let vimeoId = '';
</script>

{#if vimeoId !== ''}
    <div class="relative w-full h-64">
        <iframe src="https://player.vimeo.com/video/{vimeoId}?title=0&amp;byline=0&amp;portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" allow="autoplay; fullscreen" allowfullscreen="" data-ready="true" frameborder="0"></iframe>
    </div>
{:else}
    <div>[missing vimeo embed]</div>
{/if}
