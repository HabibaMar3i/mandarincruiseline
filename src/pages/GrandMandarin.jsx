import { Link } from 'react-router-dom';

export default function GrandMandarin() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <img 
                    src="/GrandMandarin/01.webp" 
                    alt="Grand Mandarin" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-georgia leading-tight" data-aos="fade-up">
                            Grand Mandarin
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-times mb-8" data-aos="fade-up" data-aos-delay="200">
                            5-Star Superior Deluxe Floating Hotel
                        </p>
                        <Link 
                            to="/contact-us"
                            className="bg-[#5A5248] text-white px-12 py-4 text-xl font-semibold font-georgia rounded-full hover:opacity-90 transition-all duration-300 inline-block"
                            data-aos="fade-up" data-aos-delay="400"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Superior Deluxe Experience
                        </h2>
                        <p className="text-lg md:text-xl font-times text-[#919090] leading-relaxed max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            M/S Grand Mandarin is a 5-star superior deluxe floating hotel, built and constructed under the supervision of ABS (American Bureau of Shipping) and as per its regulations. Built in 2000 with state-of-the-art facilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-up">
                            <img src="/GrandMandarin/02.webp" alt="Grand Mandarin Exterior" className="w-full rounded-xl shadow-lg" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-6">Technical Specifications</h3>
                            <div className="space-y-4 font-times text-[#919090]">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Construction Year:</span>
                                    <span>2000</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Length:</span>
                                    <span>72 meters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Width:</span>
                                    <span>14.5 meters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Height:</span>
                                    <span>11.2 meters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Main Engines:</span>
                                    <span>3 MAN - 500 HP each</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Crew:</span>
                                    <span>100 members</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Voltage:</span>
                                    <span>220V</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Draught:</span>
                                    <span>1.6 meters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Luxurious Accommodations
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Junior Suites */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
                            <div className="h-64">
                                <img src="/GrandMandarin/03.webp" alt="Grand Mandarin Junior Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Junior Suites</h3>
                                <p className="text-[#919090] font-times mb-4">62 Junior Suites (21 sqm each)</p>
                                <ul className="space-y-2 text-[#919090] font-times">
                                    <li>• Flat screen TV & internal telephone</li>
                                    <li>• Air conditioning & safe box</li>
                                    <li>• Minibar, tea & coffee tray</li>
                                    <li>• En-suite bathroom with shower cabin</li>
                                    <li>• Hairdryer & makeup mirror</li>
                                    <li>• Panoramic Nile view windows</li>
                                    <li>• Branded amenities included</li>
                                </ul>
                            </div>
                        </div>

                        {/* Royal Suites */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-64">
                                <img src="/GrandMandarin/04.webp" alt="Grand Mandarin Royal Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Royal Suites</h3>
                                <p className="text-[#919090] font-times mb-4">2 Royal Suites: "Nefertiti" & "Cleopatra" (30 sqm each)</p>
                                <ul className="space-y-2 text-[#919090] font-times">
                                    <li>• Flat screen TV, phone, AC, safe</li>
                                    <li>• Minibar & premium amenities</li>
                                    <li>• Large shower cabin with rain shower</li>
                                    <li>• Separate lounge area</li>
                                    <li>• Panoramic windows</li>
                                    <li>• Located on middle deck</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deck Layout Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            5 Decks of Excellence
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {/* Sun Deck */}
                        <div className="bg-gradient-to-r from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia mb-4">Sun Deck (E)</h3>
                                    <ul className="space-y-2 font-times">
                                        <li>• Sun loungers & shaded areas</li>
                                        <li>• Swimming pool with state-of-the-art jacuzzi</li>
                                        <li>• Open-air gym</li>
                                        <li>• Panoramic Nile views</li>
                                    </ul>
                                </div>
                                <img src="/GrandMandarin/05.webp" alt="Sun Deck" className="rounded-lg" />
                            </div>
                        </div>

                        {/* Tokyo Bar Deck */}
                        <div className="bg-white border-2 border-[#5A5248] rounded-xl p-8" data-aos="fade-up" data-aos-delay="100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <img src="/GrandMandarin/06.webp" alt="Tokyo Bar" className="rounded-lg" />
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Tokyo Bar Deck (D)</h3>
                                    <ul className="space-y-2 font-times text-[#919090]">
                                        <li>• Vibrant Tokyo Bar with curated cocktails</li>
                                        <li>• Weekly Oriental Party venue</li>
                                        <li>• Game room with billiard table</li>
                                        <li>• TV entertainment area</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Mezzanine */}
                        <div className="bg-gradient-to-r from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up" data-aos-delay="200">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia mb-4">The Mezzanine (C)</h3>
                                    <ul className="space-y-2 font-times">
                                        <li>• Additional lounges & seating areas</li>
                                        <li>• Terraced view of the Nile</li>
                                        <li>• Jewelry inspired by pharaonic heritage</li>
                                        <li>• Truly opulent experience</li>
                                    </ul>
                                </div>
                                <img src="/GrandMandarin/07.webp" alt="Mezzanine" className="rounded-lg" />
                            </div>
                        </div>

                        {/* The Reception */}
                        <div className="bg-white border-2 border-[#5A5248] rounded-xl p-8" data-aos="fade-up" data-aos-delay="300">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <img src="/GrandMandarin/08.webp" alt="Reception" className="rounded-lg" />
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">The Reception (B)</h3>
                                    <ul className="space-y-2 font-times text-[#919090]">
                                        <li>• Check-in counter & luxurious entrance</li>
                                        <li>• Grand piano for entertainment</li>
                                        <li>• Elegant staircase design</li>
                                        <li>• Welcome lobby area</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The Gallery */}
                        <div className="bg-gradient-to-r from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up" data-aos-delay="400">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia mb-4">The Gallery (A)</h3>
                                    <ul className="space-y-2 font-times">
                                        <li>• Main restaurant with international dishes</li>
                                        <li>• Seafood night with fresh selections</li>
                                        <li>• Open buffet dining experience</li>
                                        <li>• Professional culinary team</li>
                                    </ul>
                                </div>
                                <img src="/GrandMandarin/09.webp" alt="Gallery Restaurant" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dining & Entertainment */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Dining & Entertainment
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center" data-aos="fade-up">
                            <img src="/GrandMandarin/10.webp" alt="Dining" className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-2">Gourmet Dining</h3>
                            <p className="font-times text-[#919090]">Open buffet for all meals, themed set menu weekly, complimentary tea time</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <img src="/GrandMandarin/11.webp" alt="Entertainment" className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-2">Live Entertainment</h3>
                            <p className="font-times text-[#919090]">Oriental galabia party, belly dancer, daily music & entertainment</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <img src="/GrandMandarin/12.webp" alt="Facilities" className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-2">Premium Facilities</h3>
                            <p className="font-times text-[#919090">Central AC system, credit cards accepted, infirmary on board, Cristal certified</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-4" data-aos="fade-up">
                            Grand Mandarin Gallery
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                        <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in">
                            <img src="/GrandMandarin/13.webp" alt="Grand Mandarin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
                            <img src="/GrandMandarin/14.webp" alt="Suite Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <img src="/GrandMandarin/15.webp" alt="Dining Area" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
                            <img src="/GrandMandarin/16.webp" alt="Pool Deck" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="400">
                            <img src="/GrandMandarin/17.webp" alt="Lounge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/GrandMandarin/18.webp" 
                    alt="Grand Mandarin" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Experience Grand Mandarin
                    </h2>
                    <p className="text-xl md:text-2xl font-times text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Book your superior deluxe Nile cruise experience
                    </p>
                    
                    <Link 
                        to="/contact-us"
                        className="bg-white text-[#5A5248] px-12 py-4 text-xl font-semibold font-georgia rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-block"
                        data-aos="fade-up" data-aos-delay="400"
                    >
                        Book Your Cruise
                    </Link>
                </div>
            </section>
        </div>
    )
}