import { format } from "date-fns"
import type { FormInstance } from "element-plus";
export const dateTimeConverter = (date: Date) => {
    return format(date, 'yyyy-MMM-dd hh:mm:ss aa');
}

export const formSubmit = (request: Function) => {
    const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                request();
            } else {
                console.log('error submit!')
            }
        })
    }
    return submitForm;
}
