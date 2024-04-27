<script setup lang="ts">

import { useRouter } from 'vue-router'
import BaseButton from '@components/BaseButton.vue';
import ArrowIcon from '../assets/icons/ArrowIcon.svg';

//routing
const router = useRouter()
function handlenavigate() {
    router.push('/birdhouses')
}

</script>


<template>
    <div class="flex flex-col items-center justify-center gap-y-6 min-h-screen">
        <h1 class="font-bold font-poppins text-white text-[24px]">Home Page</h1>
        <BaseButton text="To BirdHouses Overview" :icon="ArrowIcon" @onClick="handlenavigate()" />
    </div>
</template>
