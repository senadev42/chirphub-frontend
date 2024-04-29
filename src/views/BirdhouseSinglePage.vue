<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Loading from "@components/PlaceholderLoading.vue";
import GeoIcon from "@assets/icons/GeoIcon.svg";
import { useBirdhouseSingle } from "../store";
import Error from "@components/PlaceholderError.vue";
import Pagination from "@components/Pagination.vue";
import BirdhouseLogCard from '@components/BirdhouseSinglePageLog.vue'
import BirdhouseChart from "@components/BirdhouseSinglePageChart.vue";
import { useRoute } from "vue-router";

const route = useRoute()

//store
const birdhouse = ref();
const birdhouseSingleStore = useBirdhouseSingle();
onMounted(async () => {
    const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

    await birdhouseSingleStore.fetchSingleBirdhouse(id);

    birdhouse.value = birdhouseSingleStore.getbirdhouse;
});

//mode
const viewMode = ref('overview');

//logs
//pagination
const currentPage = ref(1);
const itemsPerPage = ref(5);

const paginatedLogs = computed<Log[]>(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return birdhouseSingleStore.getbirdhouse.logs.slice(start, end) ?? [];
});


</script>

<template>
    <div class="ml-20 pt-16 ">
        <Loading v-if="birdhouseSingleStore.loading" />
        <Error v-else-if="birdhouseSingleStore.error !== ''" :errormessage="birdhouseSingleStore.error" />

        <div v-else-if="birdhouse">
            <div class="bg-accent m-4 px-6 pt-6 rounded-xl font-poppins">
                <div class="flex flex-row justify-between items-center">
                    <p class="text-white font-semibold text-lg md:text-2xl mb-4 hyphens-auto">
                        {{ birdhouse.name }}
                    </p>

                    <span class="flex items-center text-white text-xs sm:text-sm font-medium">
                        <span class="mr-2">
                            <img :src="GeoIcon" alt="GPS Coordinates of Birdhouse" />
                        </span>
                        <span class="text">({{ birdhouse.longitude.toFixed(2) }}, {{ birdhouse.latitude.toFixed(2)
                            }})</span>
                    </span>
                </div>

                <!-- controls -->
                <div class="flex flex-row justify-start gap-x-6 text-white text-sm md:text-base">
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

            <!-- in case of no data -->
            <div v-if="!paginatedLogs || !paginatedLogs.length"
                class="flex flex-col h-[70vh] justify-center items-center text-white">
                <div>
                    No residency history found.
                </div>
            </div>


            <!-- logs as a list -->
            <div v-else-if="paginatedLogs">
                <div v-if="viewMode == 'overview'" class="grid grid-cols-1 gap-4 p-4">
                    <BirdhouseLogCard v-for="birdhouse of paginatedLogs" :key="birdhouse.id" :id="String(birdhouse.id)"
                        :createdAt="birdhouse.createdAt" :birds="birdhouse.birds" :eggs="birdhouse.eggs" />
                </div>

                <div v-if="paginatedLogs && viewMode == 'graph'" class="grid grid-cols-1 h-full gap-4 p-4">
                    <BirdhouseChart :logs="paginatedLogs" />
                </div>


                <!-- pagination -->
                <Pagination :items="birdhouseSingleStore.getbirdhouse.logs" :items-per-page="itemsPerPage"
                    :current-page="currentPage" @update:currentPage="currentPage = $event" />
            </div>




        </div>
    </div>
</template>
