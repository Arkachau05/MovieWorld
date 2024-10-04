import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-yellow-400">MovieWorld📺</h1>
                        <p className="text-gray-400 mt-2">Your gateway to the world of cinema.</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-yellow-300 font-semibold mb-2">Quick Links</h2>
                        <ul className="text-gray-400">
                            <li className="mb-1">
                                <a href="/home" className="hover:text-yellow-400 transition duration-200">Home</a>
                            </li>
                            <li className="mb-1">
                                <a href="/about" className="hover:text-yellow-400 transition duration-200">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a href="/contact" className="hover:text-yellow-400 transition duration-200">Contact</a>
                            </li>
                            <li className="mb-1">
                                <a href="/privacy" className="hover:text-yellow-400 transition duration-200">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h2 className="text-yellow-300 font-semibold mb-2">Subscribe to Our Newsletter</h2>
                        <form className="flex justify-center">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="p-2 rounded-l-md bg-gray-900 text-gray-300 focus:outline-none" 
                            />
                            <button className="bg-yellow-400 text-black p-2 rounded-r-md hover:bg-yellow-300 transition duration-200">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center mb-6">
                    <a href="#" className="mx-3 text-gray-400 hover:text-yellow-400 transition duration-200">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="mx-3 text-gray-400 hover:text-yellow-400 transition duration-200">
                        <FaTwitter />
                    </a>
                    <a href="#" className="mx-3 text-gray-400 hover:text-yellow-400 transition duration-200">
                        <FaInstagram />
                    </a>
                    <a href="#" className="mx-3 text-gray-400 hover:text-yellow-400 transition duration-200">
                        <FaLinkedinIn />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between mb-6">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-yellow-300 font-semibold mb-1">Need Help?</h3>
                        <p className="text-gray-400">Contact Support</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-yellow-300 font-semibold mb-1">Follow Us</h3>
                        <p className="text-gray-400">Stay updated with our latest news!</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} MovieWorld. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
