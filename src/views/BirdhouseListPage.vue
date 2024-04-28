<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

//components
import BirdHouseListCard from "@components/BirdhouseListCard.vue";
import Pagination from "@components/Pagination.vue";
import Loading from "@components/Loading.vue";

import { useBirdhouseList } from "../store";
import Error from "../components/Error.vue";

//store
const birdhouseListStore = useBirdhouseList();
onMounted(async () => {
    await birdhouseListStore.fetchBirdhouses();
});

//routing
const router = useRouter();
function handlecardclick(id: string) {
    router.push(`/birdhouse/${id}`);
}

//pagination
const currentPage = ref(1);
const itemsPerPage = ref(5);

const paginatedBirdhouses = computed<Birdhouse[]>(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return birdhouseListStore.birdhouselist.slice(start, end);
});
</script>

<template>
    <div class="ml-20">
        <Loading v-if="birdhouseListStore.loading" />
        <Error v-else-if="birdhouseListStore.error !== ''" :errormessage="birdhouseListStore.error" />

        <div v-else-if="paginatedBirdhouses">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <BirdHouseListCard v-for="birdhouse of paginatedBirdhouses" @onClick="handlecardclick"
                    :key="birdhouse.id" :id="birdhouse.id" :title="birdhouse.name"
                    :location="`(${birdhouse.longitude}, ${birdhouse.latitude})`" :birds="birdhouse.birds"
                    :eggs="birdhouse.eggs" />
            </div>

            <!-- pagination -->
            <Pagination :items="birdhouseListStore.birdhouselist" :items-per-page="itemsPerPage"
                :current-page="currentPage" @update:currentPage="currentPage = $event" />
        </div>
    </div>
</template>
