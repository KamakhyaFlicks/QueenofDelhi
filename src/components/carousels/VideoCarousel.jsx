import React, { useState } from "react";
import Slider from "react-slick";

// Note: You'll need to install these packages if you haven't already:
// npm install react-slick slick-carousel


const VideoCarousel = () => {
  // YouTube video IDs that will be embedded
  const [videos] = useState([
    {
      id: 1,
      title: "Queen Of Delhi Talent round Performance at Amity University",
      description: "Amazing moments from our previous fashion week event with top designers.",
      youtubeId: "ViI3ucjs0h8?si=uASce77jv5no-i4J" // Example YouTube ID
    },
    {
      id: 2,
      title: "Bollywood Actor Mustaq Khan shared his blessings with Queen Of Delhi Contestents.",
      description: "Go behind the scenes with our models as they prepare for the runway.",
      youtubeId: "wb_ah5YBjIw?si=d5Z48bNmS_3cASwf" // Example YouTube ID
    },
    {
      id: 2,
      title: "Queen Of Delhi Fashion Week",
      description: "Go behind the scenes with our models as they prepare for the runway.",
      youtubeId: "o5569mSIwYI?si=8aGUciXXW0D2zEP1" // Example YouTube ID
    },
    {
      id: 3,
      title: "Queen Of Delhi",
      description: "Interviews with our featured designers showcasing their latest collections.",
      youtubeId: "KjztYD8vH8Q?si=2PS2buo-S3vJ2FRL" // Example YouTube ID
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Featured Videos</h2> */}
      <Slider {...settings} className="youtube-video-carousel">
        {videos.map((video) => (
          <div key={video.id} className="px-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="relative pt-0 pb-0 h-0" style={{ paddingBottom: "56.25%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-300">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;