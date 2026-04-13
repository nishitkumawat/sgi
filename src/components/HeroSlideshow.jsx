import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rollFormingBg from '../assets/roll-forming-machines.jpg';
import { FlipButton } from './ui/flip-button';

const slides = [
  {
    type: 'image',
    src: rollFormingBg,
    title: 'Roll Forming Machines',
    subtitle: 'Precision engineering for global infrastructure.',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1565439389-f2c90c52bb88?q=80&w=2000&auto=format&fit=crop',
    title: 'Solar Structure',
    subtitle: 'State-of-the-art facilities for robust manufacturing.',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1580983568864-7585ab11aadc?q=80&w=2000&auto=format&fit=crop',
    title: 'Rolling Shutter Motors',
    subtitle: 'Driving the shutter industry with reliable automation.',
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 second per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-slate-900 overflow-hidden flex items-center pt-20">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Media */}
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60"
              />
            ) : (
              <div
                className="w-full h-full bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${slide.src})` }}
              />
            )}
            
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-2/3" />
            <div className="absolute inset-0 bg-white/20" /> {/* Slight overall lightening if needed, or keep dark text over white gradient */}
          </div>
        );
      })}

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-10 md:p-14 border-l-8 border-blue-700 shadow-2xl animate-fadeup">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 bg-blue-600 block" />
            Heavy Machinery Manufacturing
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 uppercase tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg text-slate-600 mb-8 font-medium border-l-2 border-slate-300 pl-4">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/products" className="px-8 py-4 bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors uppercase tracking-widest text-sm shadow-xl shadow-blue-200">
              View Catalog
            </Link>
            <Link to="/contact">
              <FlipButton text1="Contact Us" text2="Get a Quote" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-10 md:left-auto md:right-10 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-2 transition-all ${
              currentSlide === index ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
