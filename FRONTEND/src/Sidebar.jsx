// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-80 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="bg-black w-64 h-full p-4">
                <button onClick={toggleSidebar} className="text-yellow-400 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col mt-4">
                    <Link to="/" onClick={toggleSidebar} className="text-yellow-300 hover:text-yellow-400 transition-colors py-2">Home</Link>
                    <Link to="/favorites" onClick={toggleSidebar} className="text-yellow-300 hover:text-yellow-400 transition-colors py-2">Favorites</Link>
                    <Link to="/about" onClick={toggleSidebar} className="text-yellow-300 hover:text-yellow-400 transition-colors py-2">About</Link>
                    <Link to="/contact" onClick={toggleSidebar} className="text-yellow-300 hover:text-yellow-400 transition-colors py-2">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
