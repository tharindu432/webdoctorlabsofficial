"use client";
import React, { useEffect, useState } from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaStar,
  FaWhatsapp
} from "react-icons/fa";

const SoftwareFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('software-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    // Scroll progress for back to top
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-left { opacity: 0; animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fade-in-right { opacity: 0; animation: fadeInRight 0.8s ease-out forwards; }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }
        .social-icon {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(0);
          background: linear-gradient(135deg, #1E90FF22, #00FF8522);
          border: 1px solid #1E90FF44;
        }
        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px #FF009940;
          background: #FF0099;
        }
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 5px 0;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, #00FF85, #1E90FF);
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-link:hover {
          color: #FF0099 !important;
          transform: translateX(5px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, #FFFFFF22, transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 20px #1E90FF44;
        }
        .back-to-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 30px #FF009944;
          background: #FF0099;
        }
        .progress-ring {
          transform: rotate(-90deg);
        }
        .progress-ring-circle {
          stroke: #00FF85;
          stroke-width: 3;
          fill: transparent;
          r: 25;
          cx: 30;
          cy: 30;
          stroke-dasharray: 157;
          stroke-dashoffset: ${157 - (scrollProgress * 157)};
          transition: stroke-dashoffset 0.1s ease;
        }
        .contact-item {
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 8px;
        }
        .contact-item:hover {
          background: #00FF8511;
          transform: translateX(10px);
        }
        .newsletter-input {
          background: #1E90FF11;
          border: 1px solid #00FF8533;
          color: #FFFFFF;
          transition: all 0.3s ease;
        }
        .newsletter-input:focus {
          background: #1E90FF22;
          border-color: #00FF85;
          box-shadow: 0 0 0 3px #00FF8522;
          outline: none;
        }
        .newsletter-input::placeholder {
          color: #FFFFFF99;
        }
        .subscribe-btn {
          background: linear-gradient(135deg, #00FF85, #1E90FF);
          transition: all 0.3s ease;
          color: #0D0D0D;
        }
        .subscribe-btn:hover {
          background: #FF0099;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px #FF009944;
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        .floating-element {
          animation: float 3s ease-in-out infinite;
        }
        .pulse-element {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <footer 
        id="software-footer"
        className="relative overflow-hidden"
        style={{ 
          background: "#0D0D0D",
          color: "#FFFFFF"
        }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl floating-element" style={{ background: "linear-gradient(135deg, #00FF8511, #1E90FF11)" }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl floating-element" style={{ background: "linear-gradient(135deg, #1E90FF11, #00FF8511)", animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pulse-element" style={{ background: "linear-gradient(135deg, #00FF8511, #1E90FF11)" }}></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left stagger-1' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Web Doctor Labs
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#FFFFFF", opacity: 0.9 }}>
                  Empowering businesses with innovative software solutions. We build, automate, and elevate your digital presence.
                </p>
                <div className="flex items-center space-x-2 text-sm" style={{ color: "#00FF85" }}>
                  <FaStar className="text-[#00FF85]" />
                  <span>Rated 4.9/5 by our clients</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: "#1E90FF" }}>
                  Connect With Us
                </h4>
                <div className="flex space-x-4">
                  {[
                    // { icon: FaFacebookF, color: "#1E90FF" },
                    { icon: FaLinkedinIn, color: "#1E90FF",link:"https://www.linkedin.com/company/webdoctorlabs/" },
                    { icon: FaInstagram, color: "#FF0099",link:"https://www.instagram.com/webdoctorlabs?igsh=MWZrY243cmpmY3g2cQ==" },
                    // { icon: FaTwitter, color: "#00FF85" },
                    
                    // { icon: FaYoutube, color: "#FF0099" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      className="w-12 h-12 rounded-full backdrop-blur social-icon flex items-center justify-center"
                    >
                      <social.icon style={{ color: social.color, fontSize: "1.1rem" }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up stagger-2' : ''}`}>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#1E90FF" }}>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Careers", href: "/careers" },
                  { name: "Courses", href: "courses" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block footer-link text-base"
                    style={{ color: "#FFFFFF" }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up stagger-3' : ''}`}>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#1E90FF" }}>
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="contact-item flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: "#00FF85" }} />
                  <div>
                    <p className="text-sm font-medium">Head Office</p>
                    <p className="text-sm opacity-90">Colombo 04, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="contact-item flex items-center space-x-3">
                  <FaPhone className="flex-shrink-0" style={{ color: "#00FF85" }} />
                  <div>
                    <a href="tel:+94764492334" className="text-sm">
                    <p className="text-sm">+94 76 449 2334 (Hotline)</p>
                    </a>
                  </div>
                </div>

                <div className="contact-item flex items-center space-x-3">
                  <FaWhatsapp className="flex-shrink-0" style={{ color: "#00FF85" }} />
                  <div>
                    <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">
                    <p className="text-sm">+94 72 106 8722 (Whatsapp)</p>
                    </a>
                  </div>
                </div>
                
                <div className="contact-item flex items-center space-x-3">
                  <FaEnvelope className="flex-shrink-0" style={{ color: "#00FF85" }} />
                  <div>
                    <a href="mailto:info@webdoctorlabs.com">
                    <p className="text-sm">info@webdoctorlabs.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right stagger-4' : ''}`}>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#1E90FF" }}>
                Stay Updated
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Subscribe to our newsletter for tech insights, product updates, and exclusive offers.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full newsletter-input backdrop-blur"
                />
                <button className="w-full px-4 py-3 rounded-full subscribe-btn font-medium">
                  Subscribe Now
                </button>
              </div>

              {/* Awards/Certifications */}
              {/* <div className="pt-4">
                <p className="text-xs opacity-70 mb-2">Certified by:</p>
                <div className="flex space-x-2">
                  <div className="w-12 h-8 bg-[#00FF8511] rounded border border-[#00FF8533] flex items-center justify-center">
                    <span className="text-xs font-bold" style={{ color: "#00FF85" }}>ISO</span>
                  </div>
                  <div className="w-12 h-8 bg-[#1E90FF11] rounded border border-[#1E90FF33] flex items-center justify-center">
                    <FaStar style={{ color: "#1E90FF", fontSize: "0.8rem" }} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`relative z-10 border-t backdrop-blur ${isVisible ? 'animate-fade-in-up stagger-5' : ''}`}
          style={{ borderColor: "#1E90FF33" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-sm opacity-80">
                  © 2025 Web Doctor Labs. All rights reserved.
                </p>
                <div className="hidden md:flex items-center space-x-1 text-sm">
                  <span>Made with</span>
                  <FaHeart className="text-[#FF0099] pulse-element" style={{ fontSize: "0.8rem" }} />
                  <span>by passionate developers</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-sm footer-link" style={{ color: "#FFFFFF" }}>Privacy Policy</a>
                <a href="#" className="text-sm footer-link" style={{ color: "#FFFFFF" }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div 
          className="back-to-top"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <svg className="progress-ring absolute" width="60" height="60">
            <circle
              className="progress-ring-circle"
              stroke="#00FF85"
              strokeWidth="3"
              fill="transparent"
              r="25"
              cx="30"
              cy="30"
            />
          </svg>
          <FaArrowUp style={{ color: "#0D0D0D", position: "relative", zIndex: 2, fontSize: "1.5rem" }} />
        </div>
      </footer>
    </>
  );
};

export default SoftwareFooter;
