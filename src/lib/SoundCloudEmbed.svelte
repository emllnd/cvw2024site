<script lang="ts">
    export let trackUrl: string;
    export let color: string = "ff5500";
    export let autoPlay: boolean = false;
    export let hideRelated: boolean = false;
    export let showComments: boolean = true;
    export let showUser: boolean = true;
    export let showReposts: boolean = false;
    export let width: string = "100%";
    export let height: string = "166";
</script>

<iframe
    width={width}
    height={height}
    scrolling="no"
    frameborder="no"
    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=${color}&auto_play=${autoPlay}&hide_related=${hideRelated}&show_comments=${showComments}&show_user=${showUser}&show_reposts=${showReposts}`}
    title="SoundCloud Embed"
></iframe>

<style>
    iframe {
        border: 0;
    }
</style>
