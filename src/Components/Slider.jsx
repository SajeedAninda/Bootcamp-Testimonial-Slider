import React from 'react';
import "./slider.css";
import tanyaImg from "../assets/image-tanya.jpg";

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
                <div className="quoteDiv w-[50%]">
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
                <div className="imgDiv w-[50%] flex justify-center">
                    <img className='w-[450px]' src={testimonials[0].image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slider;