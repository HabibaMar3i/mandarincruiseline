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
                    <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#a1978a] mb-8">
                        Welcome to Mandarin Cruise Line
                    </h2>
                    <p className="text-lg md:text-xl font-hero text-[#919090] leading-relaxed">
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
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#a1978a] mb-8">
                            SUITES & ACCOMMODATIONS
                        </h2>
                        <p className="text-lg md:text-xl font-hero text-[#919090] leading-relaxed max-w-4xl mx-auto">
                            Our accommodations feature spacious suites with wooden floors and wide panoramic windows for beautiful Nile views. 
                            Each suite includes private marble bathrooms, central air conditioning, minibar, safe box, and sailing cameras 
                            to watch the scenery as we cruise along the majestic Nile River.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        {/* Grand Mandarin */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <div className="h-64 bg-gradient-to-br from-[#a1978a] to-[#AA8C77]">
                                <img src="/GrandMandarin/04.webp" alt="Grand Mandarin Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#a1978a] mb-4">Grand Mandarin</h3>
                                <p className="text-[#919090] font-hero mb-6">62 Junior Suites (21 sqm) + 2 Royal Suites "Nefertiti" & "Cleopatra" (30 sqm) with panoramic Nile views</p>
                                <Link 
                                    to="/grand-mandarin"
                                    className="bg-[#a1978a] text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-all cursor-pointer inline-block"
                                >
                                    Explore Grand Mandarin
                                </Link>
                            </div>
                        </div>
                        
                        {/* Royal Princess */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <div className="h-64 bg-gradient-to-br from-[#a1978a] to-[#AA8C77]">
                                <img src="/RoyalPrincess/Royal Princess (3).webp" alt="Royal Princess Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#a1978a] mb-4">Royal Princess</h3>
                                <p className="text-[#919090] font-hero mb-6">57 Cabins (22 sqm) + 2 Royal Suites (30 sqm) with private balconies and marble bathrooms featuring jacuzzi</p>
                                <Link 
                                    to="/royal-princess"
                                    className="bg-[#a1978a] text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-all cursor-pointer inline-block"
                                >
                                    Explore Royal Princess
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    )
}
