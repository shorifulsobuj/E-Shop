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

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/* Component: Slider */}
      <div className="relative w-full glide-05">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="p-4">
              <img
                src="https://img.lazcdn.com/us/lazada_mars_image/10706b81c418312139ba30f7db428887.jpg_2200x2200q80.jpg_.webp"
                className="w-full max-w-full max-h-full m-auto rounded-xl shadow-lg"
                alt="Slide 1"
              />
            </li>
            <li className="p-4">
              <img
                src="https://img.lazcdn.com/us/lazada_mars_image/5bf0e6b62cf1311359b1306e6ab4fe16.jpg_2200x2200q80.jpg_.webp"
                className="w-full max-w-full max-h-full m-auto rounded-xl shadow-lg"
                alt="Slide 2"
              />
            </li>
            <li className="p-4">
              <img
                src="https://img.lazcdn.com/us/lazada_mars_image/b459cee551eaaeeffd7a8d7da81f9a09.jpg_2200x2200q80.jpg_.webp"
                className="w-full max-w-full max-h-full m-auto rounded-xl shadow-lg"
                alt="Slide 3"
              />
            </li>
            <li className="p-4">
              <img
                src="https://img.lazcdn.com/us/lazada_mars_image/92081e12e1f1804db61917fba9bcbc77.png_2200x2200q80.png_.webp"
                className="w-full max-w-full max-h-full m-auto rounded-xl shadow-lg"
                alt="Slide 4"
              />
            </li>
            <li className="p-4">
              <img
                src="https://img.lazcdn.com/us/lazada_mars_image/faa58c3ed09e750c9dfd3b23d2c0ccfa.jpg_2200x2200q80.jpg_.webp"
                className="w-full max-w-full max-h-full m-auto rounded-xl shadow-lg"
                alt="Slide 5"
              />
            </li>
          </ul>
        </div>
        {/* Indicators */}
        <div
          className="hidden flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="Go to slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="Go to slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="Go to slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="Go to slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=4"
            aria-label="Go to slide 5"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/* End Slider */}
    </>
  );
}
