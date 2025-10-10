import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../services/api'


export default function TaskForm(){
const { id } = useParams()
const navigate = useNavigate()
const [form, setForm] = useState({ title: '', description: '', completed: false })


useEffect(()=>{
if(id){
api.get(`/tasks/${id}`).then(res => setForm(res.data)).catch(err => console.error(err))
}
}, [id])


const submit = async (e) => {
e.preventDefault()
try{
if(id) await api.put(`/tasks/${id}`, form)
else await api.post('/tasks', form)
navigate('/tasks')
}catch(err){
console.error(err)
alert('Error saving')
}
}


return (
<div>
<h2>{id ? 'Edit' : 'New'} Task</h2>
<form onSubmit={submit}>
<div className="mb-3">
<label className="form-label">Title</label>
<input className="form-control" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
</div>
<div className="mb-3">
<label className="form-label">Description</label>
<textarea className="form-control" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
</div>
<div className="form-check mb-3">
<input className="form-check-input" type="checkbox" checked={form.completed} onChange={e => setForm({...form, completed: e.target.checked})} id="completed" />
<label className="form-check-label" htmlFor="completed">Completed</label>
</div>
<button className="btn btn-primary" type="submit">Save</button>
</form>
</div>
)
}