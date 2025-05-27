"use client";
import React, { useEffect, useState } from "react";
import { 
  FaStar, 
  FaAward, 
  FaUsers, 
  FaHeart,
  FaArrowRight,
  FaQuoteLeft,
  FaPlay,
  FaCheckCircle
} from "react-icons/fa";

const HospitalityAbout = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [activeStats, setActiveStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
            if (entry.target.id === 'stats-section') {
              setActiveStats(true);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 10000, suffix: '+', label: 'Happy Guests', icon: FaUsers },
    { number: 15, suffix: '+', label: 'Years Experience', icon: FaAward },
    { number: 50, suffix: '+', label: 'Team Members', icon: FaHeart },
    { number: 4.9, suffix: '/5', label: 'Guest Rating', icon: FaStar }
  ];

  const features = [
    'World-class amenities and facilities',
    'Personalized service for every guest',
    'Award-winning culinary experiences',
    'Sustainable hospitality practices'
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 111, 97, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 111, 97, 0.6), 0 0 60px rgba(218, 165, 32, 0.3);
          }
        }

        @keyframes countUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in-left {
          opacity: 0;
          animation: fadeInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-scale-in {
          opacity: 0;
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }

        .image-container {
          position: relative;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(0);
        }

        .image-container:hover {
          transform: translateY(-15px) scale(1.02);
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 111, 97, 0.1), rgba(218, 165, 32, 0.1));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .image-container:hover::before {
          opacity: 1;
        }

        .gradient-border {
          background: linear-gradient(135deg, #FF6F61, #DAA520, #FF4500);
          padding: 4px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #FF6F61, #DAA520, #FF4500);
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }

        .gradient-border-inner {
          background: #1C1C1C;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: rgba(255, 111, 97, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(255, 69, 0, 0.9);
          animation: pulse 2s ease-in-out infinite;
        }

        .text-glow {
          text-shadow: 0 0 30px rgba(255, 111, 97, 0.4);
        }

        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 111, 97, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(218, 165, 32, 0.4);
          box-shadow: 0 20px 40px rgba(255, 111, 97, 0.2);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #FF6F61, #DAA520);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          animation: ${activeStats ? 'countUp 1s ease-out' : 'none'};
        }

        .cta-button {
          background: linear-gradient(135deg, #DAA520, #FFD700);
          color: #1C1C1C;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(218, 165, 32, 0.3);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 40px rgba(255, 69, 0, 0.4);
          animation: glow 2s ease-in-out infinite;
          border-color: rgba(255, 69, 0, 0.3);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .feature-item:hover {
          background: rgba(255, 111, 97, 0.05);
          transform: translateX(10px);
          padding-left: 1rem;
        }

        .quote-section {
          background: rgba(255, 111, 97, 0.05);
          border-left: 4px solid #FF6F61;
          padding: 2rem;
          border-radius: 0 16px 16px 0;
          margin: 2rem 0;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .quote-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 111, 97, 0.03), rgba(218, 165, 32, 0.03));
          border-radius: 0 16px 16px 0;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .backdrop-blur {
          backdrop-filter: blur(20px);
        }

        @media (max-width: 768px) {
          .stat-number {
            font-size: 2rem;
          }
          
          .play-button {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-20 px-4 md:px-12"
        style={{
          background: "linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 50%, #1C1C1C 100%)",
          color: "#F5E8D8",
          minHeight: "80vh"
        }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/8 to-yellow-400/8 rounded-full blur-3xl floating-element"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-red-400/8 to-orange-400/8 rounded-full blur-3xl floating-element" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl floating-element" style={{ animationDelay: '0.8s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Enhanced Image Section */}
            <div 
              id="about-image"
              data-animate
              className={`${visibleElements.has('about-image') ? 'animate-fade-in-left' : ''}`}
            >
              <div className="image-container">
                <div className="gradient-border">
                  <div className="gradient-border-inner">
                    <img
                      src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Luxury Hotel Hospitality"
                      className="w-full h-96 object-cover relative z-2"
                    />
                    {/* Play button overlay */}
                    <div className="play-button">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-8">
              {/* Title */}
              <div
                id="about-title"
                data-animate
                className={`${visibleElements.has('about-title') ? 'animate-fade-in-right stagger-1' : ''}`}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">
                  <span style={{ color: "#FF6F61" }}>Exceptional</span>
                  <br />
                  <span style={{ color: "#DAA520" }}>Hospitality</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mb-6"></div>
              </div>

              {/* Description */}
              <div
                id="about-description"
                data-animate
                className={`${visibleElements.has('about-description') ? 'animate-fade-in-right stagger-2' : ''}`}
              >
                <p className="text-lg leading-relaxed mb-6" style={{ color: "#F5E8D8", opacity: 0.9 }}>
                  At <span style={{ color: "#DAA520", fontWeight: "600" }}>Ruhunugroup Hospitality</span>, 
                  we craft unforgettable experiences that blend authentic Sri Lankan warmth with world-class luxury. 
                  Our commitment to excellence transforms every stay into a cherished memory.
                </p>
              </div>

              {/* Features List */}
              <div
                id="about-features"
                data-animate
                className={`${visibleElements.has('about-features') ? 'animate-fade-in-right stagger-3' : ''}`}
              >
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaCheckCircle style={{ color: "#DAA520" }} className="flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Section */}
              <div
                id="about-quote"
                data-animate
                className={`quote-section ${visibleElements.has('about-quote') ? 'animate-fade-in-right stagger-4' : ''}`}
              >
                <FaQuoteLeft style={{ color: "#FF6F61", fontSize: "2rem" }} className="mb-4" />
                <p className="text-lg italic mb-4" style={{ color: "#F5E8D8" }}>
                  "Every guest is not just a visitor, but a part of our extended family. 
                  We believe in creating moments that last a lifetime."
                </p>
                <p className="text-sm font-semibold" style={{ color: "#DAA520" }}>
                  - Ruhunugroup Hospitality Team
                </p>
              </div>

              {/* CTA Button */}
              <div
                id="about-cta"
                data-animate
                className={`${visibleElements.has('about-cta') ? 'animate-fade-in-right stagger-5' : ''}`}
              >
                <a href="/team" className="cta-button">
                  <span>Discover Our Story</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div
            id="stats-section"
            data-animate
            className={`${visibleElements.has('stats-section') ? 'animate-fade-in-up' : ''}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card stagger-${index + 1}`}>
                  <div className="relative z-10">
                    <stat.icon style={{ color: "#FF6F61", fontSize: "2rem" }} className="mx-auto mb-4" />
                    <div className="stat-number">
                      {stat.number}{stat.suffix}
                    </div>
                    <p className="text-sm font-medium" style={{ color: "#DAA520" }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shimmer Overlay */}
        <div className="absolute inset-0 shimmer-effect opacity-5 pointer-events-none"></div>
      </section>
    </>
  );
};

export default HospitalityAbout;