import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // `Outlet` is used to render nested routes

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-500 text-white p-4 text-center">
      
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet /> {/* Render the nested route components here */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>My Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
