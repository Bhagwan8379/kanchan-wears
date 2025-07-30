import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, hover } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import saree from '../assets/saree.mp4';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import videos4 from '../assets/videos4.mp4';
import {
    Mail, Phone, MapPin, Youtube, X, User, Lock, Instagram, Facebook, Twitter,
    Linkedin, MessageCircle,
    MessageSquare,
    MessageCircleCode
} from 'lucide-react';



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
            <Videos />
            <About />
            <Social />
            <Footer />

        </>
    )
}

export default Home



{/* Carousel */ }
const Carousel = () => {
    const carouselItems = [
        'https://i.pinimg.com/1200x/10/01/7c/10017c76e7a9880d236072934cebff29.jpg',
        'https://i.pinimg.com/1200x/fc/80/6e/fc806e92502279d4f672981faa6cfa41.jpg',
        'https://i.pinimg.com/originals/6a/76/34/6a7634641089bada8dca64e15a45f1f0.jpg',
        'https://i.pinimg.com/1200x/79/f6/6c/79f66c1dea34bff1d5cd8798d75d3316.jpg',
    ];

    // Clothing items to display at bottom
    const clothingItems = [
        { name: "Dresses", emoji: "👗", color: "bg-gradient-to-br from-pink-300 to-rose-400" },
        { name: "Tops", emoji: "👚", color: "bg-gradient-to-br from-blue-300 to-indigo-400" },
        { name: "Bottoms", emoji: "👖", color: "bg-gradient-to-br from-purple-300 to-violet-500" },
        { name: "Outerwear", emoji: "🧥", color: "bg-gradient-to-br from-red-300 to-rose-500" },
        { name: "Accessories", emoji: "👜", color: "bg-gradient-to-br from-amber-300 to-orange-400" },
        { name: "Footwear", emoji: "👠", color: "bg-gradient-to-br from-emerald-300 to-teal-500" },
        { name: "Jewelry", emoji: "🧣", color: "bg-gradient-to-br from-indigo-300 to-blue-500" },
        { name: "Activewear", emoji: "🧘", color: "bg-gradient-to-br from-teal-300 to-cyan-500" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');
    const [activeClothingIndex, setActiveClothingIndex] = useState(-1);

    // Animation variants for clothing items
    const clothingVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        exit: { opacity: 0, y: -20, scale: 0.8 }
    };

    // Carousel auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Animate clothing items when carousel changes
    useEffect(() => {
        // Reset clothing animation
        setActiveClothingIndex(-1);

        // Start showing items one by one
        const timers = clothingItems.map((_, i) => {
            return setTimeout(() => {
                setActiveClothingIndex(i);
            }, i * 300); // 300ms delay between items
        });

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [currentIndex]);

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex(prev => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex(prev => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    return (
        <div className="border-pink-300 border-2 relative w-auto mt-16 md:h-auto overflow-hidden transition-colors duration-1000">
            {/* Main Carousel */}
            <div className="relative w-full h-[200px] sm:h-[500px] overflow-hidden">
                {/* Carousel Slides */}
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={item}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 bg-white/30 hover:bg-pink-400 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 bg-white/30 hover:bg-pink-400 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex justify-center gap-1 sm:gap-2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 sm:h-2 w-4 sm:w-8 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6 sm:w-12' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Clothing Items Display - Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-x-auto overflow-y-hidden p-2">
                <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 px-2 sm:px-4 w-max sm:w-auto mx-auto">
                    {clothingItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={index <= activeClothingIndex ? "visible" : "hidden"}
                            variants={clothingVariants}
                            className={`${item.color} border border-white hover:border-black rounded-xl sm:rounded-2xl w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 flex flex-col items-center justify-center text-2xl sm:text-3xl shadow-md shadow-pink-400 hover:shadow-black cursor-pointer flex-shrink-0`}
                        >
                            {item.emoji}
                            <span className="absolute -bottom-5 sm:-bottom-6 text-[10px] sm:text-xs font-medium text-gray-700 whitespace-nowrap">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


{/* Categories */ }

const Categories = () => {
    const categories = [
        { id: 1, name: "Sarees", image: "https://i.pinimg.com/1200x/0a/97/33/0a97339223f04cbdd5a27a5cd579d226.jpg" },
        { id: 2, name: "Kurtis", image: "https://i.pinimg.com/1200x/60/64/f5/6064f5509d60b562189feb2d63fd729b.jpg" },
        { id: 3, name: "Western Wear", image: "https://i.pinimg.com/1200x/cc/9b/3f/cc9b3fec3d3e57804c0ac731a600be4e.jpg" },
        { id: 4, name: "Lehengas", image: "https://i.pinimg.com/1200x/25/8f/f9/258ff98f7bf46edbf0d402c0e94ff770.jpg" },
        { id: 5, name: "Tops & Tunics", image: "https://i.pinimg.com/1200x/fe/71/56/fe7156eacd27f7574cea5e0d52d933bb.jpg" },
        { id: 6, name: "Party Wear", image: "https://i.pinimg.com/1200x/5a/92/33/5a92339eb9fb4444e70eccb7981f445a.jpg" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.4 } }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const title = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const navigation = useNavigate();

    return (
        <div id="categories" className="min-h-screen bg-gradient-to-tr from-pink-300 to-white px-6 py-12">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="max-w-6xl mx-auto"
            >
                <motion.h1
                    variants={title}
                    className="text-center sm:text-4xl text-xl md:text-5xl font-bold text-red-600 mb-10 font-serif"
                >
                    Categories
                </motion.h1>

                <motion.div
                    variants={container}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            variants={item}
                            onClick={() => navigation("/details")}
                            className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105 border-white border-3 hover:border-pink-600"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="sm:w-full sm:h-80 h-50 w-50 object-cover"
                            />
                            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition duration-300">
                                <h3 className="text-white sm:text-2xl hover:text-pink-500 font-bold tracking-wide">
                                    {cat.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ✅ See All Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => navigation("/all-categories")}
                        className="bg-pink-600 hover:bg-pink-700 justify-center items-center flex text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
                    >
                        <span>  See All</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 animate-pulse"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                </div>
            </motion.div>
        </div>
    );
};


const Videos = () => {
    const [visibleProducts, setVisibleProducts] = useState(3);
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Premium Quality Saree", video: saree, category: "Traditional Wear" },
        { id: 2, name: "Classic Dress", video: video1, category: "Formal Wear" },
        { id: 3, name: "Modern Cool Western", video: video2, category: "Outerwear" },
        { id: 4, name: "Traditional Dress", video: video3, category: "Accessories" },
        { id: 5, name: "Trending Dress Pants", video: videos4, category: "Bottoms" },
    ];

    // ✅ Adjust visible products based on screen size
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth <= 1020) {
                setVisibleProducts(4); // Mobile
            } else {
                setVisibleProducts(3); // Desktop
            }
        };

        updateVisible(); // Run on mount
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    const previewProducts = products.slice(0, visibleProducts);

    const SellAll = () => navigate("/all-collection");

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="md:text-5xl text-xl font-bold text-gray-900 font-serif mb-4">
                        Discover <span className="text-rose-600">Collections</span>
                    </h2>
                    <p className="md:text-lg text-gray-600 md:max-w-2xl mx-auto">
                        Discover our premium fashion pieces crafted with exceptional quality and timeless design.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 lg:grid-cols-3 md:gap-8 gap-3"
                >
                    {previewProducts.map(product => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-h-2 overflow-hidden">
                                <video
                                    autoPlay
                                    loop
                                    src={product.video}
                                    muted
                                    playsInline
                                    className="sm:w-100 w-auto h-auto sm:h-100 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="self-start text-rose-400 text-sm font-medium mb-1">
                                    {product.category}
                                </span>
                                <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {visibleProducts < products.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-16"
                    >
                        <button
                            onClick={SellAll}
                            className="md:px-8 md:py-3.5 px-3 py-1 bg-rose-400 cursor-pointer hover:bg-rose-600 text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2 group"
                        >
                            <span>See All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}


const About = () => {
    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891",
            alt: "Elegant ethnic wear collection"
        },
        {
            src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
            alt: "Casual western wear selection"
        },
        {
            src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
            alt: "Party wear outfits"
        }
    ];

    const features = [
        "Handpicked collections from top designers",
        "Ethically sourced fabrics and materials",
        "Personalized styling consultations"
    ]
    const navigate = useNavigate()
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-white to-rose-100 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Gallery */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-5">
                        {galleryImages.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl h-48 md:h-72 overflow-hidden shadow-lg relative group transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-opacity duration-400">
                                    <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Collection
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="md:text-5xl text-3xl font-bold mb-8 text-rose-600 leading-tight">
                            Our <span className="inline-block text-black transition-transform duration-300 hover:-rotate-3">Fashion Story</span>
                        </h2>

                        <p className="text-gray-700 md:text-lg text-base mb-8 leading-relaxed">
                            At Kanchan Wears, we believe fashion should celebrate your individuality. Founded in 2024, we've grown from a small boutique to a beloved destination for women who appreciate quality craftsmanship and trend-forward designs.
                        </p>

                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                                Why Choose Us
                            </h3>
                            <ul className="space-y-3">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start transition-all duration-300 hover:text-rose-800 hover:pl-2"
                                    >
                                        <svg
                                            className="w-6 h-6 mr-3 text-rose-700 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 md:text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-rose-500 cursor-pointer hover:bg-rose-700 text-white font-medium md:py-3.5 md:px-8 py-2 px-6 rounded-full flex items-center gap-2 shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
                        >
                            <span>Contact Us</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 animate-pulse"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};



const Social = () => {
    const socialPlatforms = [
        {
            name: "Instagram",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            username: "@KanchanWears",
            url: "https://instagram.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-purple-500 to-pink-500"
        },
        {
            name: "Facebook",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
            ),
            username: "/KanchanWears",
            url: "https://facebook.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-blue-500 to-blue-300"
        },
        {
            name: "Pinterest",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
            ),
            username: "KanchanWears",
            url: "https://pinterest.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-red-500 to-red-200"
        },
        {
            name: "YouTube",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            ),
            username: "Kanchan Wears",
            url: "https://youtube.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-red-600 to-red-500"
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const title = {
        hidden: {
            opacity: 0,
            y: -20
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const cardHover = {
        y: -10,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    };

    const iconHover = {
        scale: 1.2,
        transition: {
            duration: 0.3
        }
    };

    return (
        <section id="social" className="py-16 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={container}
                >
                    <motion.div
                        variants={title}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            className="md:text-3xl text-xl font-bold text-[#721C24] mb-4"
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            Join Our <motion.span
                                className="inline-block"
                                whileHover={{
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                Fashion Community
                            </motion.span>
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 text-[13px] md:text-[16px] max-w-2xl mx-auto"
                            variants={title}
                            transition={{ delay: 0.1 }}
                        >
                            Follow us for styling tips, new arrivals, and exclusive offers. Tag us with #KanchanWears to be featured!
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {socialPlatforms.map((platform, index) => (
                            <motion.a
                                key={index}
                                variants={item}
                                whileHover={cardHover}
                                whileTap={{ scale: 0.98 }}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${platform.bgColor} h-auto rounded-xl p-6 text-white transition-all hover:shadow-lg relative overflow-hidden group`}
                            >
                                {/* Subtle floating dots decoration */}
                                <motion.div
                                    className="absolute inset-0 opacity-10"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <div className="absolute w-3 h-3 rounded-full bg-white top-1/4 left-1/4"></div>
                                    <div className="absolute w-2 h-2 rounded-full bg-white top-3/4 left-3/4"></div>
                                    <div className="absolute w-4 h-4 rounded-full bg-white top-1/3 right-1/4"></div>
                                </motion.div>

                                <div className="flex flex-col items-center text-center relative z-10">
                                    <motion.div
                                        className="mb-4"
                                        whileHover={iconHover}
                                    >
                                        {platform.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-semibold mb-1">{platform.name}</h3>
                                    <p className="text-white/90 mb-3">{platform.username}</p>
                                    <motion.span
                                        className="text-sm font-medium inline-block px-4 py-1 bg-white/20 rounded-full"
                                        initial={{ scale: 1 }}
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "rgba(255,255,255,0.3)"
                                        }}
                                    >
                                        Follow Us
                                    </motion.span>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const socialLinks = [
        { icon: <Instagram size={20} />, name: "Instagram" },
        { icon: <Youtube size={20} />, name: "Twitter" },
        { icon: <Twitter size={20} />, name: "LinkedIn" }
    ]

    const quickLinks = [
        { name: "About Us", id: "about" },
        { name: "Our Collections", id: "collection" },
        { name: "Categories", id: "categories" },
        { name: "Products", id: "products" },
        { name: "Social Platforms", id: "social" }
    ];

    const contactInfo = [
        { icon: <Mail className="md:size-6 size-4" />, text: "payalsalunke787@gmail.com" },
        { icon: <Phone className="md:size-6 size-4" />, text: "+919309775035" },
        { icon: <MapPin className="md:size-6 size-4" />, text: "Shop A5, Ground Floor, Suyog Complex, N9, Cidco, Sector J1 Plot Number 14 TV Center Chhatrapati Sambhajinar" }
    ];



    const navigate = useNavigate()
    const phoneNumber = "+918379832391";
    const message = "Hi there! 👋 I'm reaching out to inquire about your Work & services. Could you please provide more details? 😊";

    const sendWhatsAppMessage = () => {
        const encodedMsg = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(url, "_blank");



    };
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={footerVariants}
            className="bg-gray-900 text-gray-100 pt-16 pb-8"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                            Kanchan Exclusive Women's Wear
                        </h3>
                        <p className="text-gray-400 text-sm md:text-[16px]">
                            Curated professional wear for the modern woman. Style meets sophistication in every piece.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -3, scale: 1.1, color: "#EC4899" }}
                                    href="#"
                                    aria-label={social.name}
                                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h4 className="md:text-lg  font-semibold text-indigo-300">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <a
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 text-sm md:text-[16px] cursor-pointer hover:text-pink-400 transition-colors flex items-center"
                                    >
                                        <span className="md:w-2 md:h-2 h-1 w-1  bg-indigo-500 rounded-full mr-2"></span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h4 className="md:text-lg font-semibold text-indigo-300">Contact Us</h4>
                        <ul className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start space-x-3 cursor-pointer text-gray-400"
                                    whileHover={{ color: "#EC4899" }}
                                >
                                    <span className="text-indigo-400 mt-1 ">{info.icon}</span>
                                    <span className="text-sm md:text-[16px]">{info.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h4 className="text-lg font-semibold text-indigo-300">Newsletter</h4>
                        <p className="text-gray-400 text-sm md:text-[16px]">
                            Subscribe for style tips, new arrivals, and exclusive offers.
                        </p>
                        <motion.div
                            className="flex"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.button
                                onClick={() => navigate("/contact")}
                                whileHover={{ backgroundColor: "#EC4899" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-indigo-600  cursor-pointer text-white md:px-4 px-2 md:py-2 py-1 rounded-r-md transition-colors"
                            >
                                Contact US !
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-8"
                />

                {/* Bottom Footer */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
                >
                    <p>
                        &copy; {new Date().getFullYear()} Kanchan Wear. All rights reserved.
                    </p>
                    <div className="flex justify-between items-center gap-2 mt-2 md:mt-0  ">
                        <p onClick={sendWhatsAppMessage} className=" text-center text-pink-200 cursor-pointer">Design & Developed By Bhagwan Gire</p>
                        <Mail size={15} className="md:mt-1 text-rose-400 " />
                    </div>
                    <div className="flex space-x-6 mt-2 md:mt-0">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="outline px-2 hidden  md:flex cursor-pointer 
                             md:mt-0 md:hover:bg-gradient-to-r
                              from-indigo-400 to-pink-500
                               hover:bg-clip-text
                                md:text-transparent 
                               rounded-full"
                        >Admin</button>
                        <motion.a
                            href="#"
                            whileHover={{ color: "#EC4899" }}
                            className="hover:text-indigo-400 transition-colors"
                        >
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ color: "#EC4899" }}
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ color: "#EC4899" }}
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Terms of Service
                        </motion.a>
                        <motion.a
                            href="/contact"
                            whileHover={{ color: "#EC4899" }}
                            className="hover:text-indigo-400 transition-colors"
                        >
                            Sitemap
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Modal Window  */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-white">Welcome Admin</h2>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>

                            {/* Form */}
                            <form className="p-6 space-y-6">
                                <div className="space-y-4">
                                    {/* Username Field */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-black" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                    </div>

                                    {/* Password Field */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-black" />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full pl-10 pr-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
                                >
                                    Sign In
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.footer >
    );
};




