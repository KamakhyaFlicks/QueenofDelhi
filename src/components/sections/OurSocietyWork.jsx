import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ourVision from "../../assets/images/ourVision.jpg"
// Note: You'll need to install these packages:
// npm install framer-motion react-intersection-observer

const OurVision = () => {
  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const [refImage, inViewImage] = useInView({ threshold: 0.2, triggerOnce: false });
  const [refText, inViewText] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inViewImage) {
      controlsImage.start("visible");
    } else {
      controlsImage.start("hidden");
    }
  }, [controlsImage, inViewImage]);

  useEffect(() => {
    if (inViewText) {
      controlsText.start("visible");
    } else {
      controlsText.start("hidden");
    }
  }, [controlsText, inViewText]);

  const imageVariants = {
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hidden: { 
      opacity: 0, 
      x: -100 
    }
  };

  const textVariants = {
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
    },
    hidden: { 
      opacity: 0, 
      x: 100 
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">Our Society Work</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            ref={refImage}
            initial="hidden"
            animate={controlsImage}
            variants={imageVariants}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent z-10"></div>
              <img 
                src={ourVision} 
                alt="Queen of Delhi Event" 
                className="w-full object-cover h-96 lg:h-[500px] transform hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <span className="bg-yellow-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Elegance Redefined
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            ref={refText}
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
          >
            <div className="p-4 lg:p-0">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Queen of Delhi</h3>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
              OUR MOTIVE IS TO SPREAD AWARNESS THAT BEAUTY IS JUST NOT ABOUT HOW YOU LOOK, IT COMES FROM WITHIN AN INDIVIDUAL. QOD HAS TAKEN THIS OATH TO HELP ACID ATTACK SURVIVERS AND GIVE THEM EQUAL RIGHTS IN THE SOCIETY. QOD COLLECTED FUNDS AND DONATED IT TOWARDS THEIR WELFARE.
              </p>
              
              <button className="bg-yellow-400 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;