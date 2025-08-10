import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import About from './pages/About'
import SingleProject from './pages/SingleProject'


const App = () => {
  return (
    <div>
  <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/single_project/:project' element={<SingleProject />} />
           <Route path='/resumet' element={<Resume />} />
            <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App