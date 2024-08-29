<script lang="ts">
    export let date;
    export let showDay = false;
    const dateObj = (date instanceof Date) ? date : new Date(date);
    const day = dateObj.getDate();
    const fullMonthName = dateObj
        .toLocaleString('default', { month: 'long' })
    const monthNameFirstThree = dateObj
        .toLocaleString('default', { month: 'long' })
        .substring(0, 3);
    const year = dateObj.getFullYear();
</script>

{#if showDay}
    <p class="text-xs text-gray-400">{day} {monthNameFirstThree} {year}</p>
{:else}
    <p class="text-xs text-gray-400">{fullMonthName} {year}</p>
{/if}
