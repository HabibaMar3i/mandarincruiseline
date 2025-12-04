import HeroSlideshow from '../components/HeroSlideshow';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <HeroSlideshow />
            
            {/* Welcome Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                        Welcome to Mandarin Cruise Line
                    </h2>
                    <p className="text-lg md:text-xl font-times text-[#919090] leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Experience luxury aboard our five-star deluxe floating hotels, Grand Mandarin and Royal Princess. 
                        Built under international maritime supervision, our vessels offer unparalleled Nile cruise experiences 
                        with world-class accommodations, fine dining, entertainment, and breathtaking views of ancient Egypt's 
                        most treasured landmarks.
                    </p>
                </div>
            </section>

            {/* Suites Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            SUITES & ACCOMMODATIONS
                        </h2>
                        <p className="text-lg md:text-xl font-times text-[#919090] leading-relaxed max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Our accommodations feature spacious suites with wooden floors and wide panoramic windows for beautiful Nile views. 
                            Each suite includes private marble bathrooms, central air conditioning, minibar, safe box, and sailing cameras 
                            to watch the scenery as we cruise along the majestic Nile River.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        {/* Grand Mandarin */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
                            <div className="h-64 bg-gradient-to-br from-[#5A5248] to-[#AA8C77]">
                                <img src="/GrandMandarin/04.webp" alt="Grand Mandarin Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Grand Mandarin</h3>
                                <p className="text-[#919090] font-times mb-6">62 Junior Suites (21 sqm) + 2 Royal Suites "Nefertiti" & "Cleopatra" (30 sqm) with panoramic Nile views</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link 
                                        to="/grand-mandarin"
                                        className="bg-[#5A5248] text-white px-6 py-2 rounded-full font-semibold font-georgia hover:opacity-90 transition-all duration-300 inline-block text-center"
                                    >
                                        Explore Grand Mandarin
                                    </Link>
                                    <Link 
                                        to="/grand-mandarin-gallery"
                                        className="bg-[#eb5515] text-white px-6 py-2 rounded-full font-semibold font-georgia hover:opacity-90 transition-all duration-300 inline-block text-center"
                                    >
                                        View Gallery
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Royal Princess */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-64 bg-gradient-to-br from-[#5A5248] to-[#AA8C77]">
                                <img src="/RoyalPrincess/Royal Princess (3).webp" alt="Royal Princess Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Royal Princess</h3>
                                <p className="text-[#919090] font-times mb-6">57 Cabins (22 sqm) + 2 Royal Suites (30 sqm) with private balconies and marble bathrooms featuring jacuzzi</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link 
                                        to="/royal-princess"
                                        className="bg-[#5A5248] text-white px-6 py-2 rounded-full font-semibold font-georgia hover:opacity-90 transition-all duration-300 inline-block text-center"
                                    >
                                        Explore Royal Princess
                                    </Link>
                                    <Link 
                                        to="/royal-princess-gallery"
                                        className="bg-[#eb5515] text-white px-6 py-2 rounded-full font-semibold font-georgia hover:opacity-90 transition-all duration-300 inline-block text-center"
                                    >
                                        View Gallery
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            
            {/* Photo Gallery Grid */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-4" data-aos="fade-up">
                            Grand Mandarin Gallery
                        </h2>
                        <p className="text-lg font-times text-[#919090]" data-aos="fade-up" data-aos-delay="200">
                            5-Star Superior Deluxe Floating Hotel
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                        {/* Large image - spans 2x2 */}
                        <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#5A5248] to-[#AA8C77]" data-aos="zoom-in">
                            <img src="/GrandMandarin/06.webp" alt="Grand Mandarin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        
                        {/* Top right */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#5A5248] to-[#AA8C77]" data-aos="fade-up" data-aos-delay="100">
                            <img src="/GrandMandarin/07.webp" alt="Grand Mandarin Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        
                        {/* Middle right */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#5A5248] to-[#AA8C77]" data-aos="fade-up" data-aos-delay="200">
                            <img src="/GrandMandarin/08.webp" alt="Grand Mandarin Dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        
                        {/* Bottom left */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#5A5248] to-[#AA8C77]" data-aos="fade-up" data-aos-delay="300">
                            <img src="/GrandMandarin/09.webp" alt="Grand Mandarin Deck" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        
                        {/* Bottom right */}
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-[#5A5248] to-[#AA8C77]" data-aos="fade-up" data-aos-delay="400">
                            <img src="/GrandMandarin/10.webp" alt="Grand Mandarin Pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Your Stay Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (14).webp" 
                    alt="Royal Princess" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Ready for Your Nile Adventure?
                    </h2>
                    <p className="text-xl md:text-2xl font-times text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Experience luxury, history, and unforgettable moments aboard our five-star floating hotels
                    </p>
                    
                    <Link 
                        to="/contact-us"
                        className="bg-white text-[#5A5248] px-12 py-4 text-xl font-semibold font-georgia rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-block"
                        data-aos="fade-up" data-aos-delay="400"
                    >
                        Book Your Stay
                    </Link>
                </div>
            </section>
        </div>
    )
}
