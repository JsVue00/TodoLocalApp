<template>
     <div class="w-full flex justify-center gap-4 items-center h-12 bg-gray-700 text-white">
        <router-link to="/" :class="{'text-green-500': $route.path === '/'}">To Local App</router-link>
        <router-link to="/provide-inject" :class="{'text-green-500': $route.path === '/provide-inject'}">Provide / Inject</router-link>
    </div>
</template>