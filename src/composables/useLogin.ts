import { useStore } from "@/stores";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import type { IUser } from "@/models/user";
import { formSubmit } from "./helper";
interface IloginRequest {
    username: string,
    password: string,
}
export default function useLogin() {
    const formRef = ref<FormInstance>()
    const store = useStore();
    const ruleFormRef = ref<FormInstance>()
    const formModel = reactive<IloginRequest>({
        username: '',
        password: '',
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

    })
    const login = () => {
        const request = store.users.find((user: IUser) => user.username === formModel.username && user.password === formModel.password);
        if (request) {
            store.userLoggedIn.push(request);
            window.location.reload();
        } else {
            alert("Username or password incorrect");
        }
    }
    const onLogin = formSubmit(login);
    return {
        formRef,
        ruleFormRef,
        rules,
        formModel,
        onLogin,
    }
}