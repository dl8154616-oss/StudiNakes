import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'

import './index.css'
import './app.css'

// authentication
import LoginForm from './pages/authentication/Login/login'
import SignupForm from './pages/authentication/SignUp/signup'
import ForgorPassword from './pages/authentication/Login/ForgotPassword'
import PasswordReset from './pages/authentication/Login/PasswordReset'
import SetNewPassword from './pages/authentication/Login/SetNewPassword'
import CheckYourEmail from './pages/authentication/Login/CheckYourEmail'

// course
import CourseTabsDetails from './pages/Course/CourseTabsDetails.jsx'

// dashboard user
import UserDashboard from './pages/Dashboard/UserDashboard/LayoutUserDashboard.jsx'

// user profile
import UserProfile from './pages/Profile/LayoutUser.jsx'

export default function App() {
  return (
    <div className="">
      <Routes>

        {/* home */}
        <Route path="/" element={<Home />} />

        {/* tasks */}
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/:id/edit" element={<TaskForm />} />

        {/* authentication */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/ForgotPassword" element={<ForgorPassword />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        <Route path="/SetNewPassword" element={<SetNewPassword />} />
        <Route path="/CheckYourEmail" element={<CheckYourEmail />} />

        {/* course details */}
        <Route path="/CourseTabsDetails" element={<CourseTabsDetails />} />

        {/* dashboard user */}
        <Route path='/User-Dashboard' element={<UserDashboard />} />

        {/* user profile */}
        <Route path='/User-Profile' element={<UserProfile />} />

      </Routes>
    </div>
  )
}