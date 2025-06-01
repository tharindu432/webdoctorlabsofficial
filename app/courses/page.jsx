"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaReact, FaNodeJs, FaCloud, FaLock, FaRobot, FaDatabase } from "react-icons/fa";

const courses = [
  {
    title: "Frontend Bootcamp",
    desc: "Master React, TypeScript, and modern UI/UX design patterns.",
    icon: <FaReact style={{ color: "#00FF85", fontSize: "2rem" }} />,
    level: "Beginner to Advanced"
  },
  {
    title: "Backend Engineering",
    desc: "Build scalable APIs with Node.js, Express, and databases.",
    icon: <FaNodeJs style={{ color: "#1E90FF", fontSize: "2rem" }} />,
    level: "Intermediate"
  },
  {
    title: "Cloud & DevOps",
    desc: "Learn AWS, Docker, CI/CD, and deployment best practices.",
    icon: <FaCloud style={{ color: "#00FF85", fontSize: "2rem" }} />,
    level: "All Levels"
  },
  {
    title: "Cybersecurity Essentials",
    desc: "Protect applications and infrastructure with modern security practices.",
    icon: <FaLock style={{ color: "#FF0099", fontSize: "2rem" }} />,
    level: "Beginner"
  },
  {
    title: "AI & Machine Learning",
    desc: "Hands-on projects in Python, ML algorithms, and real-world AI.",
    icon: <FaRobot style={{ color: "#1E90FF", fontSize: "2rem" }} />,
    level: "Intermediate to Advanced"
  },
  {
    title: "Database Systems",
    desc: "Design, query, and optimize SQL/NoSQL databases.",
    icon: <FaDatabase style={{ color: "#00FF85", fontSize: "2rem" }} />,
    level: "All Levels"
  }
];

const CoursesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      background: "#0D0D0D",
      overflow: "hidden"
    }}>
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

      {/* Animated Background */}
      <div className="neon-blob blob-green"></div>
      <div className="neon-blob blob-blue"></div>
      <div className="neon-blob blob-pink"></div>
      <div className="animated-grid"></div>
      <div className="neon-border"></div>
      {[...Array(20)].map((_, i) => (
        <div key={i} className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00FF85' : i % 3 === 1 ? '#1E90FF' : '#FF0099',
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`
          }} />
      ))}
      {[...Array(8)].map((_, i) => (
        <div key={i} className="circuit-line"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 150}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 4}s`
          }} />
      ))}

      <Navbar />

      <section className="relative min-h-[100vh] flex flex-col items-center justify-center py-24 px-4">
        <div className="relative z-10 container mx-auto max-w-5xl text-center">
          <h2 className={`text-4xl font-bold mb-8 text-glow ${isLoaded ? 'animate-fade-in-up stagger-1' : ''}`}
              style={{ color: "#00FF85", fontFamily: "IBM Plex Serif, serif", opacity: 0 }}>
            Web Doctor Labs Courses
          </h2>
          <p className={`text-lg mb-12 ${isLoaded ? 'animate-fade-in-left stagger-2' : ''}`}
             style={{ color: "#FFFFFF", fontFamily: "Inter, sans-serif", opacity: 0 }}>
            Level up your tech skills with our expert-led, hands-on courses.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <div key={i}
                   className={`service-card bg-[#181818] border border-[#1E90FF33] rounded-2xl p-8 flex flex-col items-center text-center animate-fade-in-up`}
                   style={{ animationDelay: `${0.1 * i}s`, opacity: 0 }}>
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#00FF85" }}>{course.title}</h3>
                <div className="text-xs mb-2" style={{ color: "#1E90FF" }}>{course.level}</div>
                <p className="text-base mb-4" style={{ color: "#FFFFFF" }}>{course.desc}</p>
                <a href="/contact"
                   className="inline-block px-5 py-2 rounded-full text-sm font-medium button-hover backdrop-blur"
                   style={{
                     background: "linear-gradient(135deg, #1E90FF, #00FF85)",
                     color: "#0D0D0D",
                     border: "1px solid #1E90FF"
                   }}>
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoursesPage;
