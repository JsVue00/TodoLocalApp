import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import type { ITask } from '@/models/todo'
import { useStore } from '@/stores';
export default function useTodo() {
    const ruleFormRef = ref<FormInstance>()
    const dialogFormVisible = ref(false);
    const store = useStore();
    const tasks = ref<ITask[]>([]);
    const isEdit = ref(false);

    const tableHeader:string[] = ['Title', 'Status', 'Due Date', 'Modified Date', 'Actions'];

    const closeDialog = () => {
        dialogFormVisible.value = false;
        isEdit.value = false;
        formModel.value = {
            title: "",
            status: "",
            dueDate: new Date(),
            modifiedOn: new Date(),
        };
    };

    const openDialog = () => dialogFormVisible.value = true;

    const formModel = ref<ITask>({
        title: "",
        status: "",
        dueDate: new Date,
        modifiedOn: new Date,
    })
    const titleValidate = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('Title is required'));
        } else if (!/^[a-zA-Z _]+$/.test(value)) {
            callback(new Error('Title is allowed to input only alphabet letters.'));
        } else {
            callback();
        }
    }
    const rules = reactive<FormRules<typeof formModel>>({
        title: {
            required: true,
            validator: titleValidate,
            trigger: 'blur',
        },
        status: {
            required: true,
            message: 'Status is required',
            trigger: 'blur',
        },
        dueDate: {
            required: true,
            message: 'Due Date is required',
            trigger: 'blur',
        },
    })

    const getTasks = () => tasks.value = store.tasks;

    const requestCreateNewTask = () => {
        store.onCreateNewTask(formModel.value);
        tasks.value = store.tasks;
    }
    const onRemoveTask = (task: ITask) => {
        store.onDeleteTask(task);
        tasks.value = store.tasks;
    }
    const editTask = ref<ITask>();
    const openEditForm = (task: ITask) => {
        isEdit.value = true;
        editTask.value = task;
        dialogFormVisible.value = true;
        formModel.value.title = task.title;
        formModel.value.dueDate = task.dueDate;
        formModel.value.status = task.status;
    }
    const onSubEditTask = () => {
        const indexOfTask = tasks.value.indexOf(editTask.value!);
        if (indexOfTask !== -1) {
            const task = tasks.value[indexOfTask];
            task.title = formModel.value.title;
            task.status = formModel.value.status;
            task.dueDate = formModel.value.dueDate;
        }
        dialogFormVisible.value = false;
    }
    const onCreateNewTask = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                requestCreateNewTask();
                closeDialog();
            } else {
                console.error('error requeset fields')
            }
        })
    }
    return {
        getTasks,
        tableHeader,
        closeDialog,
        dialogFormVisible,
        openDialog,
        formModel,
        ruleFormRef,
        rules,
        tasks,
        onCreateNewTask,
        onRemoveTask,
        openEditForm,
        isEdit,
        onSubEditTask,
    }
}