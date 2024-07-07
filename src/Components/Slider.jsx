import React from 'react';
import "./slider.css";
import tanyaImg from "../assets/image-tanya.jpg";
import prevIcon from "../assets/icon-prev.svg";
import nextIcon from "../assets/icon-next.svg";


const Slider = () => {
    let testimonials = [
        {
            name: 'Tanya Sinclair',
            position: 'UX Engineer',
            testimonial: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
            image: tanyaImg
        },
    ]

    return (
        <div className='h-screen w-full  flex justify-center items-center '>
            <div className='h-[90%] w-[80%] mx-auto sliderDiv flex items-center justify-between'>
                <div className='flex items-center justify-between relative'>
                    <div className="quoteDiv w-[61%] z-10 py-12">
                        <h1 className='text-[32px] font-light text-[#202046]'>
                            {testimonials[0].testimonial}
                        </h1>

                        <div className='mt-5 flex gap-4'>
                            <p className='text-[#202046] text-[18px] font-bold'>
                                {testimonials[0].name}
                            </p>
                            <p className='text-[#BABACF] text-[18px] font-semibold'>
                                {testimonials[0].position}
                            </p>
                        </div>
                    </div>
                    <div className="imgDiv w-[50%] flex justify-center absolute right-0 top-0">
                        <img className='w-[450px] shadow-2xl rounded-md' src={testimonials[0].image} alt="" />
                        <div className='rounded-[22px] flex items-center justify-between gap-0 absolute -bottom-5 left-20 custom-shadow'>
                            <button className='flex justify-start rounded-l-[22px] bg-white py-3 px-5 shadow-2xl hover:bg-gray-300 transition-colors duration-200'>
                                <img src={prevIcon} alt="" />
                            </button>
                            <button className='flex justify-end rounded-r-[22px] bg-white py-3 px-5 shadow-2xl hover:bg-gray-300 transition-colors duration-200'>
                                <img src={nextIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;