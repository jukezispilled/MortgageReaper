import React, { useState } from 'react'; // Import React and useState
import './App.css';
import logo from './icons8-reaper-48.png';
import icon from './icons8-call-50.png';
import backgroundImage from './cash-home-buyer-1.jpg';
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";

function App() {
  const [isOpen, setIsOpen] = useState(false); // Initialize isOpen state

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

  const phoneNumber = "3158781223";

  return (
    <div className="">
      <nav className="relative bg-slate-200 shadow dark:bg-gray-800 w-screen">
        <div className="container px-6 py-5 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <div className="flex gap-1.5">
                <h1 className="text-xl font-bold">MORTGAGE REAPER</h1>
                <div className="flex items-center">
                  <img src={logo} className="h-6 w-6" alt="logo" />
                </div>
              </div>
            </a>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button onClick={toggleMenu} type="button" className="text-red-700 dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none dark:focus:text-gray-400" aria-label="toggle menu">
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-200 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
            <div className="flex flex-col md:flex-row md:mx-6">
              <a className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                Home
              </a>
              <a onClick={scrollToElement} className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                Contact
              </a>
              <a className="my-2 text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:text-red-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className='h-screen w-screen flex justify-center bg-cover bg-center relative' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='-mt-[40%] grid content-center text-center mx-[13%] w-screen space-y-1 z-10'>
          <div className='pb-2'>
            <a href={`tel:${phoneNumber}`}>
              <button className="bg-red-500 w-auto p-2 whitespace-nowrap rounded-md text-white font-medium">
                <div className='flex gap-2'>
                  <div>(315) 878-1223</div>
                  <img src={icon} className="h-6 w-6" alt="icon" />
                </div>
              </button>
            </a>
          </div>
          <div className='text-4xl text-white font-bold'>
            STOP PAYING THOSE DAMN JEWS ALL THAT INTEREST
          </div>
          <div className='text-2xl text-[#e95656] font-semibold'>
            We'll buy you out of your mortgage
          </div>
          <div className='pt-2'>
            <button onClick={scrollToElement} className="bg-red-500 w-min p-2 whitespace-nowrap rounded-md text-white font-medium">
              Fuck Yea
            </button>
          </div>
        </div>
      </div>
      <div className='w-screen'>
        <div className='py-4 bg-red-500 text-white'>
          <HorizontalTicker duration={5000}>
            <div className='flex space-x-4 text-3xl font-semibold whitespace-nowrap'>
              <div>
                WE BUY FROM ALL RACES!&nbsp;
              </div>
              <div>
                WE BUY FROM ALL RACES!&nbsp;
              </div>
              <div>
                WE BUY FROM ALL RACES!&nbsp;
              </div>
            </div>
          </HorizontalTicker>
        </div>
      </div>
      <div>
      <section id="scroll-target" class="min-h-screen bg-zinc-900 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        <div class="container flex flex-col min-h-screen px-[10%] py-12 mx-auto">
            <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div class="text-white lg:w-1/2 lg:mx-6">
                    <h1 class="text-2xl font-semibold capitalize lg:text-3xl">Get an Offer</h1>

                    <p class="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

                    <div class="mt-6 space-y-5 md:mt-8">

                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span class="mx-2 text-white truncate w-72">(315) 878-1223</span>
                        </p>

                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span class="mx-2 text-white truncate w-72">abuabid@example.com</span>
                        </p>
                    </div>

                    <div class="mt-6 md:mt-8">
                        <h3 class="text-gray-300 underline underline-offset-2">Follow us</h3>

                        <div class="flex mt-4 -mx-1.5 ">
                            <a class="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="#">
                                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                </svg>
                            </a>

                            <a class="mx-1.5 text-white transition-colors duration-300 transform hover:text-red-500" href="#">
                                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-8 lg:w-1/2 lg:mx-6">
                    <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                        <form class="mt-1">
                            <div class="flex-1">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Address</label>
                                <input type="text" placeholder="123 Apple Street" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">City/State/Zipcode</label>
                                <input type="text" placeholder="Syracuse, NY 13215" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div class="w-full mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                            </div>

                            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                                give me an offer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </div>
      <footer class="bg-slate-100 border-t border-slate-200 dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-col items-center text-center">
              <a href="#">
                <div className="flex gap-2">
                  <h1 className="text-xl font-bold">MORTGAGE REAPER</h1>
                  <div className="flex items-center">
                    <img src={logo} className="h-6 w-6" alt="logo" />
                  </div>
                </div>
              </a>

                <div class="flex flex-wrap justify-center mt-6 -mx-4">
                    <a href="#" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>
                    
                    <a href="#" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Contact </a>
                    
                    <a href="#" class="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-red-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>
                </div>

            </div>

            <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

            <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                <p class="text-sm text-gray-500 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
