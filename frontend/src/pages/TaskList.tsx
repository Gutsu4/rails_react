import { useState, useEffect } from 'react'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Test Task', done: false }
    ]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="p-2 border-b">{task.title}</li>
                ))}
            </ul>
        </div>
    )
}
