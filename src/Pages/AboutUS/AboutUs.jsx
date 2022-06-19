import React from "react";
import "./AboutUs.css";

import { AiFillLinkedin, AiOutlineMail, AiFillFacebook } from "react-icons/ai";
const AboutUs = () => {
    return (
        <>
            <div class="bg-dark-gray w-full min-h-screen">
                <h2 className="mb-10 text-white text-center">Fisheries is a profession or business that entails catching fish or extracting other marine or freshwater resources. One of Bangladesh's most important agricultural industry is fishing. In this deltaic setting with numerous rivers and inland haors and beels (huge lakes and lowland areas), as well as ponds formed in populated places for bathing, cleaning, and often as a source of drinking water, fish were an integral part of the culinary culture. There was no need for fisheries teaching and research in the past because the population was low and the fish were plentiful.</h2>
                <div className="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap mt-10">
                    <div className="md:w-1/3 w-full">
                        <div >
                            <img style={{height:"300px"}}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFz2xXfhSnJbML6vu403bC4VrtyRb49hd8A&usqp=CAU"
                                alt="Profile"
                                class="ml-12 width-100"
                            />
                        </div>

                        
                    </div>
                    <div class="md:w-2/4 w-full">              
                    <section class="mt-16">
                            <h3 class="uppercase text-white font-medium text-3xl">
                                Contact About Us:
                            </h3>
                            <div class="h-1 bg-green w-48 my-4"></div>
                            <div class="text-white">
                                <a
                                    href="https://www.facebook.com/"
                                    class="hover:underline flex items-center mt-1"
                                >
                                    <AiFillFacebook class="mr-2"></AiFillFacebook>
                                    Facebook
                                </a>
                                <a
                                    href="mailto:dev.nurulislam@gmail.com"
                                    class="hover:underline flex items-center mt-1"
                                >
                                    <AiOutlineMail class="mr-2"></AiOutlineMail>
                                   fisheries@info.com 
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
