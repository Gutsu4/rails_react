import {useState, useEffect} from "react";
import {list} from "../api/task";
import {Task} from "../types/Task";

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        list().then((res) => setTasks(res.data));
    }, []);

    return (
        <div>
            <h2>
                タスク一覧
            </h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>説明</th>
                    <th>ステータス</th>
                    <th>作成日</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                        <td>{task.created_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}