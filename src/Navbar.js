import React, { useState } from 'react';
import logo from './icons8-reaper-48.png';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Initialize isOpen state

    const location = useLocation();

    // Function to toggle the mobile menu
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const scrollToElement = () => {
        const element = document.getElementById('scroll-target'); // Replace 'scroll-target' with the actual ID of the element you want to scroll to
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the element
        }
    };

    const correctRoute = '/';

    // Check if the current route matches the correct route
    const isAtCorrectRoute = location.pathname === correctRoute;

    return (
        <nav className="relative bg-slate-200 shadow dark:bg-gray-800 w-screen">
            <div className="container px-6 py-5 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <div className="flex gap-1.5">
                            <div className="text-xl font-bold z-20 text-red-600">MORTGAGE REAPER</div>
                            <div className="flex items-center">
                                <img src={logo} className="h-7 w-7 z-10" alt="logo" />
                            </div>
                        </div>
                    </a>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-red-600 dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                            ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-200 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                    <a className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">
                        Home
                    </a>
                    {isAtCorrectRoute ? (
                        <a onClick={scrollToElement} style={{ cursor: 'pointer' }} className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                            Get an Offer
                        </a>
                    ) : (
                        <a href="/" className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                            Get an Offer
                        </a>
                    )}
                    {/*<a href="/team" className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                        Our Team
                    </a>*/}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;