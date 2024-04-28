<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import BirdHouseListCard from "@components/BirdHouseListCard.vue";
import Next from "@assets/icons/Pagination/Next.svg";
import Previous from "@assets/icons/Pagination/Previous.svg";

//mocks (extract and/or match with server pagination later)
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
const totalPages = computed(() =>
    Math.ceil(mockbirdhousesref.value.birdhouses.length / itemsPerPage.value)
);
const paginatedBirdhouses = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return mockbirdhousesref.value.birdhouses.slice(start, end);
});

// pagination handler
const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const goToNextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

function handlePageClick(item: number | string) {
    if (item !== "...") {
        currentPage.value = +item;
    }
}

const maxPagesToShow = 5;
const paginationItems = computed(() => {
    const items = [];
    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    // Calculate start and end page numbers
    let startPage = currentPage.value - halfMaxPages;
    let endPage = currentPage.value + halfMaxPages;

    if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(maxPagesToShow, totalPages.value);
    } else if (endPage > totalPages.value) {
        endPage = totalPages.value;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    items.push(1);
    if (startPage > 1) items.push("...");
    for (let i = startPage + 1; i <= endPage - 1; i++) items.push(i);
    if (endPage < totalPages.value) items.push("...");
    if (totalPages.value != 1) items.push(totalPages.value);

    return items;
});
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ml-20">
        <BirdHouseListCard v-for="birdhouse of paginatedBirdhouses" @onClick="handlecardclick" :key="birdhouse.id"
            :id="birdhouse.id" :title="birdhouse.name" :location="`(${birdhouse.longitude}, ${birdhouse.latitude})`"
            :birds="birdhouse.birds" :eggs="birdhouse.eggs" />
    </div>

    <!-- pagination -->
    <div class="fixed bottom-0 left-0 w-full bg-accent flex flex-row justify-center py-3 pb-4">
        <button @click="goToPreviousPage" class="h-10 w-10 cursor-pointer" :disabled="currentPage === 1">
            <img :src="Previous" alt="GPS Coordinates of Birdhouse" />
        </button>

        <button v-for="page in paginationItems" :key="page" class="h-10 w-10 cursor-pointer text-white rounded-lg"
            @click="handlePageClick(page)" :class="{ 'bg-brand': currentPage === page }">
            {{ page }}
        </button>

        <button @click="goToNextPage" class="h-10 w-10 cursor-pointer ml-3" :disabled="currentPage === totalPages">
            <img :src="Next" alt="GPS Coordinates of Birdhouse" />
        </button>
    </div>
</template>
