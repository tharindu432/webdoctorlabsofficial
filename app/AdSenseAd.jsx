"use client";
import React, { useEffect } from 'react';

const AdSenseAd = ({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  style = {},
  className = ""
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          ...style
        }}
        data-ad-client="ca-pub-4426581172266577"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdSenseAd;
