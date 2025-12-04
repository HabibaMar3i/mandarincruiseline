import { Link } from 'react-router-dom';

export default function RoyalPrincess() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (1).webp" 
                    alt="Royal Princess" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-georgia leading-tight" data-aos="fade-up">
                            Royal Princess
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-times mb-8" data-aos="fade-up" data-aos-delay="200">
                            Five-Star Super Deluxe Floating Hotel
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
                            Five-Star Super Deluxe Experience
                        </h2>
                        <p className="text-lg md:text-xl font-times text-[#919090] leading-relaxed max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Royal Princess is a five-star super deluxe floating hotel, built and constructed under the supervision of POLSKIREJESTR STATKOW and as per its regulations. Experience luxury across 5 decks with superior facilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-up">
                            <img src="/RoyalPrincess/Royal Princess (2).webp" alt="Royal Princess Exterior" className="w-full rounded-xl shadow-lg" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-6">Technical Specifications</h3>
                            <div className="space-y-4 font-times text-[#919090]">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Length:</span>
                                    <span>72 meters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Width:</span>
                                    <span>14 meters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Height:</span>
                                    <span>11 meters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Main Engines:</span>
                                    <span>3 CAT - 480 HP</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Generators:</span>
                                    <span>CAT - 280KW</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Fire System:</span>
                                    <span>Electric alarm & sprinkler</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Water System:</span>
                                    <span>UV sterilization + filters</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Voltage:</span>
                                    <span>220V</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="font-semibold">Draught:</span>
                                    <span>1.50 meter</span>
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
                        {/* Standard Cabins */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
                            <div className="h-64">
                                <img src="/RoyalPrincess/Royal Princess (3).webp" alt="Royal Princess Cabin" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Standard Cabins</h3>
                                <p className="text-[#919090] font-times mb-4">57 Cabins (22 sqm each) with 26 connected cabins available</p>
                                <ul className="space-y-2 text-[#919090] font-times">
                                    <li>• Private marble bathroom with shower cabin</li>
                                    <li>• Wooden floors & panoramic windows</li>
                                    <li>• Color TV & central sound system</li>
                                    <li>• Central air conditioning</li>
                                    <li>• Mini bar & safe box</li>
                                    <li>• Hair-dryer & make-up mirror</li>
                                    <li>• Telephone & sailing camera</li>
                                </ul>
                            </div>
                        </div>

                        {/* Royal Suites */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                            <div className="h-64">
                                <img src="/RoyalPrincess/Royal Princess (4).webp" alt="Royal Princess Suite" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Royal Suites</h3>
                                <p className="text-[#919090] font-times mb-4">2 Royal Suites (30 sqm each) with private balconies</p>
                                <ul className="space-y-2 text-[#919090] font-times">
                                    <li>• Private bathroom with bathtub & Jacuzzi</li>
                                    <li>• Wide panoramic windows & private balcony</li>
                                    <li>• Color TV & central video/sound system</li>
                                    <li>• Separately controlled air conditioning</li>
                                    <li>• Mini bar & safe box</li>
                                    <li>• Connection with cabins available</li>
                                    <li>• Sailing camera to watch outside</li>
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
                            5 Decks of Luxury
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {/* Sun Deck */}
                        <div className="bg-gradient-to-r from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia mb-4">Sun Deck (E)</h3>
                                    <ul className="space-y-2 font-times">
                                        <li>• Swimming pool & Jacuzzi</li>
                                        <li>• Open air gym</li>
                                        <li>• Sun deck bar</li>
                                        <li>• Shower facilities</li>
                                    </ul>
                                </div>
                                <img src="/RoyalPrincess/Royal Princess (5).webp" alt="Sun Deck" className="rounded-lg" />
                            </div>
                        </div>

                        {/* Lounge Deck */}
                        <div className="bg-white border-2 border-[#5A5248] rounded-xl p-8" data-aos="fade-up" data-aos-delay="100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <img src="/RoyalPrincess/Royal Princess (6).webp" alt="Lounge Deck" className="rounded-lg" />
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Lounge Deck (D)</h3>
                                    <ul className="space-y-2 font-times text-[#919090]">
                                        <li>• 16 Cabins</li>
                                        <li>• Lounge bar</li>
                                        <li>• Discotheque</li>
                                        <li>• Billiard room</li>
                                        <li>• TV area</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Upper Deck */}
                        <div className="bg-gradient-to-r from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up" data-aos-delay="200">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia mb-4">Upper Deck (C)</h3>
                                    <ul className="space-y-2 font-times">
                                        <li>• 2 Royal Suites</li>
                                        <li>• 24 Cabins</li>
                                        <li>• Piano bar</li>
                                        <li>• Coiffeur</li>
                                    </ul>
                                </div>
                                <img src="/RoyalPrincess/Royal Princess (7).webp" alt="Upper Deck" className="rounded-lg" />
                            </div>
                        </div>

                        {/* Main Deck */}
                        <div className="bg-white border-2 border-[#5A5248] rounded-xl p-8" data-aos="fade-up" data-aos-delay="300">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <img src="/RoyalPrincess/Royal Princess (12).webp" alt="Main Deck" className="rounded-lg" />
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-4">Main Deck (B)</h3>
                                    <ul className="space-y-2 font-times text-[#919090]">
                                        <li>• Reception desk</li>
                                        <li>• Lobby (180 sqm)</li>
                                        <li>• Bazaar</li>
                                        <li>• Laundry</li>
                                        <li>• 20 Cabins</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Lower Deck */}
                        <div className="bg-gradient-to-r from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up" data-aos-delay="400">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold font-georgia mb-4">Lower Deck (A)</h3>
                                    <ul className="space-y-2 font-times">
                                        <li>• Engine room</li>
                                        <li>• Galley</li>
                                        <li>• Restaurant</li>
                                        <li>• Guest bathrooms</li>
                                        <li>• Staff cabins</li>
                                    </ul>
                                </div>
                                <img src="/RoyalPrincess/Royal Princess (13).webp" alt="Lower Deck" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dining & Recreation */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Dining & Recreation
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center" data-aos="fade-up">
                            <img src="/RoyalPrincess/Royal Princess (8).webp" alt="Restaurant" className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-2">Main Restaurant</h3>
                            <p className="font-times text-[#919090]">Open buffet with international dishes, seating for 150 guests</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                            <img src="/RoyalPrincess/Royal Princess (9).webp" alt="Entertainment" className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-2">Entertainment</h3>
                            <p className="font-times text-[#919090]">Belly dancer, cocktail parties, oriental nights, folkloric shows & Galabiya party</p>
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <img src="/RoyalPrincess/Royal Princess (10).webp" alt="Pool Area" className="w-full h-48 object-cover rounded-xl mb-4" />
                            <h3 className="text-2xl font-bold font-georgia text-[#5A5248] mb-2">Pool & Jacuzzi</h3>
                            <p className="font-times text-[#919090]">Swimming pool, Jacuzzi, and open-air gym on sun deck</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Itinerary Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold font-georgia text-[#5A5248] mb-8" data-aos="fade-up">
                            Cruise Itineraries
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 4 Nights Luxor to Aswan */}
                        <div className="bg-gradient-to-br from-[#5A5248] to-[#AA8C77] rounded-xl p-8 text-white" data-aos="fade-up">
                            <h3 className="text-3xl font-bold font-georgia mb-6">4 Nights / 5 Days</h3>
                            <p className="text-xl font-times mb-6">Luxor to Aswan</p>
                            <div className="space-y-4 font-times">
                                <div>
                                    <h4 className="font-semibold mb-2">Day 1 (Mon): Luxor</h4>
                                    <p className="text-sm opacity-90">Embarkation, East Bank visits: Karnak & Luxor Temples</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 2 (Tue): Esna/Edfu</h4>
                                    <p className="text-sm opacity-90">West Bank: Valley of Kings, Hatshepsut Temple, Colossi of Memnon</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 3 (Wed): Edfu/Kom-Ombo</h4>
                                    <p className="text-sm opacity-90">Temple of Horus, Temple of Kom-Ombo, sail to Aswan</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 4 (Thu): Aswan</h4>
                                    <p className="text-sm opacity-90">Philae Temple, felucca tour, High Dam visit</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 5 (Fri): Aswan</h4>
                                    <p className="text-sm opacity-90">Disembarkation</p>
                                </div>
                            </div>
                        </div>

                        {/* 3 Nights Aswan to Luxor */}
                        <div className="bg-white border-2 border-[#5A5248] rounded-xl p-8" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-3xl font-bold font-georgia text-[#5A5248] mb-6">3 Nights / 4 Days</h3>
                            <p className="text-xl font-times text-[#5A5248] mb-6">Aswan to Luxor</p>
                            <div className="space-y-4 font-times text-[#919090]">
                                <div>
                                    <h4 className="font-semibold mb-2">Day 1 (Fri): Aswan</h4>
                                    <p className="text-sm">Embarkation, Philae Temple, felucca around Elephantine Island</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 2 (Sat): Kom-Ombo/Edfu</h4>
                                    <p className="text-sm">High Dam visit, Temple of Kom-Ombo, sail to Edfu</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 3 (Sun): Edfu/Luxor</h4>
                                    <p className="text-sm">Temple of Edfu, cross Esna Lock, arrive Luxor</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Day 4 (Mon): Luxor</h4>
                                    <p className="text-sm">West Bank & East Bank visits, disembarkation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <img 
                    src="/RoyalPrincess/Royal Princess (11).webp" 
                    alt="Royal Princess" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold font-georgia text-white mb-6" data-aos="fade-up">
                        Experience Royal Princess
                    </h2>
                    <p className="text-xl md:text-2xl font-times text-white mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Book your luxury Nile cruise aboard our five-star floating hotel
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