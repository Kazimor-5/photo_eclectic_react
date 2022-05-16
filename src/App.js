// ! COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './LandingPage';
import Footer from './components/Footer';
// ! FILES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/rdv' />
        <Route path='/contact' />
        <Route path='/portfolio' />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
