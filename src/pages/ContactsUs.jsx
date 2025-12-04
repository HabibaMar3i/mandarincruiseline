export default function ContactUs() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (1).webp" 
                    alt="Contact Us" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-georgia leading-tight" data-aos="fade-up">
                            Contact Us
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-times mb-8" data-aos="fade-up" data-aos-delay="200">
                            Ready to embark on your luxury Nile cruise adventure?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                            <a href="tel:0223950572" className="bg-[#5A5248] text-white px-8 py-4 text-lg font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
                                <i className="fas fa-phone mr-2"></i>Call Now
                            </a>
                            <a href="mailto:info@mandarincruise.com" className="bg-white text-[#5A5248] px-8 py-4 text-lg font-semibold font-georgia rounded-full hover:shadow-lg transition-all duration-300 inline-block">
                                <i className="fas fa-envelope mr-2"></i>Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Get In Touch
                        </h2>
                        <p className="text-lg font-times text-[#919090] max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Contact our expert team to plan your perfect Nile cruise experience
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phone Card */}
                        <div className="bg-white rounded-xl shadow-xl p-8 text-center" data-aos="fade-up">
                            <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-phone text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Call Us</h3>
                            <p className="font-times text-[#919090] mb-4">
                                0223950572<br />
                                0223950693<br />
                                0223954049<br />
                                0223927996<br />
                                0223927363
                            </p>
                            <p className="text-sm font-times text-[#5A5248] font-semibold">Available 24/7</p>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-xl shadow-xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-envelope text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Email Us</h3>
                            <p className="font-times text-[#919090] mb-4">
                                info@mandarincruiseline.com<br />
                            </p>
                            <p className="text-sm font-times text-[#5A5248] font-semibold">Quick Response</p>
                        </div>

                        {/* Visit Card */}
                        <div className="bg-white rounded-xl shadow-xl p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-map-marker-alt text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Visit Us</h3>
                            <p className="font-times text-[#919090] mb-4">
                                22, Kasr El Nil St.<br />
                                Cairo, Egypt
                            </p>
                            <p className="text-sm font-times text-[#5A5248] font-semibold">Egypt</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Contact Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-up">
                            <h2 className="text-4xl font-bold font-georgia text-[#5A5248] mb-6">
                                Plan Your Dream Cruise
                            </h2>
                            <p className="text-lg font-times text-[#919090] mb-8 leading-relaxed">
                                Our experienced team is ready to help you create unforgettable memories aboard our luxury floating hotels. From selecting the perfect suite to planning your itinerary, we're here to make your Nile cruise extraordinary.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#5A5248] text-white p-2 rounded-full">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span className="font-times text-[#919090]">Personalized cruise planning</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#5A5248] text-white p-2 rounded-full">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span className="font-times text-[#919090]">Expert local knowledge</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-[#5A5248] text-white p-2 rounded-full">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span className="font-times text-[#919090]">24/7 customer support</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
                            <img src="/GrandMandarin/06.webp" alt="Grand Mandarin" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
                            <img src="/RoyalPrincess/Royal Princess (3).webp" alt="Royal Princess" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
                            <img src="/GrandMandarin/10.webp" alt="Dining" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
                            <img src="/RoyalPrincess/Royal Princess (5).webp" alt="Pool" className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Details Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] rounded-2xl p-8 md:p-12 text-white">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold font-georgia mb-4" data-aos="fade-up">
                                Complete Contact Information
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div data-aos="fade-up">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold font-georgia mb-2">
                                            <i className="fas fa-building mr-2"></i>Office Address
                                        </h3>
                                        <p className="font-times opacity-90">
                                            22, Kasr El Nil St.<br />
                                            Cairo, Egypt
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-semibold font-georgia mb-2">
                                            <i className="fas fa-phone mr-2"></i>Phone & Fax
                                        </h3>
                                        <p className="font-times opacity-90">
                                            0223950572<br />
                                            0223950693<br />
                                            0223954049<br />
                                            0223927996<br />
                                            0223927363
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div data-aos="fade-up" data-aos-delay="200">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold font-georgia mb-2">
                                            <i className="fas fa-envelope mr-2"></i>Email Addresses
                                        </h3>
                                        <p className="font-times opacity-90">
                                            info@mandarincruiseline.com<br />
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-semibold font-georgia mb-2">
                                            <i className="fas fa-globe mr-2"></i>Websites
                                        </h3>
                                        <p className="font-times opacity-90">
                                            www.mandarincruise.com<br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-8 pt-8 border-t border-white/20">
                            <h3 className="text-xl font-semibold font-georgia mb-4">Follow Us</h3>
                            <div className="flex justify-center">
                                <a href="https://www.instagram.com/mandarincruiseline/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-white text-[#5A5248] p-3 rounded-full hover:scale-110 transition-transform duration-300">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/GrandMandarin/01.webp" 
                    alt="Grand Mandarin" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Ready to Sail?
                    </h2>
                    <p className="text-xl md:text-2xl font-times text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Contact us today to begin planning your luxury Nile cruise experience
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                        <a href="tel:0223950572" className="bg-[#5A5248] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block">
                            <i className="fas fa-phone mr-2"></i>Call Now
                        </a>
                        <a href="mailto:info@mandarincruise.com" className="bg-white text-[#5A5248] px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:shadow-lg transition-all duration-300 inline-block">
                            <i className="fas fa-envelope mr-2"></i>Send Email
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Why Choose Mandarin Cruise Line?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center" data-aos="fade-up">
                            <div className="bg-[#5A5248] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-star text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">5-Star Luxury</h3>
                            <p className="font-times text-[#919090]">Superior deluxe floating hotels with world-class amenities and service</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-[#5A5248] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shield-alt text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Safety First</h3>
                            <p className="font-times text-[#919090]">Built under international supervision with CRISTAL certification</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-[#5A5248] text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-heart text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-4">Unforgettable Experience</h3>
                            <p className="font-times text-[#919090]">Create memories that last a lifetime on the majestic Nile River</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
