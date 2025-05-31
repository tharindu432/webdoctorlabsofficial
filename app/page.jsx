"use client";
import React, { useEffect, useState } from "react";
import { 
  FaArrowRight, 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaMobileAlt, 
  FaRobot, 
  FaShieldAlt 
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingAbout from "./LandingAbout";

const SoftwareCompanyPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    setIsLoaded(true);

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

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        background: "#0D0D0D",
        overflow: "hidden"
      }}
    >
      <style jsx>{`
        /* Base animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        /* Animated background elements */
        .neon-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
          animation: moveBlob 20s ease-in-out infinite alternate;
          z-index: 0;
        }
        .blob-green {
          background: radial-gradient(circle, #00FF85 0%, transparent 70%);
          width: 500px; height: 500px;
          top: -150px; left: -100px;
          animation-delay: 0s;
        }
        .blob-blue {
          background: radial-gradient(circle, #1E90FF 0%, transparent 70%);
          width: 450px; height: 450px;
          bottom: -100px; right: -100px;
          animation-delay: 5s;
        }
        .blob-pink {
          background: radial-gradient(circle, #FF0099 0%, transparent 70%);
          width: 300px; height: 300px;
          top: 60%; left: 60%;
          animation-delay: 10s;
        }
        @keyframes moveBlob {
          0% { transform: scale(1) translateY(0) translateX(0) rotate(0deg);}
          33% { transform: scale(1.1) translateY(-40px) translateX(50px) rotate(5deg);}
          66% { transform: scale(0.9) translateY(30px) translateX(-40px) rotate(-5deg);}
          100% { transform: scale(1) translateY(0) translateX(0) rotate(0deg);}
        }
        
        /* Animated grid overlay */
        .animated-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.07;
          background-image: 
            linear-gradient(90deg, #00FF85 1px, transparent 1px),
            linear-gradient(180deg, #1E90FF 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 15s linear infinite;
        }
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 60px 60px, 60px 60px; }
        }
        
        /* Neon border glow */
        .neon-border {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00FF85, #1E90FF, #FF0099, #00FF85);
          filter: blur(2px);
          opacity: 0.8;
          z-index: 2;
          animation: borderGlow 8s linear infinite;
          background-size: 300% 100%;
        }
        @keyframes borderGlow {
          0% { background-position: 0% 0%; }
          100% { background-position: 300% 0%; }
        }
        
        /* Floating particles */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0.6;
          pointer-events: none;
          z-index: 1;
          animation: float 15s linear infinite;
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-800px) translateX(100px); opacity: 0; }
        }
        
        /* Digital circuit lines */
        .circuit-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #00FF85, transparent);
          height: 1px;
          width: 100px;
          opacity: 0.4;
          z-index: 1;
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        
        /* Component animations */
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-scale-in { animation: scaleIn 0.7s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.23,1,0.32,1);
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .button-hover {
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
          transform: translateY(0);
        }
        .button-hover:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 25px #FF009988;
          background: #FF0099 !important;
          color: #FFFFFF !important;
        }
        .button-hover:active {
          transform: translateY(0);
        }
        .text-glow {
          text-shadow: 0 0 20px #1E90FF88;
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        .hero-content { opacity: 0; }
        .hero-content.loaded { opacity: 1; }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        
        /* Card hover effects */
        .service-card {
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(135deg, rgba(0,255,133,0.1), rgba(30,144,255,0.1));
          transform: rotate(45deg);
          transition: all 0.6s cubic-bezier(0.23,1,0.32,1);
          z-index: -1;
        }
        .service-card:hover::before {
          top: -50%;
          left: -50%;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,255,133,0.2);
          border-color: #00FF85;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="neon-blob blob-green"></div>
      <div className="neon-blob blob-blue"></div>
      <div className="neon-blob blob-pink"></div>
      <div className="animated-grid"></div>
      <div className="neon-border"></div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00FF85' : i % 3 === 1 ? '#1E90FF' : '#FF0099',
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Circuit lines */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="circuit-line"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 150}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 4}s`
          }}
        ></div>
      ))}

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        <div className="relative z-10 text-left mt-12 md:mt-20 px-4 container mx-auto max-w-6xl">
          <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
            {/* Subtitle */}
            <h2 
              className={`text-2xl mb-2 text-glow ${isLoaded ? 'animate-fade-in-up stagger-1' : ''}`}
              style={{ 
                color: "#00FF85", 
                fontFamily: "IBM Plex Serif, serif",
                opacity: 0
              }}
            >
              Web Doctor Labs – Software Innovation
            </h2>
            {/* Main Title */}
            <h1 
              className={`text-5xl font-semibold leading-snug mb-4 ${isLoaded ? 'animate-fade-in-left stagger-2' : ''}`}
              style={{ 
                color: "#FFFFFF", 
                fontFamily: "IBM Plex Serif, serif",
                opacity: 0
              }}
            >
              Building the Future of <br /> 
              <span className="text-glow" style={{ color: "#1E90FF" }}>Digital Solutions</span>
            </h1>

            {/* Description */}
            <p 
              className={`mb-6 text-base ${isLoaded ? 'animate-fade-in-right stagger-3' : ''}`}
              style={{ 
                color: "#FFFFFF", 
                fontFamily: "Inter, sans-serif",
                opacity: 0
              }}
            >
              Empowering businesses with custom software, web, and AI-driven solutions. Trusted by startups and enterprises worldwide.
            </p>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-scale-in stagger-4' : ''}`} style={{ opacity: 0 }}>
              <a
                href="/services"
                className="inline-flex items-center font-medium px-6 py-2 rounded-full button-hover backdrop-blur"
                style={{
                  background: "linear-gradient(135deg, #00FF85, #1E90FF)",
                  color: "#0D0D0D",
                  border: "1px solid #00FF85",
                }}
              >
                Explore Services
                <span
                  className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
                  style={{ background: "#FFFFFF" }}
                >
                  <FaArrowRight style={{ color: "#00FF85", fontSize: "0.9rem" }} />
                </span>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center font-medium px-6 py-2 rounded-full button-hover backdrop-blur"
                style={{
                  background: "linear-gradient(135deg, #1E90FF, #00FF85)",
                  color: "#0D0D0D",
                  border: "1px solid #1E90FF",
                }}
              >
                Get in Touch
                <span
                  className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
                  style={{ background: "#FFFFFF" }}
                >
                  <FaArrowRight style={{ color: "#1E90FF", fontSize: "0.9rem" }} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech-themed floating elements */}
        <div className="absolute top-1/4 right-10 w-24 h-24 rounded-full animate-pulse opacity-40" 
             style={{ background: "radial-gradient(circle, #1E90FF 0%, transparent 70%)" }}></div>
        <div className="absolute bottom-1/3 left-10 w-20 h-20 rounded-full animate-pulse opacity-40" 
             style={{ background: "radial-gradient(circle, #00FF85 0%, transparent 70%)", animationDelay: '1s' }}></div>
      </section>

      {/* About Section with scroll animation */}
      <div 
        id="about-section"
        data-animate
        className={`animate-on-scroll ${visibleElements.has('about-section') ? 'visible' : ''}`}
      >
        <LandingAbout />
      </div>

      {/* Services Cards Section */}
      <section className="py-20 px-4 relative">
        {/* Additional background elements for this section */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-30"
               style={{ background: "radial-gradient(circle, #00FF85 0%, transparent 70%)" }}></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20"
               style={{ background: "radial-gradient(circle, #1E90FF 0%, transparent 70%)" }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div 
            id="services-title"
            data-animate
            className={`text-center mb-16 animate-on-scroll ${visibleElements.has('services-title') ? 'visible' : ''}`}
          >
            <h2 
              className="text-4xl font-bold mb-4 text-glow"
              style={{ color: "#FFFFFF", fontFamily: "IBM Plex Serif, serif" }}
            >
              Our Core Services
            </h2>
            <p 
              className="text-lg"
              style={{ color: "#00FF85", fontFamily: "Inter, sans-serif" }}
            >
              Software expertise, delivered with precision
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Custom Software Development", 
                desc: "Tailored solutions for web, mobile, and enterprise platforms.", 
                delay: "0s",
                icon: <FaCode style={{ color: "#00FF85" }} />
              },
              { 
                title: "AI & Data Engineering", 
                desc: "Intelligent analytics, automation, and machine learning for your business.", 
                delay: "0.2s",
                icon: <FaRobot style={{ color: "#00FF85" }} />
              },
              { 
                title: "Cloud & DevOps", 
                desc: "Scalable infrastructure, CI/CD pipelines, and cloud migration.", 
                delay: "0.4s",
                icon: <FaCloud style={{ color: "#00FF85" }} />
              },
              { 
                title: "Mobile App Development", 
                desc: "Native and cross-platform mobile applications with cutting-edge UX.", 
                delay: "0.6s",
                icon: <FaMobileAlt style={{ color: "#00FF85" }} />
              },
              { 
                title: "Database Architecture", 
                desc: "Optimized data storage, retrieval, and management systems.", 
                delay: "0.8s",
                icon: <FaDatabase style={{ color: "#00FF85" }} />
              },
              { 
                title: "Cybersecurity Solutions", 
                desc: "Protecting your digital assets with advanced security protocols.", 
                delay: "1s",
                icon: <FaShieldAlt style={{ color: "#00FF85" }} />
              }
            ].map((service, index) => (
              <div
                key={index}
                id={`service-card-${index}`}
                data-animate
                className={`service-card backdrop-blur rounded-xl p-6 border animate-on-scroll ${visibleElements.has(`service-card-${index}`) ? 'visible' : ''}`}
                style={{
                  background: "rgba(13, 13, 13, 0.7)",
                  border: "1px solid #1E90FF",
                  animationDelay: service.delay
                }}
              >
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" 
                     style={{ background: "linear-gradient(135deg, #00FF85, #1E90FF)" }}>
                  <span className="text-xl" style={{ color: "#0D0D0D" }}>
                    {service.icon}
                  </span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#FFFFFF", fontFamily: "IBM Plex Serif, serif" }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base"
                  style={{ color: "#1E90FF", fontFamily: "Inter, sans-serif" }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div 
            id="tech-title"
            data-animate
            className={`text-center mb-12 animate-on-scroll ${visibleElements.has('tech-title') ? 'visible' : ''}`}
          >
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: "#FFFFFF", fontFamily: "IBM Plex Serif, serif" }}
            >
              Technologies We Master
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ background: "linear-gradient(90deg, #00FF85, #1E90FF)" }}></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "React", "Node.js" ,"Springboot","Python", "AWS", "MySQL","MongoDB",
              "GraphQL", "Next.js", "Golang", "Flutter", "Django", "FastAPI","GitHub","GitLab", "CI/CD", "Agile", "Scrum", "Figma", "Adobe XD", "UI/UX Design",
              "Azure", "TensorFlow", "Docker", "Kubernetes","OpenAI", "Redis", "PostgreSQL", "Elasticsearch", "Tailwind CSS", "Material UI", "Bootstrap"
            ].map((tech, index) => (
              <div
                key={index}
                id={`tech-item-${index}`}
                data-animate
                className={`py-4 px-2 rounded-lg backdrop-blur animate-on-scroll ${visibleElements.has(`tech-item-${index}`) ? 'visible' : ''}`}
                style={{
                  background: "rgba(30,144,255,0.05)",
                  border: "1px solid #1E90FF",
                  animationDelay: `${0.1 * index}s`
                }}
              >
                <p style={{ color: "#FFFFFF" }}>{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            background: "linear-gradient(135deg, #00FF85 0%, #1E90FF 100%)",
          }}
        ></div>
        
        <div 
          id="cta-section"
          data-animate
          className={`container mx-auto max-w-4xl text-center relative z-10 animate-on-scroll ${visibleElements.has('cta-section') ? 'visible' : ''}`}
        >
          <h2 
            className="text-4xl font-bold mb-6 text-glow"
            style={{ color: "#FFFFFF" }}
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#00FF85" }}
          >
            Let's build something amazing together. Our team is ready to bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center font-medium px-8 py-3 rounded-full button-hover backdrop-blur text-lg"
            style={{
              background: "linear-gradient(135deg, #00FF85, #1E90FF)",
              color: "#0D0D0D",
              border: "1px solid #00FF85",
            }}
          >
            Start Your Project
            <span
              className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
              style={{ background: "#FFFFFF" }}
            >
              <FaArrowRight style={{ color: "#00FF85", fontSize: "0.9rem" }} />
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareCompanyPage;
