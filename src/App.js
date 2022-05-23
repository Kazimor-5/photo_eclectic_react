// ! COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './LandingPage';
import Footer from './components/Footer';
import Contact from './components/Contact';
import RendezVous from './components/RendezVous';
// ! FILES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/rdv' element={<RendezVous />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
