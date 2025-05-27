"use client";
import React, { useEffect, useState } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaUtensils, 
  FaBed, 
  FaCalendarAlt, 
  FaImages, 
  FaPhone,
  FaStar,
  FaChevronDown,
  FaMapMarkerAlt
} from "react-icons/fa";

const HospitalityNavbar = () => {
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
    { name: 'Home', icon: FaHome, href: '#' },
    { 
      name: 'About', 
      icon: FaInfoCircle, 
      href: '#',
      dropdown: ['Our Story', 'Mission & Vision', 'Team', 'Awards']
    },
    { 
      name: 'Services', 
      icon: FaUtensils, 
      href: '#',
      dropdown: ['Dining', 'Catering', 'Event Planning', 'Room Service']
    },
    { 
      name: 'Accommodations', 
      icon: FaBed, 
      href: '#',
      dropdown: ['Luxury Suites', 'Standard Rooms', 'Family Rooms', 'Amenities']
    },
    { name: 'Events', icon: FaCalendarAlt, href: '#' },
    { name: 'Gallery', icon: FaImages, href: '#' },
    { name: 'Contact', icon: FaPhone, href: '#' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 111, 97, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 111, 97, 0.8), 0 0 30px rgba(218, 165, 32, 0.3);
          }
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
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 111, 97, 0.1), rgba(218, 165, 32, 0.1));
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover::before {
          opacity: 1;
        }

        .nav-item:hover {
          transform: translateY(-2px);
          color: #FF4500;
        }

        .nav-link {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF6F61, #DAA520);
          transition: width 0.3s ease;
        }

        .nav-item:hover .nav-link::after {
          width: 100%;
        }

        .logo {
          background: linear-gradient(135deg, #FF6F61, #DAA520);
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
          background: rgba(28, 28, 28, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 111, 97, 0.2);
          border-radius: 12px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 50;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
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
        }

        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(255, 111, 97, 0.1), rgba(218, 165, 32, 0.1));
          transform: translateX(5px);
          color: #FF4500;
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF6F61, #DAA520);
          transition: width 0.1s ease;
          border-radius: 0 3px 0 0;
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

        .floating-element {
          animation: float 3s ease-in-out infinite;
        }

        .cta-button {
          background: linear-gradient(135deg, #FF6F61, #FF4500);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 69, 0, 0.4);
          animation: glow 2s ease-in-out infinite;
        }

        .backdrop-blur {
          backdrop-filter: blur(20px);
        }

        .mobile-menu-item {
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 0.25rem 0;
        }

        .mobile-menu-item:hover {
          background: linear-gradient(135deg, rgba(255, 111, 97, 0.1), rgba(218, 165, 32, 0.1));
          transform: translateX(10px);
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
          ? 'rgba(28, 28, 28, 0.95)' 
          : 'linear-gradient(135deg, rgba(28, 28, 28, 0.9) 0%, rgba(42, 42, 42, 0.9) 100%)',
        borderBottom: isScrolled ? '1px solid rgba(255, 111, 97, 0.2)' : 'none'
      }}>
        
        {/* Progress Bar */}
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-400/5 to-yellow-400/5 rounded-full blur-2xl floating-element"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-red-400/5 to-orange-400/5 rounded-full blur-2xl floating-element" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                <FaStar className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl logo">
                  Ruhunugroup
                </h1>
                <p className="text-xs opacity-70" style={{ color: '#DAA520' }}>
                  Hospitality Excellence
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="nav-item relative"
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href={item.href} className="nav-link" style={{ color: '#F5E8D8' }}>
                    <item.icon className="text-sm" />
                    <span>{item.name}</span>
                    {item.dropdown && <FaChevronDown className="text-xs ml-1" />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href="#"
                          className="dropdown-item block text-sm"
                          style={{ color: '#F5E8D8' }}
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
              <button className="hidden md:flex items-center space-x-2 px-6 py-2 rounded-full cta-button text-white font-medium">
                <FaMapMarkerAlt className="text-sm" />
                <span>Book Now</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-orange-400/10"
                style={{ color: '#FF6F61' }}
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
                 background: 'rgba(28, 28, 28, 0.98)', 
                 borderColor: 'rgba(255, 111, 97, 0.2)' 
               }}>
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="mobile-menu-item flex items-center space-x-3 px-4 py-3"
                      style={{ color: '#F5E8D8' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="text-lg" style={{ color: '#DAA520' }} />
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && <FaChevronDown className="text-xs ml-auto" />}
                    </a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-12 space-y-1">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href="#"
                            className="block py-2 px-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
                            style={{ color: '#F5E8D8' }}
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
                <div className="pt-4 border-t" style={{ borderColor: 'rgba(255, 111, 97, 0.2)' }}>
                  <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-full cta-button text-white font-medium">
                    <FaMapMarkerAlt />
                    <span>Book Your Stay Now</span>
                  </button>
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

export default HospitalityNavbar;