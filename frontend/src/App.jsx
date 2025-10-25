import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import './index.css'
import './app.css'
import LoginForm from './pages/authentication/Login/login'
import SignupForm from './pages/authentication/SignUp/signup'
import ForgorPassword from './pages/authentication/Login/ForgotPassword'
import PasswordReset from './pages/authentication/Login/PasswordReset'
import SetNewPassword from './pages/authentication/Login/SetNewPassword'
import CheckYourEmail from './pages/authentication/Login/CheckYourEmail'


export default function App() {
return (
<div className="">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/tasks" element={<TaskList />} />
<Route path="/tasks/new" element={<TaskForm />} />
<Route path="/tasks/:id/edit" element={<TaskForm />} />
<Route path="/login" element={<LoginForm />} />
<Route path="/signup" element={<SignupForm />} />
<Route path="/ForgotPassword" element={<ForgorPassword />} />
<Route path="/PasswordReset" element={<PasswordReset />} />
<Route path="/SetNewPassword" element={<SetNewPassword />} />
<Route path="/CheckYourEmail" element={<CheckYourEmail />} />
</Routes>
</div>
)
}