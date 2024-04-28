<script setup lang="ts">
defineProps({
    errormessage: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="fixed inset-0 flex flex-col gap-y-4 items-center justify-center text-center text-white">
        <p>Something went wrong.</p>
        <p class="text-slate-500">More details: {{ errormessage }}</p>
    </div>
</template>
