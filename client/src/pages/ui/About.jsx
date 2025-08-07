import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891",
            alt: "Elegant ethnic wear collection",
            gradient: "from-purple-500 to-fuchsia-600"
        },
        {
            src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
            alt: "Casual western wear selection",
            gradient: "from-amber-500 to-orange-600"
        },
        {
            src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
            alt: "Party wear outfits",
            gradient: "from-rose-500 to-pink-600"
        }
    ];

    const features = [
        "Handpicked collections from top designers",
        "Ethically sourced fabrics and materials",
        "Personalized styling consultations"
    ];

    const navigate = useNavigate();

    // Animation variants
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
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="about" className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-white to-rose-50">
            {/* Floating decorative elements */}
            <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose-100 opacity-20 blur-3xl"
                animate={{
                    x: [0, -15, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
                className="max-w-6xl mx-auto relative z-10"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Gallery */}
                    <motion.div
                        variants={container}
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-5"
                    >
                        {galleryImages.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="relative group overflow-hidden rounded-2xl shadow-xl"
                                whileHover={{ y: -10 }}
                            >
                                <div className="absolute inset-0 z-10">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                </div>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <motion.button
                                        className="text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm"
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        View Collection
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        variants={item}
                        className="w-full lg:w-1/2 text-left"
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-fuchsia-600">
                                Our Fashion Story
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-700 text-lg mb-8 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At Kanchan Wears, we believe fashion should celebrate your individuality. Founded in 2024, we've grown from a small boutique to a beloved destination for women who appreciate quality craftsmanship and trend-forward designs.
                        </motion.p>

                        <motion.div
                            className="mb-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-2xl font-semibold text-rose-700 mb-4">
                                Why Choose Us
                            </h3>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start"
                                        variants={item}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            className="flex-shrink-0 mr-4 mt-1"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <svg
                                                className="w-6 h-6 text-rose-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <span className="text-gray-700 text-lg">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.button
                                onClick={() => navigate("/contact")}
                                className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white font-medium rounded-full flex items-center gap-3 group"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(225, 29, 72, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Contact Us</span>
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
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
export default About