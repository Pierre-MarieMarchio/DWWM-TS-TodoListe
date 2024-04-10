import { TaskData } from "./taskData.js";

export interface TasksList {
  id: string;
  name: string;
  tasks: TaskData[];
}
