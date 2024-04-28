<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import BirdHouseListCard from "@components/BirdHouseListCard.vue";

//mocks
import mockbirdhouses from "../MOCKS/mockbirdhouses.json"

//routing
const router = useRouter();
function handlecardclick(id: string) {
    router.push(`/birdhouse/${id}`);
}

// Mock data for testing
const mockbirdhousesref = ref(mockbirdhouses);

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ml-20">
        <BirdHouseListCard v-for="birdhouse of mockbirdhousesref.birdhouses" @onClick="handlecardclick"
            :key="birdhouse.id" :id="birdhouse.id" :title="birdhouse.name"
            :location="`(${birdhouse.longitude}, ${birdhouse.latitude})`" :birds="birdhouse.birds"
            :eggs="birdhouse.eggs" />
    </div>
</template>
