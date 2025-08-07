
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import saree from '../../assets/saree.mp4';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import videos4 from '../../assets/videos4.mp4';



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
                        <motion.button
                            onClick={SellAll}
                            className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white font-medium rounded-full flex items-center gap-3 group"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(225, 29, 72, 0.4)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">See All</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 relative z-10 animate-pulse"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "0%" }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
export default Videos