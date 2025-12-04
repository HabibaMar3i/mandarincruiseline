import { useState, useCallback, useEffect } from 'react';

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
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-georgia" data-aos="fade-up" data-aos-delay="200">
                            5-Star Superior Deluxe Floating Hotel
                        </p>
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
                    </div>
                </div>
            </section>

            {/* Video Gallery Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-georgia text-[#5A5248] mb-8">
                            Video Gallery
                        </h2>
                        <p className="text-lg font-georgia text-[#919090]">
                            Experience Grand Mandarin in motion
                        </p>
                    </div>
                    
                    <div className="max-w-xs mx-auto">
                        <div className="relative group">
                            <div className="relative bg-[#EAEAEA] rounded-xl overflow-hidden shadow-lg aspect-[9/16]">
                                <video 
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                    poster="/GrandMandarin/01.webp"
                                >
                                    <source src="/Grand_Mandarin_Video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <h3 className="text-lg font-semibold font-georgia text-[#5A5248] mt-4 text-center">Grand Mandarin Experience</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* PDF Downloads Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                        Download Gallery
                    </h2>
                    <p className="text-lg font-georgia text-[#919090] mb-8" data-aos="fade-up" data-aos-delay="200">
                        Download or share our Grand Mandarin photo collection
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a 
                            href="/Grand_Mandarin_Photos_PDF.pdf" 
                            download="Grand_Mandarin_Photos_PDF.pdf"
                            className="bg-[#5A5248] text-white px-8 py-4 text-lg font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-flex items-center"
                        >
                            <i className="fas fa-download mr-2"></i>Download PDF
                        </a>
                        <button 
                            onClick={() => {
                                const pdfUrl = `${window.location.origin}/Grand_Mandarin_Photos_PDF.pdf`;
                                if (navigator.share) {
                                    navigator.share({
                                        title: 'Grand Mandarin Gallery PDF',
                                        text: 'Download Grand Mandarin luxury cruise gallery',
                                        url: pdfUrl
                                    });
                                } else {
                                    navigator.clipboard.writeText(pdfUrl);
                                    alert('PDF link copied to clipboard!');
                                }
                            }}
                            className="bg-white text-[#5A5248] border-2 border-[#5A5248] px-8 py-4 text-lg font-semibold font-georgia rounded-full hover:bg-[#5A5248] hover:text-white transition-all duration-300 inline-flex items-center"
                        >
                            <i className="fas fa-share mr-2"></i>Share Gallery
                        </button>
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
                    <p className="text-xl md:text-2xl font-georgia text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Book your superior deluxe Nile cruise experience
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a href="/grand-mandarin" className="bg-[#5A5248] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
                            Learn More
                        </a>
                        <a href="mailto:info@mandarincruiseline.com" className="bg-white text-[#5A5248] px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:shadow-lg transition-all duration-300 inline-block">
                            Book Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}