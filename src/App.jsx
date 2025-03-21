import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Error from './pages/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all other routes and includes the header/footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Home route */}
          <Route path="about" element={<About />} /> {/* About route */}
          <Route path="shop" element={<Shop />} /> {/* Shop route */}
          <Route path="*" element={<Error />} /> {/* Catch-all route for unmatched paths */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
