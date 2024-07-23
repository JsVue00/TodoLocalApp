<template>
  <div class="bg-gray-200 min-h-screen text-gray-800">
    <the-header />
    <div :class="{ 'mt-2': $route.path !== '/login' }">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
</script>
