<script lang="ts">
    import github from '$lib/assets/icons/icon-github.svg';
    import instagram from '$lib/assets/icons/icon-instagram.svg';
    import linkedin from '$lib/assets/icons/icon-linkedin.svg';
    import bluesky from '$lib/assets/icons/icon-bluesky.svg';

    export let link: string;
    const stripped = link
        .replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
    let display = ''
    if (stripped.startsWith('github')) { display = github }
    if (stripped.startsWith('instagram')) { display = instagram }
    if (stripped.startsWith('linkedin')) { display = linkedin }
    if (stripped.startsWith('bluesky')) { display = bluesky }
    if (stripped.startsWith('bsky')) { display = bluesky }
</script>

<li class="list-inline-item px-2">
    <a href="{link}">
        <img class="w-6 h-6" src="{display}" />
    </a>
</li>
