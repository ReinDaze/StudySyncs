<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-6 sm:justify-center sm:pt-0">
        <div class="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-lg">
            <slot />
        </div>
    </div>
</template>
