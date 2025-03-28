import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProjectList from './pages/ProjectList'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Project Management</h1>
        </div>
      </nav>
      <main className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
