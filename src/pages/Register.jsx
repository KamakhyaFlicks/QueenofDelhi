"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Register() {
  const [isLoading, setIsLoading] = useState(true)
  
  // The Google Form URL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe-WVm4v_YdYMgKCof8aW6QphSzxD8xV0gmMFDPoFUq8LKRLA/viewform?embedded=true"
  
  // Handle iframe loading state
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[30vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080/111111/333333')",
            filter: "brightness(0.4) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Register <span className="text-yellow-500">Now</span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Complete Your Registration</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Please fill out the form below to complete your registration. All fields marked with an asterisk (*) are required.
          </p>
        </motion.div>

        {/* Form Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-zinc-900/70 border border-zinc-800 rounded-xl p-4 md:p-6 overflow-hidden "
        >
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 z-10">
              <div className="flex flex-col items-center">
                <svg 
                  className="animate-spin h-10 w-10 text-yellow-500 mb-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  ></circle>
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p>Loading registration form...</p>
              </div>
            </div>
          )}
          
          {/* Google Form iframe */}
          <div className="h-[800px] md:h-[700px] w-full">
            <iframe
              src={googleFormUrl}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              onLoad={handleIframeLoad}
              className="w-full h-[100rem]"
              title="Registration Form"
            >
              Loading…
            </iframe>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Additional information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-10 text-zinc-400 text-sm"
        >
          <p>Having trouble with the form? Please contact us at <a href="mailto:queenofdelhiofficial@gmail.com" className="text-yellow-500 hover:underline">queenofdelhiofficial@gmail.com</a></p>
        </motion.div>
      </div>
    </div>
  )
}