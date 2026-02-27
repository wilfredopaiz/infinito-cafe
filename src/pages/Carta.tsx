import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Carta = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-20"> {/* Add padding for the fixed navbar */}
                <MenuSection />
            </div>
            <Footer />
        </div>
    );
};

export default Carta;
