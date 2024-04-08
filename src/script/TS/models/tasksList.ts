import { TaskData } from "./taskData";

export interface TasksList {
  id: string;
  name: string;
  taskList?: TaskData[];
}
