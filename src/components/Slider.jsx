"use client";
import { useTransition,animated } from '@react-spring/web';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Slider = () => {
    const slides = ["/slider2.png", "/Slider3.png","/Slider4.png"];
    const [index, setIndex] =useState(0);
   const transitions = useTransition(index, {
    key:index,
    from:    { opacity: 0, transform: 'translateX(100%)' },
    enter:   { opacity: 1, transform: 'translateX(0%)' },
    leave:   { opacity: 0, transform: 'translateX(-100%)' }
  })


    return (
       <div className="w-full mx-auto aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative overflow-hidden rounded-3xl shadow-lg my-4">

        {
            transitions((style,i)=>(
                <animated.div style={{ ...style, position: 'absolute', inset: 0 }}>
                         <Image
                                src={slides[i]}
                                fill
                                alt="slider" 
                                className="object-cover object-center"
                                priority
                                sizes="100vw"
                                
                            />
                </animated.div>
            ))
        }
 
  <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
  className="bg-black/50 text-orange-800 font-extrabold px-3 py-2 rounded-full hover:bg-black/70"
  onClick={()=>setIndex((p)=>(p+1)%slides.length)}
  >&lt;</button>
        <button
  className="bg-black/50 text-orange-800 font-extrabold px-3 py-2 rounded-full hover:bg-black/70"
  onClick={()=>setIndex((p)=>(p+1)%slides.length)}
  >&gt;</button>
  </div>
</div>
    );
};

export default Slider;