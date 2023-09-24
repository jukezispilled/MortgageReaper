import React from 'react';
import logo from './icons8-reaper-48.png';
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

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
        <footer class="bg-slate-100 border-t border-slate-200 dark:bg-gray-900">
            <div class="container px-6 py-8 mx-auto">
                <div class="flex flex-col items-center text-center">
                <a href="/">
                    <div className="flex gap-1.5">
                        <div className="text-xl font-bold z-20 text-red-600">MORTGAGE REAPER</div>
                        <div className="flex items-center">
                            <img src={logo} className="h-7 w-7 z-10" alt="logo" />
                        </div>
                    </div>
                </a>

                    <div class="flex flex-wrap justify-center mt-6 -mx-4">
                        <a href="/" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>
                        
                        {isAtCorrectRoute ? (
                            <a onClick={scrollToElement} style={{ cursor: 'pointer' }} class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> 
                                Get an Offer 
                            </a>
                        ) : (
                            <a href="/" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> 
                                Get an Offer 
                            </a>
                        )}
                        
                        <a href="/team" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Our Team </a>
                    </div>

                </div>

                <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p class="text-sm text-gray-500 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;