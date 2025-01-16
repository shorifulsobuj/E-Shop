import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function HeroSection() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 2000,
      animationDuration: 700,
      gap: 0,
    }).mount();

    // Cleanup Glide instance on component unmount
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="relative w-full glide-05">
      {/* Slides */}
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="flex relative w-full overflow-hidden p-0">
          {[
            {
              src: "https://img.lazcdn.com/us/domino/cbfb2c64-a84d-4cb5-8d11-7abffddca16b_BD-1976-688.jpg_2200x2200q80.jpg",
              alt: "Discount Offer Slide 1",
            },
            {
              src: "https://img.lazcdn.com/us/domino/880bc7c7-70bc-4421-88ec-616d19d17793_BD-1976-688.jpg_2200x2200q80.jpg",
              alt: "Discount Offer Slide 2",
            },
            {
              src: "https://img.lazcdn.com/us/domino/92f5ed25-8d9a-4a65-b985-a3e27b650893_BD-1976-688.jpg_2200x2200q80.jpg",
              alt: "Discount Offer Slide 3",
            },
            {
              src: "https://img.lazcdn.com/us/lazada_mars_image/92081e12e1f1804db61917fba9bcbc77.png_2200x2200q80.png_.webp",
              alt: "Discount Offer Slide 4",
            },
            {
              src: "https://img.lazcdn.com/us/lazada_mars_image/faa58c3ed09e750c9dfd3b23d2c0ccfa.jpg_2200x2200q80.jpg_.webp",
              alt: "Discount Offer Slide 5",
            },
          ].map((slide, index) => (
            <li key={index} className="p-4">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full sm:h-[35vh] lg:h-[55vh] max-w-full max-h-full m-auto rounded-xl shadow-lg object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Indicators */}
      <div
        className="flex items-center justify-center w-full gap-2 mt-2"
        data-glide-el="controls[nav]"
      >
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            className="p-2 group"
            data-glide-dir={`=${index}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none group-hover:bg-white"></span>
          </button>
        ))}
      </div>
    </div>
  );
}
