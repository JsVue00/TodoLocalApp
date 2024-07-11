<template>
   <div class="w-full p-4 bg-gray-300 rounded-sm">
       <span>Throught 3 different component: <span class="text-green-700"> {{ userName }}</span></span> 
   </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue';
const userName = inject("userName");
</script>