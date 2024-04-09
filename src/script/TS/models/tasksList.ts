import { TaskData } from "./taskData";

export interface TasksList {
  id: string;
  name: string;
  tasks: TaskData[];
}
