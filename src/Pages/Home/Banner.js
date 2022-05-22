import React from 'react';
import pic1 from "../../Image/banner/close-up-three-small-computer-coolers-with-wires-lying-table-gray-background-computer-parts-factory-concept-advertising-space_212944-14029.webp"
import pic2 from "../../Image/banner/computer-assembly-500x500.png"
import pic3 from "../../Image/banner/computer-assembly-hands-installing-memory-ram-60096162.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full h-96" alt=''>
                <img src={pic1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-96">
                <img src={pic2} className="w-full h-screen" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-96">
                <img src={pic3} className="w-full h-screen" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;