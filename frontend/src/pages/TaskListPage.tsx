import Layout from "../layouts/Layout";
import TaskList from "../features/TaskList"

export default function TaskListPage() {
    return (
        <Layout title="タスク一覧">
            <TaskList />
        </Layout>
    )
}