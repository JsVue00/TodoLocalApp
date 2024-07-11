<template>
    <div class="testing w-[400px]">
        <slot/>
        <br>
        <div class="p-2 rounded-sm bg-gray-400 flex justify-between">
            <label for="text">Main Parent</label>
            <input type="text" v-model="name" placeholder="Enter your name" />
        </div>
        <br>
        <ComponentOne />
    </div>
</template>
<script lang="ts" setup>
import {provide, ref } from 'vue';
import ComponentOne from './ComponentOne.vue';
const name = ref("Senghong");
provide('userName', name);
</script>
<style lang="scss" scoped>
.testing {
    input {
        padding: 2px 4px;
        outline: none;
        border-radius: 4px;
    }
}
</style>