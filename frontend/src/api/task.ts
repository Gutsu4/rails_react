import {Task} from ".././types/Task";
import {api} from "./client"

export const list = () => api.get<Task[]>("/tasks");