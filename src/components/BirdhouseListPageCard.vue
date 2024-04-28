<script setup lang="ts">

//assets
import GeoIcon from '@assets/icons/GeoIcon.svg'
import PawIcon from '@assets/icons/PawIcon.svg'
import EggIcon from '@assets/icons/EggIcon.svg'

defineProps({
    id: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    birds: { type: Number, required: true },
    eggs: { type: Number, required: true }
})

</script>

<template>
    <div class="bg-accent hover:bg-brand p-6 rounded-xl cursor-pointer font-poppins" @click="$emit('onClick', id)">
        <p class="text-white font-semibold text-2xl mb-4 hyphens-auto">{{ title }}</p>

        <!-- Coordinates -->
        <p class="mb-2">
            <span class="container flex items-center text-white text-sm font-medium">
                <span class="mr-2">
                    <img :src=GeoIcon alt="GPS Coordinates of Birdhouse" />
                </span>
                <span class="text">{{ location }}</span>
            </span>
        </p>

        <div class="flex gap-2 flex-row justify-start items-end">
            <!-- # of Pets -->
            <span class=" flex text-white text-sm font-medium">
                <span class="mr-2">
                    <img :src=PawIcon alt="Number of birds in birdhouse " />
                </span>
                <span class="text">{{ birds }}</span>
            </span>

            <!-- # of Eggs -->
            <span class=" flex text-white text-sm font-medium">
                <span class=" mr-2">
                    <img :src=EggIcon alt="Number of eggs in birdhouse" />
                </span>
                <span class="text">{{ eggs }}</span>
            </span>
        </div>
    </div>
</template>
