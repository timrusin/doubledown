import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newborn" element={<NewBorn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
