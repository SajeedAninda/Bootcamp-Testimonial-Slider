import React, { useEffect, useState } from 'react';
import './slider.css';
import tanyaImg from '../assets/image-tanya.jpg';
import johnImg from '../assets/image-john.jpg';
import prevIcon from '../assets/icon-prev.svg';
import nextIcon from '../assets/icon-next.svg';

const Slider = () => {
    const testimonials = [
        {
            name: 'Tanya Sinclair',
            position: 'UX Engineer',
            testimonial: 'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
            image: tanyaImg
        },
        {
            name: 'John Tarkpor',
            position: 'Junior Front-end Developer',
            testimonial: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
            image: johnImg
        },
    ];

    const [current, setCurrent] = useState(0);
    const [slide, setSlide] = useState(true); 
    const length = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [current]);

    const nextSlide = () => {
        setSlide(false);
        setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
            setSlide(true); 
        }, 500); 
    };

    const prevSlide = () => {
        setSlide(false);
        setTimeout(() => {
            setCurrent(current === 0 ? length - 1 : current - 1);
            setSlide(true); 
        }, 500); 
    };

    return (
        <div className='h-fit lg:h-screen w-full flex justify-center items-center'>
            <div className='h-[90%] w-[80%] mx-auto sliderDiv flex items-center justify-between'>
                <div className='flex py-12 lg:py-0 flex-col-reverse lg:flex-row items-center justify-between relative'>
                    <div className={`quoteDiv w-[90%] lg:w-[61%] z-10 py-12 transition-all duration-500 ${slide ? 'slide-in' : 'slide-out'}`}>
                        <h1 className='text-[32px] font-light text-[#202046]'>
                            {testimonials[current].testimonial}
                        </h1>

                        <div className='mt-5 flex flex-col lg:flex-row gap-4'>
                            <p className='text-[#202046] text-[18px] font-bold'>
                                {testimonials[current].name}
                            </p>
                            <p className='text-[#BABACF] text-[18px] font-semibold'>
                                {testimonials[current].position}
                            </p>
                        </div>
                    </div>
                    <div className={`imgDiv w-[90%] lg:w-[50%] flex justify-center lg:absolute right-0 top-0 transition-all duration-500 ${slide ? 'slide-in' : 'slide-out'}`}>
                        <img className='w-[250px] md:w-[450px] lg:w-[450px] shadow-2xl rounded-md' src={testimonials[current].image} alt="" />
                        <div className='rounded-[22px] flex items-center justify-between gap-0 absolute -bottom-5 left-[120px] lg:left-20 custom-shadow'>
                            <button onClick={prevSlide} className='flex justify-start rounded-l-[22px] bg-white py-3 px-5 shadow-2xl hover:bg-gray-300 transition-colors duration-200'>
                                <img src={prevIcon} alt="Previous" />
                            </button>
                            <button onClick={nextSlide} className='flex justify-end rounded-r-[22px] bg-white py-3 px-5 shadow-2xl hover:bg-gray-300 transition-colors duration-200'>
                                <img src={nextIcon} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
