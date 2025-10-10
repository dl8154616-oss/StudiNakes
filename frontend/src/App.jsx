import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'


export default function App() {
return (
<div className="container py-4">
<nav className="mb-4">
<Link className="btn btn-outline-primary me-2" to="/">Home</Link>
<Link className="btn btn-primary" to="/tasks">Tasks</Link>
</nav>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/tasks" element={<TaskList />} />
<Route path="/tasks/new" element={<TaskForm />} />
<Route path="/tasks/:id/edit" element={<TaskForm />} />
</Routes>
</div>
)
}