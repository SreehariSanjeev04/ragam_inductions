import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import Dashboard from '../pages/dashboard.jsx'
import Login from '../pages/login.jsx'
import Register from '../pages/register'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
