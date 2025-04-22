import React from 'react'
import BannerCarousel from '../components/carousels/BannerCarousel'
import VideoCarousel from '../components/carousels/VideoCarousel'
import OurVision from '../components/sections/OurVision'
import TestimonialCarousel from '../components/carousels/TestimonialCarousel'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="bg-[#121212] text-yellow-200 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <main className="max-w-8xl mx-auto w-full">

        {/* Banner Carousel */}
        <BannerCarousel/> 

        {/* Our Work */}
        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[yellow] mb-6">Featured Videos</h2>
          <VideoCarousel/>
        </section>

        <section className="my-12">
          {/* <h2 className="text-2xl sm:text-3xl font-bold text-center text-[yellow] mb-6">Our Vision</h2> */}
          <TestimonialCarousel/>
        </section>

        <section className="my-12">
          {/* <h2 className="text-2xl sm:text-3xl font-bold text-center text-[yellow] mb-6">Our Vision</h2> */}
          <OurVision/>
        </section>

        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-yellow-400 mb-6">Find Us Here</h2>
          <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full max-w-6xl mx-auto aspect-video rounded-md overflow-hidden shadow-lg"
      >
          <div className="relative w-full pb-[56.25%] rounded-md overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2021223648553!2d77.21723251049605!3d28.563692687103035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ade67933588dda9%3A0xe46bb16d5c48903!2sKammakhya%20Flicks!5e0!3m2!1sen!2sin!4v1744892768758!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </motion.div>
        </section>
        

      </main>
      
    </div>
  )
}

export default Home