import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename="/studem--/studem">
      
      <Home />
      
    </Router>
  );
}

export default App;
