import { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            text: "An absolutely magical experience! The Grand Mandarin exceeded all our expectations. The service was impeccable and the views of the Nile were breathtaking.",
            name: "Sarah Johnson",
            location: "London, UK"
        },
        {
            text: "Royal Princess provided the perfect blend of luxury and adventure. Every detail was carefully planned and the staff went above and beyond to make our cruise unforgettable.",
            name: "Michael Chen",
            location: "Sydney, Australia"
        },
        {
            text: "The accommodations were stunning and the dining was world-class. Watching the sunset over the Nile from our suite was a moment we'll treasure forever.",
            name: "Elena Rodriguez",
            location: "Madrid, Spain"
        },
        {
            text: "From the moment we stepped aboard, we felt like royalty. The attention to detail and the cultural experiences made this the trip of a lifetime.",
            name: "David Thompson",
            location: "Toronto, Canada"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="relative py-20 overflow-hidden bg-[#5A5248]">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: 'url(/GrandMandarin/08.webp)' }}
            />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-georgia text-white mb-4">
                        What Our Guests Say
                    </h2>
                </div>
                
                <div className="bg-white bg-opacity-95 rounded-xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center">
                        <div className="mb-8">
                            <svg className="w-12 h-12 text-[#5A5248] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                        </div>
                        
                        <div className="transition-opacity duration-500">
                            <p className="text-lg md:text-xl text-[#919090] font-hero leading-relaxed mb-8 italic">
                                "{testimonials[currentTestimonial].text}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold font-georgia text-[#5A5248] mb-1">
                                    {testimonials[currentTestimonial].name}
                                </h4>
                                <p className="text-[#919090] font-hero">
                                    {testimonials[currentTestimonial].location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentTestimonial ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;