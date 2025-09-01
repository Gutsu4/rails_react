import {useState, useEffect} from "react";
import {list} from "../api/task";
import {Task} from "../types/Task";
import "../css/TaskTable.css"
import "../css/Button.css"

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        list().then((res) => setTasks(res.data));
    }, []);

    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead className="task-table-head">
                <tr className="task-table-row">
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>説明</th>
                    <th>ステータス</th>
                    <th>作成日</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <tr key={task.id} className="task-table-row">
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status === 0 ? "未完了" : "完了"}</td>
                        <td>{task.created_at}</td>
                        <td>
                            <button className="secondary-button">編集する</button>
                        </td>
                        <td>
                            <button className="danger-button">削除する</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}