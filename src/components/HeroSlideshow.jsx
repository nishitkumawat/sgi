import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import rollFormingBg from '../assets/machine.jpeg';
import solarStructureImg from '../assets/solar-strucutre.jpg';
import motorImg from '../assets/motor.jpeg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    type: 'image',
    src: rollFormingBg,
    title: 'Roll Forming Machines',
    subtitle: 'Precision engineering for global infrastructure.',
    ctaText: 'Explore Machines',
    ctaLink: '/machines'
  },
  {
    type: 'image',
    src: solarStructureImg,
    title: 'Solar Structure',
    subtitle: 'State-of-the-art facilities for robust manufacturing.',
    ctaText: 'Solar Solutions',
    ctaLink: '/solar-structure'
  },
  {
    type: 'image',
    src: motorImg,
    title: 'Rolling Shutter Motors',
    subtitle: 'Driving the shutter industry with reliable automation.',
    ctaText: 'View Motors',
    ctaLink: '/motors'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000); // 10 seconds per slide
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[92vh] bg-slate-900 overflow-hidden flex items-center pt-20">
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
            
            {/* Plain overlay layer to decrease background visibility slightly */}
            <div className="absolute inset-0 bg-white/10" />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 px-2 md:px-6 flex justify-between pointer-events-none">
        <button 
          onClick={(e) => { e.preventDefault(); prevSlide(); }}
          className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/5 md:bg-white/10 backdrop-blur-md border border-white/10 md:border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all pointer-events-auto group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); nextSlide(); }}
          className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/5 md:bg-white/10 backdrop-blur-md border border-white/10 md:border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all pointer-events-auto group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-3 h-3 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-6 md:p-10 lg:p-14 border-l-4 md:border-l-8 border-blue-700 shadow-2xl animate-fadeup transition-all">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 bg-blue-600 block" />
            Heavy Machinery Manufacturing
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-4 md:mb-6 uppercase tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm md:text-lg text-slate-600 mb-4 md:mb-8 font-medium border-l-2 border-slate-300 pl-4">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to={slides[currentSlide].ctaLink} 
              className="px-4 py-2 md:px-8 md:py-4 bg-blue-700 text-white font-black hover:bg-blue-800 transition-all duration-300 hover:scale-105 rounded-full uppercase tracking-widest text-[9px] md:text-[11px] shadow-xl shadow-blue-200"
            >
              {slides[currentSlide].ctaText}
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 md:px-8 md:py-4 bg-white border-2 border-slate-200 text-slate-800 font-black hover:border-blue-700 hover:text-blue-700 transition-all duration-300 hover:scale-105 rounded-full uppercase tracking-widest text-[9px] md:text-[11px] shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-4 md:left-10 md:left-auto md:right-10 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1.5 transition-all ${
              currentSlide === index ? 'bg-blue-600' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
