import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Note: You'll need to install these packages:
// npm install framer-motion react-intersection-observer

const About = () => {
  // Animation variants for various sections
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerChildrenVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Custom hook for triggering animations when scrolled into view
  const useScrollAnimation = (threshold = 0.1) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold, triggerOnce: false });
    
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);
    
    return [ref, controls];
  };

  // Animation refs and controls
  const [heroRef, heroControls] = useScrollAnimation(0.2);
  const [missionRef, missionControls] = useScrollAnimation();
  const [storyLeftRef, storyLeftControls] = useScrollAnimation();
  const [storyRightRef, storyRightControls] = useScrollAnimation();
  const [statsRef, statsControls] = useScrollAnimation();
  const [testimonialsRef, testimonialsControls] = useScrollAnimation();
  const [teamRef, teamControls] = useScrollAnimation();
  const [partnersRef, partnersControls] = useScrollAnimation();

  // Stats data
  const stats = [
    { figure: "12+", description: "Years Experience" },
    { figure: "500+", description: "Successful Models" },
    { figure: "50+", description: "Partner Agencies" },
    { figure: "30+", description: "Annual Events" }
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sophia Chen",
      role: "Competition Winner 2023",
      image: "/api/placeholder/100/100",
      quote: "Participating in this event transformed my career and gave me the confidence to pursue modeling professionally. The training was exceptional!"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Fashion Designer",
      image: "/api/placeholder/100/100",
      quote: "The quality of models and organization of the event is unmatched. It's been a privilege to work with such professional talent year after year."
    },
    {
      id: 3,
      name: "Mira Kapoor",
      role: "Contestant",
      image: "/api/placeholder/100/100",
      quote: "The skills I learned went beyond the runway. The mentoring changed my perspective on the industry and helped me grow as a person."
    }
  ];

  // Team data
  const team = [
    {
      id: 1,
      name: "Dr. Shubhanshu Singh Rajput",
      role: "Founder & Creative Director",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Ramesh Singh Rajput",
      role: "Event Director",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Dinesh Singh Rajput",
      role: "Styling Coach",
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Dr. Rohit Raj",
      role: "Head of Operations",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        variants={fadeInUpVariant}
        initial="hidden"
        animate={heroControls}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-black/90 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/800" 
            alt="Fashion Event Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-yellow-400">Inspiring</span> Beauty & Fashion
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Transforming talent into icons since 2021
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-3 px-8 rounded-full transition duration-300">
              <a href="https://www.youtube.com/@queenofdelhiofficial" target="_blank" rel="noopener noreferrer">
              Our Programs
                </a>
                
              </button>
              <button className="border-2 border-yellow-400 hover:bg-yellow-400/20 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                <a href="https://www.youtube.com/@queenofdelhiofficial" target="_blank" rel="noopener noreferrer">
                Watch Showreel
                </a>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section 
        ref={missionRef}
        variants={fadeInUpVariant}
        initial="hidden"
        animate={missionControls}
        className="py-16 bg-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
          <h2 className="text-4xl font-bold mt-2 mb-8">Cultivating Tomorrow's Fashion Icons</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              At Queen of Delhi, we believe that exceptional models are created through a combination of professional training, personal development, and real-world experience. Our mission is to discover raw talent and transform them into confident, skilled professionals who can thrive in the competitive world of fashion and modeling.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are dedicated to creating a supportive and inclusive environment where diverse beauty is celebrated, and each individual's unique qualities are highlighted. Through our comprehensive training programs and prestigious events, we provide platforms for models to showcase their abilities and connect with industry leaders.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-4xl font-bold mt-2">The Journey of Excellence</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <motion.div 
              ref={storyLeftRef}
              variants={fadeInLeftVariant}
              initial="hidden"
              animate={storyLeftControls}
              className="w-full lg:w-1/2"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Fashion Show Moment" 
                className="w-full h-auto rounded-lg shadow-2xl border border-yellow-900/30"
              />
            </motion.div>
            <motion.div 
              ref={storyRightRef}
              variants={fadeInRightVariant}
              initial="hidden"
              animate={storyRightControls}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">From Humble Beginnings</h3>
              <p className="text-gray-300 mb-4">
                Founded in 2010 by Arjun Malhotra, Queen of Delhi began as a small local modeling competition with just 20 participants. What set us apart from the beginning was our focus on holistic development, not just physical appearance.
              </p>
              <p className="text-gray-300 mb-4">
                Over the years, we've grown into Delhi's premier modeling institute and event, known for discovering some of India's top modeling talent. Our alumni grace the covers of leading magazines and walk the runways of international fashion weeks.
              </p>
              <p className="text-gray-300">
                Today, Queen of Delhi represents the gold standard of modeling excellence in India, with our annual competition drawing participants from across the country and attention from global fashion houses seeking fresh talent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={statsControls}
        className="py-16 bg-gradient-to-r from-yellow-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariant}
                className="p-6"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.figure}</h3>
                <p className="text-yellow-200 text-lg">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        ref={testimonialsRef}
        variants={fadeInUpVariant}
        initial="hidden"
        animate={testimonialsControls}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">What Our Community Says</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our alumni, partners, and contestants about their experiences with Queen of Delhi.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariant}
                className="bg-gray-900 rounded-lg p-6 shadow-lg border-t border-yellow-700/30 hover:shadow-yellow-500/20 transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-yellow-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section 
        ref={teamRef}
        variants={staggerChildrenVariant}
        initial="hidden"
        animate={teamControls}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">The Experts Behind Our Success</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the passionate professionals who make Queen of Delhi the premier modeling event it is today.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div 
                key={member.id}
                variants={itemVariant}
                className="text-center"
              >
                <div className="relative mb-6 mx-auto w-64 h-64 rounded-full overflow-hidden group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                    <div className="flex justify-center space-x-3 text-white">
                      <a href="#" className="hover:text-yellow-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                      </a>
                      <a href="#" className="hover:text-yellow-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-yellow-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partners & Sponsors */}
      <motion.section 
        ref={partnersRef}
        variants={fadeInUpVariant}
        initial="hidden"
        animate={partnersControls}
        className="py-16 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="text-4xl font-bold mt-2">Trusted By The Best</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div 
                key={item}
                variants={itemVariant}
                className="flex items-center justify-center py-4"
              >
                <img 
                  src={`/api/placeholder/150/80`} 
                  alt={`Partner ${item}`} 
                  className="max-h-12 opacity-70 hover:opacity-100 transition duration-300 filter saturate-0 hover:saturate-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Modeling Journey?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our next training batch or register for the upcoming Queen of Delhi competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold py-3 px-8 rounded-full transition duration-300">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe-WVm4v_YdYMgKCof8aW6QphSzxD8xV0gmMFDPoFUq8LKRLA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              Register Now
              </a>
            </button>
            <button className="border-2 border-yellow-400 text-white hover:bg-yellow-500/10 font-semibold py-3 px-8 rounded-full transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;