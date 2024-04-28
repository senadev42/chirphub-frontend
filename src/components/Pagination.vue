<script setup lang="ts">

import { computed, defineProps, defineEmits, defineExpose } from 'vue';
import Next from "@assets/icons/Pagination/Next.svg";
import Previous from "@assets/icons/Pagination/Previous.svg";

const props = defineProps({
    items: { type: Array, required: true },
    itemsPerPage: { type: Number, required: true },
    currentPage: { type: Number, required: true },
});

//logic
const totalPages = computed(() =>
    Math.ceil(props.items.length / props.itemsPerPage)
);

const maxPagesToShow = 5;
const paginationItems = computed(() => {
    const items = [];
    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    let startPage = props.currentPage - halfMaxPages;
    let endPage = props.currentPage + halfMaxPages;

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

//handlers
const emits = defineEmits(['update:currentPage']);

const goToPreviousPage = () => {
    if (props.currentPage > 1) {
        emits('update:currentPage', props.currentPage - 1);
    }
};

const goToNextPage = () => {
    if (props.currentPage < totalPages.value) {
        emits('update:currentPage', props.currentPage + 1);
    }
};

const handlePageClick = (page: number | string) => {
    if (page !== "...") emits('update:currentPage', page);
};

defineExpose({
    goToPreviousPage,
    goToNextPage,
    handlePageClick,
});

</script>

<template>
    <div class="fixed bottom-0 left-0 w-full bg-accent flex flex-row justify-center py-3 pb-4">
        <button @click="goToPreviousPage" class="h-10 w-10 cursor-pointer" :disabled="currentPage === 1">
            <img :src="Previous" alt="Previous Page" />
        </button>

        <button v-for="page in paginationItems" :key="page" class="h-10 w-10 cursor-pointer text-white rounded-lg"
            @click="handlePageClick(page)" :class="{ 'bg-brand': currentPage === page }">
            {{ page }}
        </button>

        <button @click="goToNextPage" class="h-10 w-10 cursor-pointer ml-3" :disabled="currentPage === totalPages">
            <img :src="Next" alt="Next Page" />
        </button>
    </div>
</template>
