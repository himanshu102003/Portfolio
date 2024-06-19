import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Home from './Component/Home'; // Import the Home component


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <NavBar />
        <Routes>
        <Route path="/Home" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
