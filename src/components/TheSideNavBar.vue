<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

//icons
import HomeActive from "@assets/icons/Home/HomeActive.svg";
import HomeDefault from "@assets/icons/Home/HomeDefault.svg";
import GridActive from "@assets/icons/Grid/GridActive.svg";
import GridDefault from "@assets/icons/Grid/GridDefault.svg";
import { computed } from "vue";

const route = useRoute();

// Computed properties to determine which icon to display
const homeIcon = computed(() => route.path === '/' ? HomeActive : HomeDefault);
const gridIcon = computed(() => route.path === '/birdhouses' ? GridActive : GridDefault);

</script>

<template>
    <nav class="min-h-screen fixed top-0 left-0 bg-accent p-4 box-border pt-20">
        <!-- Home -->
        <RouterLink to="/">
            <img :src="homeIcon" alt="Birdhouse Admin Panel Home" />
        </RouterLink>
        <!-- Overview -->
        <RouterLink to="/birdhouses">
            <img :src="gridIcon" class="mt-2" alt="Birdhouse Admin Panel Overview" />
        </RouterLink>
    </nav>
</template>
