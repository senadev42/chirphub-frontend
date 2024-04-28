<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import BirdHouseListCard from "@components/BirdHouseListCard.vue";
import Pagination from "@components/Pagination.vue"

//mocks 
// [ ] (extract and/or match with server pagination later)
import mockbirdhouses from "../MOCKS/mockbirdhouses.json";
const mockbirdhousesref = ref(mockbirdhouses);

//routing
const router = useRouter();
function handlecardclick(id: string) {
    router.push(`/birdhouse/${id}`);
}


//pagination
const currentPage = ref(1);
const itemsPerPage = ref(5);


const paginatedBirdhouses = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return mockbirdhousesref.value.birdhouses.slice(start, end);
});





</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ml-20">
        <BirdHouseListCard v-for="birdhouse of paginatedBirdhouses" @onClick="handlecardclick" :key="birdhouse.id"
            :id="birdhouse.id" :title="birdhouse.name" :location="`(${birdhouse.longitude}, ${birdhouse.latitude})`"
            :birds="birdhouse.birds" :eggs="birdhouse.eggs" />
    </div>

    <!-- pagination -->
    <Pagination :items="mockbirdhouses.birdhouses" :items-per-page="itemsPerPage" :current-page="currentPage"
        @update:currentPage="currentPage = $event" />

</template>
