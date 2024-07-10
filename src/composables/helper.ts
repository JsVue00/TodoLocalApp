import { format } from "date-fns"
export const dateTimeConverter = (date: Date) => {
    return format(date, 'yyyy-MMM-dd hh:mm:ss aa');
}