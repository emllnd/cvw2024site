<script>
    import { page } from '$app/stores';
</script>

<div class="flex justify-center items-center px-8 py-8">
    <h1 class="font-bold py-8">{$page.status} -- {$page.error.message}</h1>
</div>
