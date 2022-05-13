// ! COMPONENTS
import Navbar from './components/Navbar';
// ! FILES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
