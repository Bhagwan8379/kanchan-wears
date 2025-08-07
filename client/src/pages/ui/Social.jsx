import { Youtube, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Social = () => {
    const socialPlatforms = [
        {
            name: "Instagram",
            icon: <Instagram size={28} />,
            username: "@KanchanWears",
            url: "https://instagram.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-amber-500",
            hoverColor: "hover:shadow-[0_10px_40px_-5px_rgba(224,36,94,0.4)]",
            ringColor: "ring-purple-500/30",
            stats: "125K+ Followers"
        },
        {
            name: "Facebook",
            icon: <Facebook size={28} />,
            username: "/KanchanWears",
            url: "https://facebook.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-blue-600 to-blue-400",
            hoverColor: "hover:shadow-[0_10px_40px_-5px_rgba(59,89,152,0.4)]",
            ringColor: "ring-blue-500/30",
            stats: "89K+ Likes"
        },
        {
            name: "Pinterest",
            icon: <MessageCircle size={28} />,
            username: "KanchanWears",
            url: "https://pinterest.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-red-600 to-red-400",
            hoverColor: "hover:shadow-[0_10px_40px_-5px_rgba(230,0,35,0.4)]",
            ringColor: "ring-red-500/30",
            stats: "42K+ Saves"
        },
        {
            name: "YouTube",
            icon: <Youtube size={28} />,
            username: "Kanchan Wears",
            url: "https://youtube.com/KanchanWears",
            bgColor: "bg-gradient-to-br from-red-700 to-red-600",
            hoverColor: "hover:shadow-[0_10px_40px_-5px_rgba(255,0,0,0.4)]",
            ringColor: "ring-red-600/30",
            stats: "35K+ Subscribers"
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        hover: {
            y: -12,
            scale: 1.05,
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const title = {
        hidden: { opacity: 0, y: -30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const floatingCircle = {
        animate: {
            x: [0, 20, 0, -20, 0],
            y: [0, 30, 20, 10, 0],
            rotate: [0, 5, 0, -5, 0],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="social" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
            {/* Floating decorative elements */}
            <motion.div
                className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-rose-100 opacity-20 blur-3xl"
                variants={floatingCircle}
                animate="animate"
            />

            <motion.div
                className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-indigo-100 opacity-20 blur-3xl"
                variants={floatingCircle}
                animate="animate"
                transition={{ delay: 5, duration: 25 }}
            />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div
                    variants={title}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-5xl font-bold mb-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-fuchsia-600">
                            Join Our Fashion Community
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={title}
                        transition={{ delay: 0.2 }}
                    >
                        Follow us for styling tips, new arrivals, and exclusive offers. Tag us with <span className="font-medium text-rose-600">#KanchanWears</span> to be featured!
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {socialPlatforms.map((platform, index) => (
                        <motion.a
                            key={index}
                            variants={item}
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${platform.bgColor} ${platform.hoverColor} ${platform.ringColor} rounded-3xl p-8 text-white relative overflow-hidden group transition-all duration-500 h-full flex flex-col items-center justify-center ring-2 hover:ring-4`}
                        >
                            {/* Animated background elements */}
                            <motion.div
                                className="absolute inset-0 opacity-20"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 10 }}
                            >
                                <div className="absolute w-6 h-6 rounded-full bg-white top-1/4 left-1/4 animate-pulse"></div>
                                <div className="absolute w-4 h-4 rounded-full bg-white bottom-1/4 right-1/4 animate-pulse delay-500"></div>
                                <div className="absolute w-5 h-5 rounded-full bg-white top-1/3 right-1/3 animate-pulse delay-700"></div>
                            </motion.div>

                            <motion.div
                                className="mb-6 p-5 rounded-full bg-white/10 backdrop-blur-sm shadow-inner"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -10, 5, 0],
                                    transition: { duration: 0.7 }
                                }}
                            >
                                {platform.icon}
                            </motion.div>

                            <div className="text-center z-10">
                                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                                <p className="text-white/90 mb-1 text-lg">{platform.username}</p>
                                <p className="text-white/70 text-sm mb-6">{platform.stats}</p>
                            </div>

                            <motion.div
                                className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium flex items-center gap-2 z-10"
                                whileHover={{
                                    backgroundColor: "rgba(255,255,255,0.3)",
                                    x: 8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Follow Us
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${platform.bgColor} rounded-3xl blur-md opacity-30`}></div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Social