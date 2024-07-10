import type { StatusEnum } from "./status";

export interface ITask {
    title: string;
    status: string;
    dueDate: Date;
    modifiedOn: Date;
}