import { motion } from "framer-motion";
import { useEffect, useState } from "react";


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
export default Carousel