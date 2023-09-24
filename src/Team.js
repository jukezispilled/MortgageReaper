import React from 'react';
import image from './images-1.jpg';

function Team() {
    const phoneNumber0 = "3155164543";
    const phoneNumber = "3158781223";

    return (
        <div className=''>
            <section class="bg-white h-min md:h-screen w-screen dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <div class="">
                        <div class="">
                            <h1 class="text-3xl font-semibold text-red-500 capitalize lg:text-3xl dark:text-white">Our Team</h1>

                            <p class="max-w-2xl mt-4 text-gray-700 dark:text-gray-300">
                                We have a combined <span className="font-bold">50+ years experience</span> in buying and reparing houses. Contact one of our members today!
                            </p>
                        </div>

                        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                            <div>
                                <img class="object-cover rounded-xl aspect-square h-auto w-4/5 xl:w-3/5" src={image} alt="" />

                                <h1 class="mt-3 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Amjad "AJ" Hasan</h1>

                                <p class="mt-1 text-gray-500 capitalize dark:text-gray-300">Lead Real Estate Specialist</p>

                                <a href={`tel:${phoneNumber0}`}>
                                    <span class="truncate w-72 underline underline-offset-2">(315) 516-4543</span>
                                </a>
                            </div>

                            <div>
                                <img class="object-cover rounded-xl aspect-square h-auto w-4/5 xl:w-3/5" src={image} alt="" />

                                <h1 class="mt-3 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Abdurrahman "Abdo" Hasan</h1>

                                <p class="mt-1 text-gray-500 capitalize dark:text-gray-300">Property Analyst</p>

                                <a href={`tel:${phoneNumber}`}>
                                    <span class="truncate w-72 underline underline-offset-2">(315) 878-1223</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;