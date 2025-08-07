import Carousel from "./ui/Carousel";
import { motion } from "framer-motion";
import Categories from "./ui/Categories";
import Videos from "./ui/Videos";
import About from "./ui/About";
import Social from "./ui/Social";
import Footer from "./ui/Footer";
import Brands from "./ui/Brands";



const Home = () => {
    const phoneNumber = "+919309775035";
    const message = "Hi there! 👋 I'm reaching out to inquire about your shop services. Could you please provide more details? 😊";

    const sendWhatsAppMessage = () => {
        const encodedMsg = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(url, "_blank");



    };
    return (
        <>
            {/* Floating CTA */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed md:bottom-15 bottom-6  right-6 z-50"
            >
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#EC4899" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-indigo-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                    aria-label="Need help?"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={sendWhatsAppMessage}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>

                </motion.button>
            </motion.div>

            <Carousel />
            <Categories />
            <Brands />
            <Videos />
            <About />
            <Social />
            <Footer />

        </>
    )
}

export default Home



{/* Carousel */ }



{/* Categories */ }

















