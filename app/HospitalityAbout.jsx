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
  FaCheckCircle,
  FaCode,
  FaRobot,
  FaCloud,
  FaMobileAlt
} from "react-icons/fa";

const SoftwareAbout = () => {
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

  // Software company stats
  const stats = [
    { number: 200, suffix: '+', label: 'Clients Worldwide', icon: FaUsers },
    { number: 10, suffix: '+', label: 'Years of Innovation', icon: FaAward },
    { number: 40, suffix: '+', label: 'Expert Engineers', icon: FaCode },
    { number: 4.9, suffix: '/5', label: 'Client Rating', icon: FaStar }
  ];

  // Software company features
  const features = [
    'Custom Web & Mobile App Development',
    'AI & Data Engineering Solutions',
    'Cloud & DevOps Expertise',
    'End-to-End Project Delivery'
  ];

  return (
    <>
      <style jsx>{`
        /* Animations and styles (same as before, palette unchanged) */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px #00FF85; }
          50% { box-shadow: 0 0 40px #1E90FF, 0 0 60px #00FF85; }
        }
        @keyframes countUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in-left {
          opacity: 0;
          animation: fadeInLeft 1s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 1s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .animate-scale-in {
          opacity: 0;
          animation: scaleIn 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }
        .image-container {
          position: relative;
          transition: all 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
          transform: translateY(0);
        }
        .image-container:hover {
          transform: translateY(-15px) scale(1.02);
        }
        .image-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(0,255,133,0.08), rgba(30,144,255,0.08));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .image-container:hover::before {
          opacity: 1;
        }
        .gradient-border {
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          padding: 4px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }
        .gradient-border-inner {
          background: #0D0D0D;
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
          background: rgba(0,255,133,0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.2);
        }
        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: #FF0099;
          animation: pulse 2s ease-in-out infinite;
        }
        .text-glow {
          text-shadow: 0 0 30px #1E90FF;
        }
        .floating-element {
          animation: float 4s ease-in-out infinite;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid #00FF85;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, #1E90FF44, transparent);
          transition: left 0.6s ease;
        }
        .stat-card:hover::before {
          left: 100%;
        }
        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #FF0099;
          box-shadow: 0 20px 40px #1E90FF44;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          animation: ${activeStats ? 'countUp 1s ease-out' : 'none'};
        }
        .cta-button {
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          color: #0D0D0D;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px #00FF8544;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, #FFFFFF55, transparent);
          transition: left 0.6s ease;
        }
        .cta-button:hover::before {
          left: 100%;
        }
        .cta-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 40px #FF009944;
          animation: glow 2s ease-in-out infinite;
          border-color: #FF0099;
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
          background: #1E90FF22;
          transform: translateX(10px);
          padding-left: 1rem;
          color: #FF0099;
        }
        .quote-section {
          background: #1E90FF11;
          border-left: 4px solid #00FF85;
          padding: 2rem;
          border-radius: 0 16px 16px 0;
          margin: 2rem 0;
          position: relative;
          backdrop-filter: blur(10px);
        }
        .quote-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, #00FF8511, #1E90FF11);
          border-radius: 0 16px 16px 0;
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            #FFFFFF22,
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .backdrop-blur {
          backdrop-filter: blur(20px);
        }
        @media (max-width: 768px) {
          .stat-number { font-size: 2rem; }
          .play-button { width: 60px; height: 60px; }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-20 px-4 md:px-12"
        style={{
          background: "#0D0D0D",
          color: "#FFFFFF",
          minHeight: "80vh"
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl floating-element" style={{ background: "linear-gradient(135deg, #00FF8522, #1E90FF22)" }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl floating-element" style={{ background: "linear-gradient(135deg, #1E90FF22, #00FF8522)", animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl floating-element" style={{ background: "linear-gradient(135deg, #00FF8511, #1E90FF11)", animationDelay: '0.8s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Image/Video Section */}
            <div 
              id="about-image"
              data-animate
              className={`${visibleElements.has('about-image') ? 'animate-fade-in-left' : ''}`}
            >
              <div className="image-container">
                <div className="gradient-border">
                  <div className="gradient-border-inner">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                      alt="Web Doctor Labs Team at Work"
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

            {/* Content Section */}
            <div className="space-y-8">
              {/* Title */}
              <div
                id="about-title"
                data-animate
                className={`${visibleElements.has('about-title') ? 'animate-fade-in-right stagger-1' : ''}`}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">
                  <span style={{ color: "#00FF85" }}>Innovative</span>
                  <br />
                  <span style={{ color: "#1E90FF" }}>Software Solutions</span>
                </h2>
                <div className="w-24 h-1 rounded-full mb-6" style={{ background: "linear-gradient(90deg, #00FF85, #1E90FF)" }}></div>
              </div>

              {/* Description */}
              <div
                id="about-description"
                data-animate
                className={`${visibleElements.has('about-description') ? 'animate-fade-in-right stagger-2' : ''}`}
              >
                <p className="text-lg leading-relaxed mb-6" style={{ color: "#FFFFFF", opacity: 0.9 }}>
                  At <span style={{ color: "#00FF85", fontWeight: "600" }}>Web Doctor Labs</span>, we empower businesses to thrive in the digital era. Our passionate team crafts scalable, secure, and intelligent software that solves real-world challenges and accelerates your growth.
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
                      <FaCheckCircle style={{ color: "#00FF85" }} className="flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            id="stats-section"
            data-animate
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in-up ${visibleElements.has('stats-section') ? 'animate-fade-in-up' : ''}`}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <stat.icon style={{ color: "#1E90FF", fontSize: "2rem", marginBottom: "0.5rem" }} />
                <div className="stat-number">
                  {stat.number}{stat.suffix}
                </div>
                <div style={{ color: "#FFFFFF", opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quote/CTA Section */}
          <div className="quote-section mt-20 relative z-10">
            <div className="flex items-center mb-4">
              <FaQuoteLeft style={{ color: "#00FF85", fontSize: "2rem", marginRight: "0.5rem" }} />
              <span className="text-xl font-semibold" style={{ color: "#1E90FF" }}>
                "Web Doctor Labs delivered beyond our expectations. Their expertise and commitment to excellence made our project a true success."
              </span>
            </div>
            <div style={{ color: "#FFFFFF", opacity: 0.7 }}>— Satisfied Client, Tech Startup</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareAbout;
