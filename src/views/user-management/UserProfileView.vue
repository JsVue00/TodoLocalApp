<template>
    <div class="  flex items-center justify-center">
        <div class="w-[500px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="relative">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png"
                    alt="Profile Background" class="w-full h-48 object-cover">
                <div class="absolute inset-x-0 bottom-0 transform translate-y-1/2 flex justify-center">
                    <img :src="userById?.photo?.includes('http') ? userById.photo : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
                        alt="Profile Image" class="w-32 h-32 border-4 border-green-600 rounded-full object-cover">
                </div>
            </div>
            <div class="p-6 text-center mt-10">
                <h2 class="text-3xl font-semibold text-gray-800 uppercase">{{ userById?.username }}</h2>
                <p class="text-gray-600 mt-2">{{ userById?.address }}</p>
                <div class="mt-4">
                    <p class="text-gray-800">Email: {{ userById?.email }}</p>
                    <p class="text-gray-800">Phone:{{ userById?.phone }}</p>
                </div>
            </div>
            <div class="flex justify-between  items-center p-6 bg-gray-50 border-t">
                <el-button type="info" @click="$router.push({ name: 'user-list' })">Back</el-button>
                <el-button type="primary">Edit Profile</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useUser from '@/composables/userUser';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.userId as string;
const { userById, getUserById } = useUser();

onMounted(() => {
    getUserById(userId);
});
</script>