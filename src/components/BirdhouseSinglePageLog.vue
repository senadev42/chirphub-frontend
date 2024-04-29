<script setup lang="ts">

//assets
import PawIcon from '@assets/icons/PawIcon.svg'
import EggIcon from '@assets/icons/EggIcon.svg'

import { format, parse } from 'date-fns';

defineProps({
    id: { type: String, required: true },
    createdAt: { type: String, required: true },
    birds: { type: Number, required: true },
    eggs: { type: Number, required: true }
})

</script>

<template>
    <div
        class="bg-accent hover:bg-brand rounded-xl cursor-pointer font-poppins flex flex-row items-center gap-x-6 p-6 py-5 text-sm">
        <p class="text-white w-24 ">{{ format(parse(createdAt.split("T")[0], 'yyyy-mm-dd', new Date()), 'dd/mm/yyyy') }}
        </p>

        <div class="flex flex-row justify-start items-end">
            <!-- # of Pets -->
            <span class="grid grid-cols-2 text-white text-sm font-medium">
                <span class="mr-2">
                    <img :src=PawIcon alt="Number of birds in birdhouse " />
                </span>
                <span class="text">{{ birds }}</span>
            </span>

            <!-- # of Eggs -->
            <span class="grid grid-cols-2 text-white text-sm font-medium">
                <span class=" mr-2">
                    <img :src=EggIcon alt="Number of eggs in birdhouse" />
                </span>
                <span class="text">{{ eggs }}</span>
            </span>
        </div>
    </div>
</template>
