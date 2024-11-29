import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
