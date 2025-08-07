import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';




const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Sarees",
            image: "https://i.pinimg.com/1200x/0a/97/33/0a97339223f04cbdd5a27a5cd579d226.jpg",
            gradient: "from-fuchsia-500 to-purple-600"
        },
        {
            id: 2,
            name: "Kurtis",
            image: "https://i.pinimg.com/1200x/60/64/f5/6064f5509d60b562189feb2d63fd729b.jpg",
            gradient: "from-amber-400 to-orange-500"
        },
        {
            id: 3,
            name: "Western Wear",
            image: "https://i.pinimg.com/1200x/cc/9b/3f/cc9b3fec3d3e57804c0ac731a600be4e.jpg",
            gradient: "from-blue-400 to-cyan-500"
        },
        {
            id: 4,
            name: "Lehengas",
            image: "https://i.pinimg.com/1200x/25/8f/f9/258ff98f7bf46edbf0d402c0e94ff770.jpg",
            gradient: "from-rose-500 to-pink-600"
        },
        {
            id: 5,
            name: "Tops & Tunics",
            image: "https://i.pinimg.com/1200x/fe/71/56/fe7156eacd27f7574cea5e0d52d933bb.jpg",
            gradient: "from-emerald-400 to-teal-500"
        },
        {
            id: 6,
            name: "Party Wear",
            image: "https://i.pinimg.com/1200x/5a/92/33/5a92339eb9fb4444e70eccb7981f445a.jpg",
            gradient: "from-violet-500 to-purple-600"
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
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
            y: -10,
            transition: { duration: 0.3 }
        }
    };

    const title = {
        hidden: { opacity: 0, y: -30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const navigation = useNavigate();

    return (
        <section id="categories" className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            {/* Floating decorative elements */}
            <motion.div
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-rose-100 opacity-20 blur-3xl"
                animate={{
                    x: [0, 20, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-purple-100 opacity-20 blur-3xl"
                animate={{
                    x: [0, -15, 0],
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div className="text-center mb-16">
                    <motion.h1
                        variants={title}
                        className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-fuchsia-600"
                    >
                        Explore Our Categories
                    </motion.h1>
                    <motion.p
                        variants={title}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover premium fashion pieces crafted with exceptional quality and timeless design
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            variants={item}
                            whileHover="hover"
                            onClick={() => navigation("/details")}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="relative rounded-3xl overflow-hidden h-96">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
                                    <div>
                                        <motion.h3
                                            className="text-white text-2xl font-bold mb-2"
                                            initial={{ y: 20 }}
                                            whileInView={{ y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {cat.name}
                                        </motion.h3>
                                        <motion.button
                                            className="text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all"
                                            whileHover={{
                                                x: 5,
                                                backgroundColor: "rgba(255,255,255,0.2)"
                                            }}
                                        >
                                            View Collection
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Button */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.button
                        onClick={() => navigation("/all-categories")}
                        className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white font-medium rounded-full flex items-center gap-3 group"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(225, 29, 72, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Explore All Categories</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 relative z-10"
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
            </motion.div>
        </section>
    );
};
export default Categories