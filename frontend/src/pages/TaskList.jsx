import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'


export default function TaskList(){
const [tasks, setTasks] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
api.get('/tasks')
.then(res => setTasks(res.data))
.catch(err => console.error(err))
.finally(()=>setLoading(false))
}, [])


const deleteTask = async (id) => {
if (!confirm('Delete this task?')) return
await api.delete(`/tasks/${id}`)
setTasks(tasks.filter(t => t.id !== id))
}


if (loading) return <div>Loading...</div>


return (
<div>
<div className="d-flex justify-content-between align-items-center mb-3">
<h2>Tasks</h2>
<Link to="/tasks/new" className="btn btn-success">New Task</Link>
</div>


<div className="list-group">
{tasks.map(t => (
<div key={t.id} className="list-group-item d-flex justify-content-between align-items-start">
<div>
<h5 className="mb-1">{t.title}</h5>
<p className="mb-1">{t.description}</p>
<small>{t.completed ? 'Completed' : 'Open'}</small>
</div>
<div>
<Link className="btn btn-sm btn-outline-primary me-2" to={`/tasks/${t.id}/edit`}>Edit</Link>
<button className="btn btn-sm btn-danger" onClick={() => deleteTask(t.id)}>Delete</button>
</div>
</div>
))}
</div>
</div>
)
}