// Loader.js
import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="loader w-16 h-16 border-8 border-t-8 border-gray-300 border-t-yellow-400 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
