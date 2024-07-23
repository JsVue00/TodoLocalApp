<template>
    <div class="flex min-h-screen w-full justify-center items-center">
        <div class="bg-gray-200 w-[300px] p-5 rounded-md shadow-lg">
            <div class="text-xl font-medium my-2">Login</div>
            <el-form ref="ruleFormRef" style="max-width: 600px" :rules="rules" :model="formModel" label-width="auto"
                class="demo-dynamic" size="small">
                <el-form-item prop="username" label="Username">
                    <el-input v-model="formModel.username" placeholder="Enter username" />
                </el-form-item>
                <el-form-item prop="password" label="Password">
                    <el-input v-model="formModel.password" placeholder="Enter password" />
                </el-form-item>
                <el-form-item>
                    <div class="flex justify-end w-full">
                        <el-button type="primary" @click="onLogin(ruleFormRef)">Login</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useLogin from "@/composables/useLogin";

const { formRef, ruleFormRef, rules, formModel, onLogin } = useLogin();
</script>
