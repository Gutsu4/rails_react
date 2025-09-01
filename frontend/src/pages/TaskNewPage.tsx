import Layout from "../layouts/Layout"
import TaskCreateForm from "../features/TaskCreateForm";

export default function TaskNewPage() {
    return (
        <Layout title="タスク作成">
            <TaskCreateForm/>
        </Layout>
    )
}