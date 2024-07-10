import { defineStore } from 'pinia'
import { type ITask } from '@/models/todo';

export const useStore = defineStore("app", {
  state: () => ({
    tasks: [] as ITask[],
  }),
  actions: {
    onCreateNewTask(task: ITask) {
      this.tasks.push(task);
    },
    onDeleteTask(task: ITask) {
      const indexOf = this.tasks.indexOf(task);
      this.tasks.splice(indexOf, 1);
    }
  },
  persist: true,
});