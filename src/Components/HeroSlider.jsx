import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/BAU/iQOO/Z10Lite/Sale/high1._CB791188499_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/May2025/HERO_BAU/TV_Knockout_deals_revised_GW_PC_3000X1200_._CB793232313_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/rohimak/vivoy400LL/D261177000_vivo_Y400_Pro_Sale_tallhero_3000x1200DT._CB791256083_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/june/bvd/hero/4_MSME_Day_3000_1200_2506._CB791574145_.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Clone first image to end for infinite effect
  const extendedImages = [...images, images[0]];

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  // Auto slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset to first slide (without animation) after reaching cloned slide
  useEffect(() => {
    if (current === images.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false); // remove transition
        setCurrent(0); // reset to real first image
      }, 700); // wait for transition to complete

      return () => clearTimeout(timer);
    }
  }, [current]);

  // Manually go previous
  const goPrev = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(images.length - 1);
    } else {
      setIsTransitioning(true);
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div
        ref={sliderRef}
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {extendedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay Text
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Our Website
        </h1>
      </div> */}

      {/* Navigation Buttons */}
      <button
        onClick={goPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10 "
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default HeroSlider;
