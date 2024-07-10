<template>
  <el-dialog :model-value="dialogFormVisible" :title="isEdit ? 'Update Task': 'Create New Task'" width="400" @close="onCloseDialog">
    <el-form ref="ruleFormRef" :model="formModel" status-icon :rules="rules" size="small" label-width="auto"
      class="demo-ruleForm">
      <el-form-item label="Title" prop="title">
        <el-input v-model="formModel.title" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Status" prop="status">
        <el-select v-model="formModel.status" placeholder="Select">
          <el-option
            v-for="item in Object.keys(StatusEnum).filter(key => isNaN(Number(key)))"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Due Date">
        <el-date-picker style="width: 100%;" v-model="formModel.dueDate" type="datetime" placeholder="Select due date" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button size="small" type="primary" @click=" isEdit ? onUpdateTask(): onConfirm()">
          {{ isEdit  ? "Update" : "Submit"}}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import useTodo from '@/composables/useTodo';
import { StatusEnum } from '@/models/status';
import type { ITask } from '@/models/todo';
import type { FormInstance } from 'element-plus';

const props = defineProps<{
  dialogFormVisible: boolean;
  formModel: ITask;
  isEdit: boolean;
  onCreateNewTask(ruleForm: FormInstance | undefined): void;
  onUpdateTask(): void;
}>();

const emits = defineEmits<{
  (e: 'update:dialogFormVisible', value:boolean): void
  (e: 'update:formModel', value: ITask): void
}>();

const onCloseDialog = () => {
  emits('update:dialogFormVisible', props.dialogFormVisible)
}
const onConfirm = () => {
  props.onCreateNewTask(ruleFormRef.value);
  emits('update:formModel', props.formModel);
};

const
  {
    ruleFormRef,
    rules,
  } = useTodo();
</script>
