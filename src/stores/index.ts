import { defineStore } from 'pinia'
import { type ITask } from '@/models/todo';
import type { IUser } from '@/models/user';
import { users } from '@/data/user';

export const useStore = defineStore("app", {
  state: () => ({
    tasks: [] as ITask[],
    users: [...users] as IUser[],
    userLoggedIn: [] as IUser[],
  }),
  actions: {
    onCreateNewTask(task: ITask) {
      this.tasks.push(task);
    },
    onDeleteTask(task: ITask) {
      const indexOf = this.tasks.indexOf(task);
      this.tasks.splice(indexOf, 1);
    },
    onCreateNewUser(user: IUser) {
      this.users.push(user);
    }
  },
  persist: true,
});