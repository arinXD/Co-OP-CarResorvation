"use client";
import React from 'react'
import { Carousel } from 'flowbite-react';
const Carousels = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src="/teacher.jpeg" alt="..." />
                <img src="/teacher2.jpeg" alt="..." />
                <img src="/teacher3.jpeg" alt="..." />
                <img src="/teacher4.jpeg" alt="..." />
                <img src="/teacher5.jpeg" alt="..." />
            </Carousel>
        </div>
    )
}

export default Carousels