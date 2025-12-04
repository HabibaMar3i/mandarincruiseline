export default function AboutUs() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <img 
                    src="/GrandMandarin/01.webp" 
                    alt="About Us" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-georgia leading-tight" data-aos="fade-up">
                            About Us
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-times mb-8" data-aos="fade-up" data-aos-delay="200">
                            Our story is being crafted...
                        </p>
                        <div className="bg-[#5A5248] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full inline-block" data-aos="fade-up" data-aos-delay="400">
                            <i className="fas fa-clock mr-2"></i>Coming Soon
                        </div>
                    </div>
                </div>
            </section>

            {/* Coming Soon Content */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                        Coming Soon
                    </h2>
                    <p className="text-lg md:text-xl font-times text-[#919090] leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="200">
                        We're working on something special to share our story, heritage, and commitment to providing exceptional Nile cruise experiences. Stay tuned for updates!
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center" data-aos="fade-up">
                            <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-history text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Our Heritage</h3>
                            <p className="font-times text-[#919090]">Discover the rich history behind Mandarin Cruise Line</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-users text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Our Team</h3>
                            <p className="font-times text-[#919090]">Meet the dedicated professionals behind your cruise experience</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-award text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Our Mission</h3>
                            <p className="font-times text-[#919090]">Learn about our commitment to excellence and luxury</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (1).webp" 
                    alt="Royal Princess" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Experience Our Ships
                    </h2>
                    <p className="text-xl md:text-2xl font-times text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        While our story unfolds, explore our magnificent floating hotels
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a href="/royal-princess" className="bg-[#5A5248] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
                            Royal Princess
                        </a>
                        <a href="/grand-mandarin" className="bg-white text-[#5A5248] px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:shadow-lg transition-all duration-300 inline-block">
                            Grand Mandarin
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}