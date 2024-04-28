<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    }
})
</script>

<template>
    <button @click="$emit('onClick')"
        class="bg-brand hover:bg-brand-light text-white font-poppins px-6 py-3 rounded-md border-none text-base flex items-center gap-2 cursor-pointer transition duration-200 ease-in-out">
        {{ text }}
        <img v-if="icon" :src=icon alt="Icon" />
    </button>
</template>
