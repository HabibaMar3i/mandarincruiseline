import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Layout() {
    return (
        <div className="bg-[#F2ECE7] min-h-screen">
            <ScrollToTop />
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}
