import type { IUser } from "@/models/user";
import { useStore } from "@/stores";
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { formSubmit } from "./helper";

export default function useUser() {
    const dialogVisible = ref(false);
    const store = useStore();
    const userList = ref<IUser[]>([]);
    const userById = ref<IUser>();
    const ruleFormRef = ref<FormInstance>()
    function generateUniqueId() {
        const characters = 'ABCDEFGHIJKyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result += Date.now();
        return result;
    }
    const formModel = reactive<IUser>({
        userId: "",
        userRole: "",
        username: "",
        password: "",
        email: "",
        phone: 0,
        photo: "",
        address: "",
    });
    const rules = reactive<FormRules<typeof formModel>>({
        username: [
            { required: true, message: 'Required', trigger: 'blur' },
            { message: 'at lease 4 digits', trigger: 'change', min: 4 },
        ],
        password: [
            { required: true, message: 'Required', trigger: 'blur' },
            { message: 'at lease 4 digits', trigger: 'change', min: 4 }
        ],
        email: { required: true, message: 'Required', trigger: 'blur' },
        phone: { required: true, message: 'Required', trigger: 'blur' },
        address: { required: true, message: 'Required', trigger: 'blur' },
    })

    const createNewUser = () => {
        generateUniqueId();
        formModel.userId = generateUniqueId();
        store.onCreateNewUser(formModel);
        getUserData();
        dialogVisible.value = false;
    }
    const getUserData = () => {
        userList.value = store.users;
    }
    const getUserById = (userId: string) => {
        if (userId !== '') {
            const user = store.users.find((user: IUser) => user.userId === userId);
            userById.value = user;

        } else return;
    }
    const onCreateNewUser = formSubmit(createNewUser);
    return {
        dialogVisible,
        formModel,
        rules,
        ruleFormRef,
        onCreateNewUser,
        getUserData,
        userList,
        getUserById,
        userById,

    }
}