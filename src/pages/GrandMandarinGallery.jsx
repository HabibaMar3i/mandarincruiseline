import { useState, useCallback } from 'react';

export default function GrandMandarinGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    
    const images = [
        "/GrandMandarin/01.webp",
        "/GrandMandarin/02.webp",
        "/GrandMandarin/03.webp",
        "/GrandMandarin/04.webp",
        "/GrandMandarin/05.webp",
        "/GrandMandarin/06.webp",
        "/GrandMandarin/07.webp",
        "/GrandMandarin/08.webp",
        "/GrandMandarin/09.webp",
        "/GrandMandarin/10.webp",
        "/GrandMandarin/11.webp",
        "/GrandMandarin/12.webp",
        "/GrandMandarin/13.webp",
        "/GrandMandarin/14.webp",
        "/GrandMandarin/15.webp",
        "/GrandMandarin/16.webp",
        "/GrandMandarin/17.webp",
        "/GrandMandarin/18.webp"
    ];

    const nextImage = useCallback(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const goToImage = useCallback((index) => {
        setCurrentImage(index);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <img 
                    src="/GrandMandarin/01.webp" 
                    alt="Grand Mandarin Gallery" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-georgia leading-tight" data-aos="fade-up">
                            Grand Mandarin Gallery
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-hero" data-aos="fade-up" data-aos-delay="200">
                            5-Star Superior Deluxe Floating Hotel
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Carousel */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                            <img 
                                src={images[currentImage]} 
                                alt={`Grand Mandarin ${currentImage + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            
                            {/* Navigation Arrows */}
                            <button 
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
                                aria-label="Previous image"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button 
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all"
                                aria-label="Next image"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                            
                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {currentImage + 1} / {images.length}
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="mt-6 grid grid-cols-4 md:grid-cols-9 gap-2 max-h-32 overflow-y-auto">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all ${
                                        index === currentImage 
                                            ? 'ring-4 ring-[#a1978a] opacity-100' 
                                            : 'opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    <img 
                                        src={image} 
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/GrandMandarin/10.webp" 
                    alt="Grand Mandarin" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Experience Grand Mandarin
                    </h2>
                    <p className="text-xl md:text-2xl font-hero text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Book your superior deluxe Nile cruise experience
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a href="/grand-mandarin" className="bg-[#a1978a] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
                            Learn More
                        </a>
                        <a href="mailto:info@mandarincruiseline.com" className="bg-white text-[#a1978a] px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:shadow-lg transition-all duration-300 inline-block">
                            Book Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}