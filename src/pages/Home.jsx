import HeroSlideshow from '../components/HeroSlideshow';

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
        </div>
    )
}
