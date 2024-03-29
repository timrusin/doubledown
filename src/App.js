import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import BeforeAfter from './pages/BeforeAfter'
import Showcase from './pages/Showcase'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/before_after" element={<BeforeAfter />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="about" element={<About />} />
        <Route path="/contact/:name" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
