<template>
    <div class="flex justify-center w-full">
        <div class="max-w-[800px] w-full">
            <div class="flex justify-end w-full mb-4">
                <el-button @click="dialogVisible = true" type="primary" size="small">Create New</el-button>
            </div>
            <el-table :data="userList" stripe style="width: 100%">
                <el-table-column prop="username" label="Username" />
                <el-table-column prop="phone" label="phone" />
                <el-table-column prop="photo" label="Profile">
                    <template #default="{ row }">
                        <img :src="String(row.photo).includes('http') ? row.photo : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
                            alt="User Avatar" style="width: 50px; height: 50px;" />
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Address" />
                <el-table-column label="Action">
                    <template #default="{ row }">
                        <router-link :to="{ name: 'profile', params: { userId: row.userId } }"><el-button size="small"
                                type="primary">View</el-button></router-link>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

    <!-- Dialog form -->
    <el-dialog v-model="dialogVisible" title="Create User" width="400">
        <el-form ref="ruleFormRef" :model="formModel" :rules="rules" status-icon size="small" label-width="auto"
            class="demo-ruleForm">
            <el-form-item label="Username" prop="username">
                <el-input v-model="formModel.username" type="text" placeholder="Enter value" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="formModel.password" type="password" placeholder="Enter value" autocomplete="off" />
            </el-form-item>
            <el-form-item label="email" prop="email">
                <el-input v-model="formModel.email" type="email" placeholder="Enter value" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Phone" prop="phone">
                <el-input v-model="formModel.phone" type="number" placeholder="Enter value" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Photo" prop="photo">
                <el-input v-model="formModel.photo" type="text" placeholder="Enter image url" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Address" prop="address">
                <el-input v-model="formModel.address" type="text" placeholder="Enter value" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button size="small" type="primary" @click="onCreateNewUser(ruleFormRef)">
                    Submit
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import useUser from "@/composables/userUser";
import { onMounted } from "vue";
const {
    dialogVisible,
    formModel,
    rules,
    ruleFormRef,
    onCreateNewUser,
    getUserData,
    userList, } = useUser();

onMounted(() => {
    getUserData();
});
</script>
