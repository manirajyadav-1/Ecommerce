import React, { useState, useEffect } from 'react';
import "./Carousel.css"
import carouselData from "../Assets/carouselData.json";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

function Carousel(){
    const { slides } = carouselData;

    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
        setSlide(slide === slides.length-1 ? 0 : slide + 1);
    }

    const prevSlide = () =>{
        setSlide(slide === 0 ? slides.length-1 : slide - 1);
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); 
        return () => clearInterval(interval); 
    }); 

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
            {slides.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            <span className='indicators'>
                {slides.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    );
}

export default Carousel;
