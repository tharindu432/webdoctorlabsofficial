"use client";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaLaptopCode, 
  FaBriefcase, 
  FaUserGraduate, 
  FaBlog, 
  FaPhone,
  FaStar,
  FaChevronDown,
  FaEnvelope
} from "react-icons/fa";

const SoftwareNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: FaHome, href: '/' },
    { name: 'About', icon: FaInfoCircle, href: '/about' },
    { 
      name: 'Services', 
      icon: FaLaptopCode, 
      href: '/services',
      // dropdown: ['Web Development', 'App Development', 'UI/UX Design', 'Cloud Solutions', 'Automation']
    },
    { name: 'Careers', icon: FaBriefcase, href: '/careers' },
    { 
      name: 'Courses', 
      icon: FaUserGraduate, 
      href: '/courses',
      // dropdown: ['Frontend Bootcamp', 'Backend Bootcamp', 'DevOps', 'AI & ML', 'Cybersecurity']
    },
    { name: 'Blog', icon: FaBlog, href: '/blog' },
    // { name: 'Contact', icon: FaPhone, href: '#' }
  ];

  return (
    <>
      <style jsx>{`
        :root {
          --bg-main: #0D0D0D;
          --text-main: #FFFFFF;
          --accent-green: #00FF85;
          --accent-blue: #1E90FF;
          --hover-pink: #FF0099;
        }

        @keyframes slideInDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1);}
          50% { transform: scale(1.05);}
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-5px);}
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px var(--hover-pink, #FF0099); }
          50% { box-shadow: 0 0 20px var(--hover-pink, #FF0099), 0 0 30px var(--accent-blue, #1E90FF); }
        }
        .navbar-enter {
          animation: slideInDown 0.6s ease-out;
        }
        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
        .nav-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, var(--accent-green, #00FF85) 10%, var(--accent-blue, #1E90FF) 90%);
          opacity: 0.08;
          border-radius: 8px;
          transition: opacity 0.3s ease;
        }
        .nav-item:hover::before {
          opacity: 1;
        }
        .nav-item:hover {
          transform: translateY(-2px);
        }
        .nav-link {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-main, #FFFFFF);
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-green, #00FF85), var(--accent-blue, #1E90FF));
          transition: width 0.3s ease;
        }
        .nav-item:hover .nav-link {
          color: var(--hover-pink, #FF0099);
        }
        .nav-item:hover .nav-link::after {
          width: 100%;
        }
        .logo {
          background: linear-gradient(135deg, var(--accent-green, #00FF85), var(--accent-blue, #1E90FF));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .logo:hover {
          animation: pulse 1s ease-in-out;
        }
        .mobile-menu {
          animation: fadeInScale 0.3s ease-out;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: rgba(13, 13, 13, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid var(--accent-blue, #1E90FF);
          border-radius: 12px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 50;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-item {
          padding: 0.75rem 1rem;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 0.25rem;
          color: var(--text-main, #FFFFFF);
        }
        .dropdown-item:hover {
          background: linear-gradient(135deg, var(--accent-green, #00FF85) 10%, var(--accent-blue, #1E90FF) 90%);
          color: var(--hover-pink, #FF0099);
          transform: translateX(5px);
        }
        .progress-bar {
          position: absolute;
          bottom: 0; left: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-green, #00FF85), var(--accent-blue, #1E90FF));
          transition: width 0.1s ease;
          border-radius: 0 3px 0 0;
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .floating-element {
          animation: float 3s ease-in-out infinite;
        }
        .cta-button {
          background: linear-gradient(135deg, var(--accent-green, #00FF85), var(--accent-blue, #1E90FF));
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          color: var(--text-main, #FFFFFF);
        }
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        .cta-button:hover::before {
          left: 100%;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--hover-pink, #FF0099);
          animation: glow 2s ease-in-out infinite;
          color: var(--hover-pink, #FF0099);
        }
        .backdrop-blur {
          backdrop-filter: blur(20px);
        }
        .mobile-menu-item {
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 0.25rem 0;
          color: var(--text-main, #FFFFFF);
        }
        .mobile-menu-item:hover {
          background: linear-gradient(135deg, var(--accent-green, #00FF85) 10%, var(--accent-blue, #1E90FF) 90%);
          transform: translateX(10px);
          color: var(--hover-pink, #FF0099);
        }
        @media (max-width: 768px) {
          .nav-item {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-enter ${
        isScrolled 
          ? 'py-2 backdrop-blur shadow-2xl' 
          : 'py-4'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(13, 13, 13, 0.98)' 
          : 'linear-gradient(135deg, rgba(13, 13, 13, 0.96) 0%, rgba(30, 144, 255, 0.07) 100%)',
        borderBottom: isScrolled ? '1px solid var(--accent-blue, #1E90FF)' : 'none'
      }}>
        
        {/* Progress Bar */}
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[#00FF85]/10 to-[#1E90FF]/10 rounded-full blur-2xl floating-element"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-[#1E90FF]/10 to-[#00FF85]/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* <div className="w-15 h-15 rounded-full overflow-hidden shadow-lg">
  <img
    src="/favicon.png"  // Place your image in the /public folder
    alt="Logo"
    className="w-full h-full object-cover"
  />
</div> */}
              <div>
                <h1 className="text-xl md:text-2xl logo">
                  Web Doctor Labs
                </h1>
                <p className="text-xs opacity-70" style={{ color: '#00FF85' }}>
                  Software Innovation
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="nav-item relative"
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href={item.href} className="nav-link">
                    <item.icon className="text-sm" style={{ color: "var(--accent-green, #00FF85)" }} />
                    <span>{item.name}</span>
                    {item.dropdown && <FaChevronDown className="text-xs ml-1" style={{ color: "var(--accent-blue, #1E90FF)" }} />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href="#"
                          className="dropdown-item block text-sm"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* CTA Button - Hidden on mobile */}
              <button className="hidden md:flex items-center space-x-2 px-7 py-2 rounded-full cta-button font-medium">
                <FaPhone className="text-sm" />
                <a href='/contact'>Contact Us</a>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ color: "var(--accent-green, #00FF85)", background: "rgba(255,255,255,0.03)" }}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu backdrop-blur border-t"
               style={{ 
                 background: 'rgba(13, 13, 13, 0.98)', 
                 borderColor: 'var(--accent-blue, #1E90FF)' 
               }}>
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="mobile-menu-item flex items-center space-x-3 px-4 py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="text-lg" style={{ color: "var(--accent-blue, #1E90FF)" }} />
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && <FaChevronDown className="text-xs ml-auto" style={{ color: "var(--accent-green, #00FF85)" }} />}
                    </a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-12 space-y-1">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href="#"
                            className="block py-2 px-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
                            style={{ color: "var(--text-main, #FFFFFF)" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t" style={{ borderColor: 'var(--accent-blue, #1E90FF)' }}>
                  <a href='/contact' className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-full cta-button font-medium">
                     <FaPhone className="text-sm" />
                    <span >Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Shimmer Effect Overlay */}
        <div className="absolute inset-0 shimmer-effect opacity-5 pointer-events-none"></div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default SoftwareNavbar;
