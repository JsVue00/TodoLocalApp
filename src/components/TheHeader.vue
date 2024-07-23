<template>
    <div v-if="$route.path !== '/login'"
        class="w-full relative flex justify-center gap-4 items-center h-12 bg-gray-700 text-white">
        <router-link to="/" :class="{ 'text-green-500': $route.path === '/' }">To Local App</router-link>
        <router-link to="/provide-inject" :class="{ 'text-green-500': $route.path === '/provide-inject' }">Provide /
            Inject</router-link>
        <router-link to="/user-list" :class="{ 'text-green-500': $route.path === '/user-list' }">User List</router-link>
        <el-tooltip class="box-item" effect="dark" content="If you log out, all your data will be deleted"
            placement="bottom">
            <el-button class="absolute right-4" size="small" type="danger" link @click="onLogOut">Log Out</el-button>

        </el-tooltip>
    </div>
</template>
<script lang="ts" setup>
const onLogOut = () => {
    localStorage.clear();
    window.location.reload();
};
</script>