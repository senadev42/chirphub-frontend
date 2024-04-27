<script setup lang="ts">

//Views
import HeaderBar from '@components/TheHeaderBar.vue'

</script>

<template>
  <div class="min-h-screen bg-surface">
    <!-- Title Bar -->
    <HeaderBar />

    <!-- Sidenav -->

    <!-- Router -->
    <main>
      <RouterView />
    </main>

  </div>
</template>
