import { useState, useEffect } from "react";
import img1 from "../assets/slide1.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";

import content1 from "../assets/desc1.png";
import content2 from "../assets/desc2.png";
import content3 from "../assets/desc3.png";

const slides = [
  {
    image: img1,
    contentImage: content1,
  },
  {
    image: img2,
    contentImage: content2,
  },
  {
    image: img3,
    contentImage: content3,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* LEFT IMAGE (Crossfade) */}
        <div className="hero-image">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt="slide"
              className={index === current ? "slide-img active" : "slide-img"}
            />
          ))}
        </div>

        {/* RIGHT IMAGE (Crossfade) */}
        <div className="hero-content">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.contentImage}
              alt="content"
              className={
                index === current ? "content-slide active" : "content-slide"
              }
            />
          ))}
        </div>

        {/* ARROWS */}
        <button className="arrow left" onClick={prevSlide}>
          ‹
        </button>
        <button className="arrow right" onClick={nextSlide}>
          ›
        </button>

        {/* DOTS */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
