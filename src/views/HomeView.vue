<template>
  <div class="flex w-full justify-center">
    <div class=" w-full md:w-[800px] overflow-auto">
      <CreateForm 
        :form-model="formModel" 
        :dialog-form-visible="dialogFormVisible"
        @update:dialog-form-visible="closeDialog()"
        @update:form-model="UpdateFormModel"
        :on-create-new-task="onCreateNewTask"
        :on-update-task="onSubEditTask"
        :is-edit="isEdit"
      />
      <div class="flex w-full justify-end">
        <el-button @click="openDialog" type="primary" size="small">Create New</el-button>
      </div>
      <table class="w-full font-normal table justify-center">
        <thead>
          <th v-for="(name, index) in tableHeader" :key="index">{{ name }}</th>
        </thead>
        <tbody >
          <tr class="text-red-300" v-if="!tasks.length">
            <td  colspan="5" style="text-align: center">No Data!</td>
          </tr>
          <tr v-else  v-for="(task, index) in tasks" :key="index">
            <td>{{ task.title }}</td>
            <td style="font-weight: 500">{{ task.status }}</td>  
            <td>{{ dateTimeConverter(task.dueDate) }}</td>
            <td>{{ dateTimeConverter(task.modifiedOn) }}</td>
            <td>
              <el-button type="danger" size="small" @click="onRemoveTask(task)">Remove</el-button>
              <el-button type="primary" size="small" @click="openEditForm(task)">Edit</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CreateForm from '@/components/CreateForm.vue';
import useTodo from '@/composables/useTodo';
import { dateTimeConverter } from '@/composables/helper';
import type { ITask } from '@/models/todo';

const UpdateFormModel = (updatedFormModel: ITask)=>{
  formModel.value = updatedFormModel;
}

onMounted(() => {
  getTasks();
});

const {
  getTasks,
  onCreateNewTask,
  formModel,
  tableHeader,
  closeDialog,
  dialogFormVisible,
  openDialog,
  tasks,
  onRemoveTask,
  openEditForm,
  onSubEditTask,
  isEdit,
} = useTodo();
</script>

<style lang="scss" scoped>
.table {
  tr,
  th,
  td {
    border-bottom: 1px solid #3b39394b;
    padding: 8px 2px;
    font-size: 12px;
  }

  td:is(:first-child) {
    min-width: 200px;
  }

  td:not(:first-child):not(:nth-child(2)) {
    text-align: center;
    min-width: 100px;
  }

  td:last-child {
    width: 150px;
  }

  th {
    font-weight: 500;
  }

  tbody tr {

    &:hover,
    &:focus {
      background-color: #4a474714;
    }
  }
}
</style>