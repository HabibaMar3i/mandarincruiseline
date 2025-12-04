import { useState, useEffect } from 'react';

const HeroSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        "/GrandMandarin/04.webp",
        "/GrandMandarin/01.webp",
        "/GrandMandarin/02.webp",
        "/GrandMandarin/03.webp",
        "/GrandMandarin/06.webp",
        "/GrandMandarin/05.webp",
        "/GrandMandarin/10.webp",
        "/GrandMandarin/08.webp"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-screen overflow-hidden w-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img 
                        src={slide} 
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center text-white max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-georgia leading-tight text-[#F2ECE7]">
                        Mandarin Cruise Line
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-times text-[#EFE8E1]">
                        Five-Star Deluxe Floating Hotel Experience
                    </p>
                    <button className="mt-8 bg-[#5A5248] text-white px-8 py-3 text-lg font-semibold rounded hover:opacity-90">
                        Explore Our Fleet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSlideshow;