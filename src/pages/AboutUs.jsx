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
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-georgia mb-8" data-aos="fade-up" data-aos-delay="200">
                            Discover the story behind our luxury Nile cruise experience
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Crew Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#a68b76] mb-8" data-aos="fade-up">
                            Our Dedicated Crew
                        </h2>
                        <p className="text-lg md:text-xl font-georgia text-[#919090] leading-relaxed max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Embark on an unforgettable journey with Mandarin Cruise, where our dedicated team eagerly awaits to welcome you aboard and immerse you in an unparalleled experience of luxury and discovery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div data-aos="fade-up">
                            <img src="/WhatsApp Image 2025-12-04 at 11.21.10 PM.jpeg" alt="Our Professional Crew" className="w-full rounded-xl shadow-lg" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-3xl font-bold font-georgia text-[#a68b76] mb-6">Professional Excellence</h3>
                            <p className="text-lg font-georgia text-[#919090] mb-6 leading-relaxed">
                                Our experienced crew members are the heart of your cruise experience. With years of expertise in hospitality and navigation, they ensure every moment of your journey is memorable.
                            </p>
                            <ul className="space-y-3 font-georgia text-[#919090]">
                                <li className="flex items-center"><i className="fas fa-check-circle text-[#a68b76] mr-3"></i>100+ professional crew members</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-[#a68b76] mr-3"></i>Multilingual hospitality team</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-[#a68b76] mr-3"></i>Expert navigation and safety</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-[#a68b76] mr-3"></i>24/7 guest services</li>
                            </ul>
                        </div>
                    </div>

                    {/* Crew Video */}
                    <div className="text-center" data-aos="fade-up">
                        <h3 className="text-3xl font-bold font-georgia text-[#a68b76] mb-8">Meet Our Team</h3>
                        <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
                            <video 
                                controls 
                                preload="metadata"
                                className="w-full h-auto"
                                poster="/WhatsApp Image 2025-12-04 at 11.21.10 PM.jpeg"
                            >
                                <source src="/crew-reel.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
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
                    <p className="text-xl md:text-2xl font-georgia text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        While our story unfolds, explore our magnificent floating hotels
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a href="/royal-princess" className="bg-[#a68b76] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
                            Royal Princess
                        </a>
                        <a href="/grand-mandarin" className="bg-white text-[#a68b76] px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:shadow-lg transition-all duration-300 inline-block">
                            Grand Mandarin
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}