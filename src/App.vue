<script setup lang="ts">

//Views
import HeaderBar from '@components/TheHeaderBar.vue'
import TheSideNavBar from '@components/TheSideNavBar.vue';

import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen bg-surface">
    <!-- Title Bar -->
    <HeaderBar />

    <div class="flex flex-row justify-between">
      <!-- Sidenav -->
      <TheSideNavBar v-if="route.path !== '/'" />

      <!-- Main Content -->
      <main class="flex-grow mt-16" style="min-height: calc(100vh - 4rem);">
        <RouterView />
      </main>
    </div>

  </div>
</template>
