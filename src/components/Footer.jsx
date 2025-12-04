import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#5A5248] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Company */}
                    <div className="md:col-span-1" data-aos="fade-up">
                        <div className="flex items-center mb-4">
                            <h3 className="text-xl font-bold font-georgia">Mandarin Cruise Line</h3>
                        </div>
                        <p className="text-sm font-times opacity-90">
                            Five-Star Deluxe Floating Hotel Experience on the Nile
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="100">
                        <h4 className="text-lg font-semibold font-georgia mb-4">Navigation</h4>
                        <ul className="space-y-2 font-times">
                            <li><Link to="/" className="hover:opacity-70 transition-opacity">Home</Link></li>
                            <li><Link to="/about-us" className="hover:opacity-70 transition-opacity">About Us</Link></li>
                            <li><Link to="/royal-princess" className="hover:opacity-70 transition-opacity">Royal Princess</Link></li>
                            <li><Link to="/grand-mandarin" className="hover:opacity-70 transition-opacity">Grand Mandarin</Link></li>
                            <li><Link to="/contact-us" className="hover:opacity-70 transition-opacity">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="200">
                        <h4 className="text-lg font-semibold font-georgia mb-4">Contact</h4>
                        <div className="space-y-3 font-times">
                            <div className="flex items-start">
                                <i className="fas fa-phone mr-3 mt-1"></i>
                                <div>
                                    <div>0223950572</div>
                                    <div>0223950693</div>
                                    <div>0223954049</div>
                                    <div>0223927996</div>
                                    <div>0223927363</div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-envelope mr-3"></i>
                                <span>info@mandarincruiseline.com</span>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-map-marker-alt mr-3 mt-1"></i>
                                <span>22, Kasr El Nil St., Cairo, Egypt</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="300">
                        <h4 className="text-lg font-semibold font-georgia mb-4">Follow Us</h4>
                        <div className="flex">
                            <a href="https://www.instagram.com/mandarincruiseline/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 mt-8 pt-6 text-center">
                    <p className="font-times opacity-90">
                        © 2025 Mandarin Cruise Line. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;