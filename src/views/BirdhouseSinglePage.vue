<script setup lang="ts">
import { onMounted, ref } from "vue";
import Loading from "@components/Loading.vue";
import GeoIcon from "@assets/icons/GeoIcon.svg";
import { useBirdhouseSingle } from "../store";
import Error from "../components/Error.vue";

//store
const birdhouse = ref();
const birdhouseSingleStore = useBirdhouseSingle();
onMounted(async () => {
    await birdhouseSingleStore.fetchSingleBirdhouse();
    console.log(birdhouseSingleStore.getbirdhouse);
    birdhouse.value = birdhouseSingleStore.getbirdhouse;
});

//mode
const viewMode = ref('overview');

</script>

<template>
    <div class="ml-20">
        <Loading v-if="birdhouseSingleStore.loading" />
        <Error v-else-if="birdhouseSingleStore.error !== ''" :errormessage="birdhouseSingleStore.error" />

        <div v-else-if="birdhouse">
            <div class="bg-accent m-4 px-6 pt-6 rounded-xl font-poppins">
                <div class="flex flex-row justify-between items-center">
                    <p class="text-white font-semibold text-2xl mb-4 hyphens-auto">
                        {{ birdhouse.name }}
                    </p>

                    <span class="flex items-center text-white text-sm font-medium">
                        <span class="mr-2">
                            <img :src="GeoIcon" alt="GPS Coordinates of Birdhouse" />
                        </span>
                        <span class="text">{{ birdhouse.longitude }}, {{ birdhouse.latitude }}</span>
                    </span>
                </div>

                <!-- controls -->
                <div class="flex flex-row justify-start gap-x-6 text-white">
                    <p class="cursor-pointer py-2"
                        :class="{ 'border-b-brand text-brand border-b-2 ': viewMode === 'overview' }"
                        @click="viewMode = 'overview'">
                        Overview
                    </p>
                    <p class="cursor-pointer py-2"
                        :class="{ 'border-b-brand text-brand border-b-2 ': viewMode === 'graph' }"
                        @click="viewMode = 'graph'">Graph</p>
                </div>

            </div>
        </div>
    </div>
</template>
