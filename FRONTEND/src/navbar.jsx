// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import UserProfile from './ProfileName';
import LogoutButton from './Logout';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-yellow-500 text-2xl font-bold">
                    <Link to="/">MovieWorld📺</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-yellow-300 hover:text-yellow-400 transition-colors">Home</Link>
                    <Link to="/favorites" className="text-yellow-300 hover:text-yellow-400 transition-colors">Favorites</Link>
                    <Link to="/about" className="text-yellow-300 hover:text-yellow-400 transition-colors">About</Link>
                    <Link to="/contact" className="text-yellow-300 hover:text-yellow-400 transition-colors">Contact</Link>
                </div>
                <div  className='flex'>
                    <UserProfile/>
                    <LogoutButton/>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="text-yellow-400 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </nav>
    );
};

export default Navbar;
