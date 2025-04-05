import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Service from './pages/TechnicalService/Service';
import Support from './pages/TechnicalService/Support';
import ContactUs from './pages/TechnicalService/ContactUs';
import Career from './pages/Career/Career';
import StaycationPage from './pages/Staycation/Staycation';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/technical-service/service" element={<Service />} />
              <Route path="/technical-service/support" element={<Support />} />
              <Route path="/technical-service/contact-us" element={<ContactUs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/staycation" element={<StaycationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 