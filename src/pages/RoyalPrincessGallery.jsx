import { useState, useCallback, useEffect } from 'react';

export default function RoyalPrincessGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    
    const images = [
        "/RoyalPrincess/Royal Princess (1).webp",
        "/RoyalPrincess/Royal Princess (2).webp", 
        "/RoyalPrincess/Royal Princess (3).webp",
        "/RoyalPrincess/Royal Princess (4).webp",
        "/RoyalPrincess/Royal Princess (5).webp",
        "/RoyalPrincess/Royal Princess (6).webp",
        "/RoyalPrincess/Royal Princess (7).webp",
        "/RoyalPrincess/Royal Princess (8).webp",
        "/RoyalPrincess/Royal Princess (9).webp",
        "/RoyalPrincess/Royal Princess (10).webp",
        "/RoyalPrincess/Royal Princess (11).webp",
        "/RoyalPrincess/Royal Princess (12).webp",
        "/RoyalPrincess/Royal Princess (13).webp",
        "/RoyalPrincess/Royal Princess (14).webp"
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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (1).webp" 
                    alt="Royal Princess Gallery" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-georgia leading-tight" data-aos="fade-up">
                            Royal Princess Gallery
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-hero" data-aos="fade-up" data-aos-delay="200">
                            Five-Star Super Deluxe Floating Hotel
                        </p>
                    </div>
                </div>
            </section>

            {/* PDF Downloads Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-georgia text-[#a1978a] mb-8" data-aos="fade-up">
                        Download Gallery
                    </h2>
                    <p className="text-lg font-hero text-[#919090] mb-8" data-aos="fade-up" data-aos-delay="200">
                        Download or share our Royal Princess photo collection
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a 
                            href="/Royal_Princess_Photos_PDF.pdf" 
                            download="Royal_Princess_Photos_PDF.pdf"
                            className="bg-[#a1978a] text-white px-8 py-4 text-lg font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-flex items-center"
                        >
                            <i className="fas fa-download mr-2"></i>Download PDF
                        </a>
                        <button 
                            onClick={() => {
                                const pdfUrl = `${window.location.origin}/Royal_Princess_Photos_PDF.pdf`;
                                if (navigator.share) {
                                    navigator.share({
                                        title: 'Royal Princess Gallery PDF',
                                        text: 'Download Royal Princess luxury cruise gallery',
                                        url: pdfUrl
                                    });
                                } else {
                                    navigator.clipboard.writeText(pdfUrl);
                                    alert('PDF link copied to clipboard!');
                                }
                            }}
                            className="bg-white text-[#a1978a] border-2 border-[#a1978a] px-8 py-4 text-lg font-semibold font-georgia rounded-full hover:bg-[#a1978a] hover:text-white transition-all duration-300 inline-flex items-center"
                        >
                            <i className="fas fa-share mr-2"></i>Share Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Video Gallery Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-georgia text-[#a1978a] mb-8">
                            Video Gallery
                        </h2>
                        <p className="text-lg font-hero text-[#919090]">
                            Experience Royal Princess in motion
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="relative group">
                            <div className="relative bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                                <iframe 
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/9d_PZiYD9AU?si=UT61fUDcLgPNGgFH" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-lg font-semibold font-georgia text-[#a1978a] mt-4 text-center">Royal Princess Tour</h3>
                        </div>
                        <div className="relative group">
                            <div className="relative bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                                <iframe 
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/tph2BKLzgyg?si=SSCFF6j3v9KoJB5U" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-lg font-semibold font-georgia text-[#a1978a] mt-4 text-center">Luxury Experience</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Carousel */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                            <img 
                                src={images[currentImage]} 
                                alt={`Royal Princess ${currentImage + 1}`}
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
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (10).webp" 
                    alt="Royal Princess" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Experience Royal Princess
                    </h2>
                    <p className="text-xl md:text-2xl font-hero text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Book your luxury Nile cruise experience
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a href="/royal-princess" className="bg-[#a1978a] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
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