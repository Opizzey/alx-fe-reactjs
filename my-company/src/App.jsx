import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
