
import { motion } from 'framer-motion';


const Brands = () => {
    const brands = [
        { name: "CHANEL", logo: "CHANEL", color: "text-black" },
        { name: "DIOR", logo: "DIOR", color: "text-gray-900" },
        { name: "PRADA", logo: "PRADA", color: "text-black" },
        { name: "GUCCI", logo: "GUCCI", color: "text-green-800" },
        { name: "LOUIS VUITTON", logo: "LV", color: "text-amber-800" },
        { name: "BALENCIAGA", logo: "BALENCIAGA", color: "text-black" },
        { name: "VERSACE", logo: "VERSACE", color: "text-yellow-500" },
        { name: "FENDI", logo: "FENDI", color: "text-black" },
        { name: "HERMÈS", logo: "HERMÈS", color: "text-pink-700" },
        { name: "VALENTINO", logo: "VALENTINO", color: "text-red-600" },
        { name: "BURBERRY", logo: "BURBERRY", color: "text-amber-900" },
        { name: "SAINT LAURENT", logo: "SAINT LAURENT", color: "text-black" }
    ];

    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className="relative w-full py-16 bg-white overflow-hidden border-t border-pink-100">

            {/* Infinite Scrolling Brands */}
            <div className="relative overflow-hidden">
                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                {/* First Scroller (LTR) */}
                <motion.div
                    className="flex items-center gap-12 py-4"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <motion.div
                            key={`brand-${index}`}
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`${brand.color} text-5xl font-serif font-medium tracking-tight`}>
                                {brand.logo}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second Scroller (RTL) */}
                <motion.div
                    className="flex items-center gap-12 py-4 mt-6"
                    animate={{
                        x: ["-100%", "0%"],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedBrands.reverse().map((brand, index) => (
                        <motion.div
                            key={`brand-reverse-${index}`}
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`${brand.color} text-5xl font-serif font-medium tracking-tight`}>
                                {brand.logo}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
export default Brands