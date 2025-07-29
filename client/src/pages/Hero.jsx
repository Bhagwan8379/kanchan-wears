// import React, { useEffect, useRef, useState } from 'react';
// import { data } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Navbar from './Navbar';


// const Hero = () => {
//     const images = [
//         "https://i.pinimg.com/736x/75/a9/70/75a970e9421e08d9ad9aa0fe2d784f60.jpg",
//         "https://i.pinimg.com/736x/f7/a2/68/f7a2685df2589162c0e0d7f613a88d88.jpg",
//         "https://i.pinimg.com/736x/25/ea/74/25ea743946e62146e6e3069041e9d4bc.jpg",
//         "https://i.pinimg.com/736x/8b/a1/df/8ba1dfd8f5fd6d61a8e7fbe15872e6e2.jpg",
//         "https://i.pinimg.com/736x/51/b4/b1/51b4b15092f170f05c1b06adc98f30ea.jpg",
//         "https://i.pinimg.com/736x/c1/1c/bc/c11cbc24549984a56a74a1244e7c8bb1.jpg",
//         "https://i.pinimg.com/736x/e7/da/a9/e7daa943bac116eb34dee26bb9e89cb6.jpg",
//         "https://i.pinimg.com/736x/47/e3/16/47e3167f9409e4acfedad001ff3715c3.jpg",
//         "https://i.pinimg.com/736x/a3/db/d2/a3dbd20881869e901e175a0790d44d9a.jpg",
//         "https://i.pinimg.com/736x/37/57/60/37576080fb03307c27a70749e30f3e26.jpg",
//         "https://i.pinimg.com/736x/0d/11/b5/0d11b55470eaa84ce1aec21fbb678300.jpg",
//         "https://i.pinimg.com/736x/3d/57/d1/3d57d16d9bb64aa164ce46e03c58e6c9.jpg",
//         "https://i.pinimg.com/736x/01/1d/e8/011de871e2b29b86ff8ab405466cd87e.jpg",
//         "https://i.pinimg.com/736x/9d/d3/a6/9dd3a66b1546e52f19ae0e502295a91b.jpg",
//         "https://i.pinimg.com/736x/9a/66/00/9a6600d9670b7d8e12d314b894bf1bf1.jpg",
//     ];

//     const fadeInUp = {
//         hidden: { opacity: 0, y: 60 },
//         visible: (i = 1) => ({
//             opacity: 1,
//             y: 0,
//             transition: {
//                 delay: i * 0.3,
//                 duration: 0.8,
//                 ease: "easeOut",
//             }
//         })
//     };

//     const containerVariant = {
//         hidden: {},
//         visible: {
//             transition: { staggerChildren: 0.15 }
//         }
//     };

//     const imageVariant = {
//         hidden: { opacity: 0, scale: 0.8 },
//         visible: {
//             opacity: 1,
//             scale: 1,
//             transition: { duration: 0.6, ease: "easeOut" }
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="relative  overflow-hidden h-screen bg-gradient-to-l from-pink-400 to-blue-300">
//                 <div className="pt-20 sm:pt-24 sm:pb-40 lg:pt-0 lg:pb-48">
//                     <div className="relative mx-auto  flex flex-col lg:flex-row justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
//                         <div className="max-w-2xl z-10  px-6 sm:px-0 text-center lg:text-left rounded-lg">
//                             <div className="border-l-8  border-rose-300 pl-6 sm:pl-8 lg:mt-40">
//                                 <motion.span
//                                     className="block  text-3xl sm:text-4xl font-playfair text-pink-600 italic tracking-wider"
//                                     custom={1}
//                                     variants={fadeInUp}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     Welcome to
//                                 </motion.span>

//                                 <motion.h1
//                                     className="text-5xl  sm:text-6xl font-cormorant font-semibold text-slate-900 tracking-tight"
//                                     custom={2}
//                                     variants={fadeInUp}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     Kanchan Wear's
//                                 </motion.h1>

//                                 <motion.p
//                                     className="mt-4  text-xl text-slate-600 font-poppins font-medium italic border-t border-slate-200 pt-4"
//                                     custom={3}
//                                     variants={fadeInUp}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     Your Style, Your Story.
//                                 </motion.p>

//                                 <motion.p
//                                     className="mt-7 text-lg sm:text-xl text-slate-500 font-poppins font-light leading-relaxed max-w-lg"
//                                     custom={4}
//                                     variants={fadeInUp}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     Where fashion meets elegance — redefine your wardrobe with timeless, expressive designs.
//                                 </motion.p>

//                                 <motion.div
//                                     className="mt-12"
//                                     custom={5}
//                                     variants={fadeInUp}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     <motion.a
//                                         whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
//                                         whileTap={{ scale: 0.95 }}
//                                         href="/shop"
//                                         className="inline-flex items-center rounded-full bg-pink-400 px-8 py-3.5 text-lg font-medium text-white transition-all duration-300 hover:bg-pink-700 font-poppins border border-white hover:border-rose-800 shadow-xs hover:shadow-sm"
//                                     >
//                                         Explore
//                                         <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                                         </svg>
//                                     </motion.a>
//                                 </motion.div>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Hero;









import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

// Color constants for consistent styling
const COLORS = {
    primary: {
        light: '#fbcfe8',
        medium: '#ec4899',
        dark: '#be185d'
    },
    secondary: {
        light: '#e9d5ff',
        medium: '#a855f7',
        dark: '#7e22ce'
    },
    accent: '#f59e0b',
    neutral: {
        light: '#f3f4f6',
        medium: '#e5e7eb',
        dark: '#374151'
    }
};

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
        }
    })
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const floatingOrbs = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
        opacity: [0.1, 0.2, 0.1],
        scale: 1,
        transition: {
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.3
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "backOut"
        }
    },
    hover: {
        scale: 1.05,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
    }
};

const textGlow = {
    hidden: { textShadow: "0 0 0px rgba(236, 72, 153, 0)" },
    visible: {
        textShadow: [
            "0 0 0px rgba(236, 72, 153, 0)",
            "0 0 10px rgba(236, 72, 153, 0.5)",
            "0 0 0px rgba(236, 72, 153, 0)"
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

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

    const IMAGES = {
        models: [
            "https://randomuser.me/api/portraits/women/21.jpg",
            "https://randomuser.me/api/portraits/women/22.jpg",
            "https://randomuser.me/api/portraits/women/23.jpg"
        ]
    };

    return (
        <>
            <Navbar />

            {/* Main Hero Section */}
            <div className="relative overflow-hidden h-screen" style={{ backgroundColor: COLORS.neutral.light }}>
                {/* Floating decorative elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: Math.random() * 120 + 30,
                                height: Math.random() * 120 + 30,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                backgroundColor: i % 3 === 0 ? COLORS.primary.light :
                                    i % 2 === 0 ? COLORS.secondary.light : COLORS.accent
                            }}
                            variants={floatingOrbs}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                        />
                    ))}
                </div>

                <div className="relative z-10 pt-24 pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-col lg:flex-row items-center justify-between gap-12"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Text Content */}
                        <div className="lg:w-1/2 z-20">
                            <motion.div
                                className="relative pl-8 border-l-4"
                                style={{ borderColor: COLORS.primary.medium }}
                                variants={fadeInUp}
                                custom={0}
                            >
                                <motion.span
                                    className="block text-4xl sm:text-5xl font-serif italic tracking-wider"
                                    style={{ color: COLORS.primary.medium }}
                                    variants={textGlow}
                                >
                                    Elegance Redefined
                                </motion.span>

                                <motion.h1
                                    className="mt-2 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                                    style={{ color: COLORS.neutral.dark }}
                                    variants={fadeInUp}
                                    custom={1}
                                >
                                    Kanchan <span style={{ color: COLORS.primary.dark }}>Wear</span>
                                </motion.h1>

                                <motion.p
                                    className="mt-6 text-xl font-medium leading-relaxed"
                                    style={{ color: COLORS.neutral.dark }}
                                    variants={fadeInUp}
                                    custom={1.5}
                                >
                                    Discover our exclusive collection of women's fashion that blends contemporary style with timeless elegance.
                                </motion.p>

                                <motion.div
                                    className="mt-10 flex flex-wrap gap-4"
                                    variants={fadeInUp}
                                    custom={2}
                                >
                                    <motion.a
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0px 8px 25px ${COLORS.primary.light}50`
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/shop"
                                        className="px-8 py-4 rounded-full text-white font-medium text-lg shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${COLORS.primary.medium}, ${COLORS.primary.dark})`
                                        }}
                                    >
                                        Shop Now
                                        <svg className="ml-3 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.a>

                                    <motion.a
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: `0px 8px 25px ${COLORS.secondary.light}30`
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/collections"
                                        className="px-8 py-4 hidden md:flex rounded-full font-medium text-lg shadow-md"
                                        style={{
                                            backgroundColor: 'white',
                                            border: `2px solid ${COLORS.neutral.medium}`,
                                            color: COLORS.neutral.dark
                                        }}
                                    >
                                        View Collections
                                    </motion.a>
                                </motion.div>

                                <motion.div
                                    className="mt-12 flex items-center gap-6"
                                    variants={fadeInUp}
                                    custom={2.5}
                                >
                                    <div className="flex -space-x-4">
                                        {IMAGES.models.map((model, i) => (
                                            <motion.img
                                                key={i}
                                                src={model}
                                                alt={`Happy customer ${i}`}
                                                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            />
                                        ))}
                                    </div>
                                    <div style={{ color: COLORS.neutral.dark }}>
                                        <p className="font-medium">Loved by 10,000+ customers</p>
                                        <div className="flex items-center mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5" style={{ color: COLORS.accent }} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                            <span className="ml-2 text-sm">5.0 (2.4k reviews)</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Image Gallery */}
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
                    </motion.div>
                </div>

                {/* Scrolling banner at bottom */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-50 py-4 overflow-hidden"
                    style={{ backgroundColor: COLORS.neutral.medium }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        className="flex whitespace-nowrap"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="inline-flex items-center mx-8">
                                <span className="text-lg font-medium mx-4" style={{ color: COLORS.primary.dark }}>✦</span>
                                <span className="text-lg font-medium" style={{ color: COLORS.neutral.dark }}>New Arrivals</span>
                                <span className="text-lg font-medium mx-4" style={{ color: COLORS.primary.dark }}>✦</span>
                                <span className="text-lg font-medium" style={{ color: COLORS.neutral.dark }}>Summer Sale</span>
                                <span className="text-lg font-medium mx-4" style={{ color: COLORS.primary.dark }}>✦</span>
                                <span className="text-lg font-medium" style={{ color: COLORS.neutral.dark }}>Limited Edition</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Hero;