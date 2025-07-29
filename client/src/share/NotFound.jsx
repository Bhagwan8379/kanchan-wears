import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    // Clothing items for animation
    const clothingItems = [
        { name: "Dress", emoji: "👗", color: "bg-pink-200" },
        { name: "Blouse", emoji: "👚", color: "bg-blue-200" },
        { name: "Skirt", emoji: "👖", color: "bg-purple-200" },
        { name: "Jacket", emoji: "🧥", color: "bg-red-200" },
        { name: "Handbag", emoji: "👜", color: "bg-yellow-200" },
        { name: "Shoes", emoji: "👠", color: "bg-green-200" },
        { name: "Scarf", emoji: "🧣", color: "bg-indigo-200" },
        { name: "Hat", emoji: "👒", color: "bg-teal-200" },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
        },
    };

    const floatingVariants = {
        float: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col items-center justify-center p-4"
        >
            <div className="max-w-4xl w-full text-center px-4 sm:px-6 lg:px-8">
                {/* Main content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8 sm:mb-12"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl sm:text-7xl md:text-8xl font-bold text-pink-500 mb-3 sm:mb-4"
                    >
                        404
                    </motion.h1>
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6"
                    >
                        Oops! Fashion Emergency
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8"
                    >
                        The page you're looking for seems to have walked the runway and never came back.
                        <br className="hidden sm:block" />
                        While we search for it, check out these stylish alternatives:
                    </motion.p>
                </motion.div>

                {/* Floating clothing items */}
                <div className="relative md:h-32 h-20 sm:h-40 mb-8 sm:mb-12 overflow-hidden">
                    {clothingItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={floatingVariants}
                            animate="float"
                            style={{
                                left: `${5 + index * (window.innerWidth < 640 ? 10 : 11)}%`,
                                animationDelay: `${index * 0.5}s`,
                            }}
                            className={`absolute bottom-0 ${item.color} m-2 rounded-full md:w-20 md:h-20 flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                        >
                            {item.emoji}
                        </motion.div>
                    ))}
                </div>

                {/* Scrollable clothing grid */}
                <motion.div
                    variants={containerVariants}
                    className="mb-8 sm:mb-12 max-h-64  md:max-h-96 overflow-y-auto p-2 sm:p-4 bg-white bg-opacity-50 rounded-xl shadow-inner"
                >
                    <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                        {clothingItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover="hover"
                                className={`${item.color} p-3 sm:p-4 md:p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-shadow`}
                                onClick={() => navigate("/shop")}
                            >
                                <span className="text-3xl sm:text-4xl mb-1 sm:mb-2">{item.emoji}</span>
                                <span className="text-sm sm:text-base font-medium text-gray-700">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Back button */}
                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(-1)}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full shadow-lg transition-colors text-sm sm:text-base"
                >
                    Back
                </motion.button>
            </div>

            {/* Footer */}
            <motion.div
                variants={itemVariants}
                className="mt-8 sm:mt-12 text-gray-500 text-xs sm:text-sm"
            >
                © {new Date().getFullYear()} Kanchan Wear - All rights reserved
            </motion.div>
        </motion.div>
    );
};

export default NotFound;