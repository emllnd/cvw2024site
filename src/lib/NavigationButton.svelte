<script lang="ts">
    export let frontPage = false;
    export let path: string;
    export let label: string;
</script>

{#if frontPage}
    <a href='{path}' class="no-underline text-gray-200 visited:text-gray-200">
        <li class="px-1 py-1 mx-1 border rounded border-gray-200 bg-transparent">{label}</li>
    </a>
{:else}
    <a href='{path}' class="no-underline text-gray-800 visited:text-gray-800">
        <li class="px-1 py-1 mx-1 border rounded border-gray-800 bg-transparent">{label}</li>
    </a>
{/if}
