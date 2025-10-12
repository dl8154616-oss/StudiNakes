import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import './index.css'
import './app.css'


export default function App() {
return (
<div className="">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/tasks" element={<TaskList />} />
<Route path="/tasks/new" element={<TaskForm />} />
<Route path="/tasks/:id/edit" element={<TaskForm />} />
</Routes>
</div>
)
}