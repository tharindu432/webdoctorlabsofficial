"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import HospitalityNavbar from "../HospitalityNavbar";
import HospitalityFooter from "../HospitalityFooter";
import HospitalityAbout from "../HospitalityAbout";

const HospitalityPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    // Trigger initial load animation
    setIsLoaded(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/background.jpeg')",
        backgroundColor: "#1C1C1C",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-slide-in-bottom {
          animation: slideInFromBottom 1s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .button-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(0);
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .button-hover:active {
          transform: translateY(0);
        }

        .text-glow {
          text-shadow: 0 0 20px rgba(218, 165, 32, 0.3);
        }

        .backdrop-blur {
          backdrop-filter: blur(10px);
        }

        .hero-content {
          opacity: 0;
        }

        .hero-content.loaded {
          opacity: 1;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
      `}</style>

      <HospitalityNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        {/* Animated background overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
        
        <div className="relative z-10 text-left mt-17 md:mt-20 px-4 container mx-auto max-w-6xl">
          <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
            {/* Subtitle */}
            <h2 
              className={`text-2xl mb-2 text-glow ${isLoaded ? 'animate-fade-in-up stagger-1' : ''}`}
              style={{ 
                color: "#DAA520", 
                fontFamily: "IBM Plex Serif, serif",
                opacity: 0
              }}
            >
              Ruhunugroup Hospitality – Sri Lanka
            </h2>

            {/* Main Title */}
            <h1 
              className={`text-5xl font-semibold leading-snug mb-4 ${isLoaded ? 'animate-fade-in-left stagger-2' : ''}`}
              style={{ 
                color: "#F5E8D8", 
                fontFamily: "IBM Plex Serif, serif",
                opacity: 0
              }}
            >
              Transforming Experiences with <br /> 
              <span className="text-glow">Better Hospitality</span>
            </h1>

            {/* Description */}
            <p 
              className={`mb-6 text-base ${isLoaded ? 'animate-fade-in-right stagger-3' : ''}`}
              style={{ 
                color: "#F5E8D8", 
                fontFamily: "Inter, sans-serif",
                opacity: 0
              }}
            >
              Powered by Ruhunugroup — Delivering world-class hospitality services with warmth and care.
            </p>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-scale-in stagger-4' : ''}`} style={{ opacity: 0 }}>
              <a
                href="/services"
                className="inline-flex items-center font-medium px-6 py-2 rounded-full button-hover backdrop-blur"
                style={{
                  background: "linear-gradient(135deg, #FF6F61, #FF4500)",
                  color: "#F5E8D8",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Learn More
                <span
                  className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
                  style={{ background: "#F5E8D8" }}
                >
                  <FaArrowRight style={{ color: "#FF6F61", fontSize: "0.9rem" }} />
                </span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center font-medium px-6 py-2 rounded-full button-hover backdrop-blur"
                style={{
                  background: "linear-gradient(135deg, #DAA520, #FFD700)",
                  color: "#1C1C1C",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Book an Inquiry
                <span
                  className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
                  style={{ background: "#1C1C1C" }}
                >
                  <FaArrowRight style={{ color: "#DAA520", fontSize: "0.9rem" }} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* About Section with scroll animation */}
      <div 
        id="about-section"
        data-animate
        className={`animate-on-scroll ${visibleElements.has('about-section') ? 'visible' : ''}`}
      >
        <HospitalityAbout />
      </div>

      {/* Services Cards Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div 
            id="services-title"
            data-animate
            className={`text-center mb-16 animate-on-scroll ${visibleElements.has('services-title') ? 'visible' : ''}`}
          >
            <h2 
              className="text-4xl font-bold mb-4 text-glow"
              style={{ color: "#F5E8D8", fontFamily: "IBM Plex Serif, serif" }}
            >
              Our Premium Outlets
            </h2>
            <p 
              className="text-lg"
              style={{ color: "#DAA520", fontFamily: "Inter, sans-serif" }}
            >
              Excellence in every detail
            </p>
          </div>

          {/* Sample Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Luxury Accommodation", desc: "Premium rooms with world-class amenities", delay: "0s" },
              { title: "Fine Dining", desc: "Exquisite culinary experiences", delay: "0.2s" },
              { title: "Event Management", desc: "Memorable celebrations and gatherings", delay: "0.4s" }
            ].map((service, index) => (
              <div
                key={index}
                id={`service-card-${index}`}
                data-animate
                className={`backdrop-blur rounded-xl p-6 border border-white/10 animate-on-scroll transition-all duration-500 hover:scale-105 hover:bg-white/5 ${visibleElements.has(`service-card-${index}`) ? 'visible' : ''}`}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                  animationDelay: service.delay
                }}
              >
                <div className="w-12 h-12 rounded-full mb-4 bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#F5E8D8", fontFamily: "IBM Plex Serif, serif" }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base"
                  style={{ color: "#DAA520", fontFamily: "Inter, sans-serif" }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add your hospitality-specific components here */}
      {/* <WhyAmritaHospital /> */}
      {/* <Recognition /> */}
      {/* <RoboticSurgery /> */}
      {/* <Accreditations /> */}
      {/* <Milestones /> */}
      {/* <BookInquiry /> */}

      <HospitalityFooter />
    </div>
  );
};

export default HospitalityPage;