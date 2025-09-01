import React from 'react';
import {Routes, Route} from "react-router-dom";
import TaskNewPage from "./pages/TaskNewPage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailPage from "./pages/TaskDetailPage";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<TaskListPage/>}/>
            <Route path="/new" element={<TaskNewPage/>}/>
            <Route path="/:id" element={<TaskDetailPage/>}/>
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
    );
}
