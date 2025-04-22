import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

// Note: You'll need to install these packages:
// npm install react-slick slick-carousel

const BannerCarousel = () => {
  const [quotes] = useState([
    "Style is a way to say who you are without having to speak. Queen of Delhi is coming in may 2025. Do Register now.",
    "Style is a way to say who you are without having to speak. Queen of Delhi is coming in may 2025. Do Register now.",
    "Style is a way to say who you are without having to speak. Queen of Delhi is coming in may 2025. Do Register now.",
    "Style is a way to say who you are without having to speak. Queen of Delhi is coming in may 2025. Do Register now.",
  ]);

  const [images] = useState([
    banner1,
    banner2,
    banner3,
    banner4
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto">
      <Slider {...settings} className="overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="relative h-96 md:h-screen max-h-[600px]">
            <div className="absolute inset-0 z-10"></div>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center mb-[5rem] z-20 mx-auto">
              <div className="text-center p-6 bg-black/5 backdrop-blur-sm rounded-lg max-w-xl mx-4">
                <h2 className="text-white text-xl md:text-3xl font-bold italic">
                  "{quotes[index]}"
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <button className="bg-white/80 hover:bg-white text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-WVm4v_YdYMgKCof8aW6QphSzxD8xV0gmMFDPoFUq8LKRLA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
          Register Now
        </a>
        </button>
      </div>
    </div>
  );
};

export default BannerCarousel;