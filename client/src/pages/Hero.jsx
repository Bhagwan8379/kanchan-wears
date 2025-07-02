import React, { useEffect, useRef, useState } from 'react';
import { data } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';


const Hero = () => {
    const images = [
        "https://i.pinimg.com/736x/75/a9/70/75a970e9421e08d9ad9aa0fe2d784f60.jpg",
        "https://i.pinimg.com/736x/f7/a2/68/f7a2685df2589162c0e0d7f613a88d88.jpg",
        "https://i.pinimg.com/736x/25/ea/74/25ea743946e62146e6e3069041e9d4bc.jpg",
        "https://i.pinimg.com/736x/8b/a1/df/8ba1dfd8f5fd6d61a8e7fbe15872e6e2.jpg",
        "https://i.pinimg.com/736x/51/b4/b1/51b4b15092f170f05c1b06adc98f30ea.jpg",
        "https://i.pinimg.com/736x/c1/1c/bc/c11cbc24549984a56a74a1244e7c8bb1.jpg",
        "https://i.pinimg.com/736x/e7/da/a9/e7daa943bac116eb34dee26bb9e89cb6.jpg",
        "https://i.pinimg.com/736x/47/e3/16/47e3167f9409e4acfedad001ff3715c3.jpg",
        "https://i.pinimg.com/736x/a3/db/d2/a3dbd20881869e901e175a0790d44d9a.jpg",
        "https://i.pinimg.com/736x/37/57/60/37576080fb03307c27a70749e30f3e26.jpg",
        "https://i.pinimg.com/736x/0d/11/b5/0d11b55470eaa84ce1aec21fbb678300.jpg",
        "https://i.pinimg.com/736x/3d/57/d1/3d57d16d9bb64aa164ce46e03c58e6c9.jpg",
        "https://i.pinimg.com/736x/01/1d/e8/011de871e2b29b86ff8ab405466cd87e.jpg",
        "https://i.pinimg.com/736x/9d/d3/a6/9dd3a66b1546e52f19ae0e502295a91b.jpg",
        "https://i.pinimg.com/736x/9a/66/00/9a6600d9670b7d8e12d314b894bf1bf1.jpg",
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut",
            }
        })
    };

    const containerVariant = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <Navbar />
            <div className="relative  overflow-hidden h-screen bg-gradient-to-l from-pink-400 to-blue-300">
                <div className="pt-20 sm:pt-24 sm:pb-40 lg:pt-0 lg:pb-48">
                    <div className="relative mx-auto  flex flex-col lg:flex-row justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl z-10  px-6 sm:px-0 text-center lg:text-left rounded-lg">
                            <div className="border-l-8  border-rose-300 pl-6 sm:pl-8 lg:mt-40">
                                <motion.span
                                    className="block  text-3xl sm:text-4xl font-playfair text-pink-600 italic tracking-wider"
                                    custom={1}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Welcome to
                                </motion.span>

                                <motion.h1
                                    className="text-5xl  sm:text-6xl font-cormorant font-semibold text-slate-900 tracking-tight"
                                    custom={2}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Kanchan Wear's
                                </motion.h1>

                                <motion.p
                                    className="mt-4  text-xl text-slate-600 font-poppins font-medium italic border-t border-slate-200 pt-4"
                                    custom={3}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Your Style, Your Story.
                                </motion.p>

                                <motion.p
                                    className="mt-7 text-lg sm:text-xl text-slate-500 font-poppins font-light leading-relaxed max-w-lg"
                                    custom={4}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    Where fashion meets elegance — redefine your wardrobe with timeless, expressive designs.
                                </motion.p>

                                <motion.div
                                    className="mt-12"
                                    custom={5}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.a
                                        whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/shop"
                                        className="inline-flex items-center rounded-full bg-pink-400 px-8 py-3.5 text-lg font-medium text-white transition-all duration-300 hover:bg-pink-700 font-poppins border border-white hover:border-rose-800 shadow-xs hover:shadow-sm"
                                    >
                                        Explore
                                        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>

                        {/* Images Section */}
                        <div className="opacity-50 sm:opacity-100">
                            <div className="mr-4 absolute md:relative left-0">
                                <div className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div className="transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                                        <div className="flex items-center h-100 space-x-6 lg:space-x-8">

                                            {/* Column 1 */}
                                            <motion.div
                                                className="grid animate-scroll-up shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                                                variants={containerVariant}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                {images.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="h-64 w-44 border-white/70 border-2 overflow-hidden shadow-xl shadow-black/70 rounded-lg"
                                                        variants={imageVariant}
                                                    >
                                                        <img alt="" src={item} className="size-full object-cover" />
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                            {/* Column 2 */}
                                            <motion.div
                                                className="grid shrink-0 grid-cols-1 animate-scroll-down gap-y-6 lg:gap-y-8"
                                                variants={containerVariant}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                {images.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="h-64 w-44 border-white/70 border-2 overflow-hidden shadow-xl shadow-black/70 rounded-lg"
                                                        variants={imageVariant}
                                                    >
                                                        <img alt="" src={item} className="size-full object-cover" />
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                            {/* Column 3 */}
                                            <motion.div
                                                className="grid shrink-0 grid-cols-1 animate-scroll-up gap-y-6 lg:gap-y-8"
                                                variants={containerVariant}
                                                initial="hidden"
                                                animate="visible"
                                            >
                                                {images.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="h-64 w-44 border-white/70 border-2 overflow-hidden shadow-xl shadow-black/70 rounded-lg"
                                                        variants={imageVariant}
                                                    >
                                                        <img alt="" src={item} className="size-full object-cover" />
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;













