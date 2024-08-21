import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./App.css"
import { Home } from "./pages/home.jsx"
import { Projects } from "./pages/projects.jsx"
import { Resume } from "./pages/resume.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
