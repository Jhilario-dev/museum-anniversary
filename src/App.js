import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Museum from './pages/Museum';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import './styles/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Ruta principal del museo */}
          <Route path="/" element={<Museum />} />

          {/* Ruta dinámica para cada galería */}
          <Route path="/gallery/:id" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;