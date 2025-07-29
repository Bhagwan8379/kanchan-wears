import { motion } from "framer-motion";
import { Heart, ShoppingBag, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    const wishlistItems = [
        {
            id: 1,
            name: "Floral Summer Dress",
            price: 59.99,
            size: "M",
            color: "Pink",
            image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            inStock: true,
        },
        {
            id: 2,
            name: "Elegant Blouse",
            price: 39.99,
            size: "S",
            color: "White",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            inStock: true,
        },
        {
            id: 3,
            name: "High-Waist Jeans",
            price: 49.99,
            size: "28",
            color: "Blue",
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            inStock: false,
        },
        {
            id: 4,
            name: "Cashmere Sweater",
            price: 89.99,
            size: "L",
            color: "Beige",
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            inStock: true,
        },
    ];
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Your Wishlist
                    </motion.h1>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-16 h-1 bg-pink-500 rounded-full"
                        ></motion.div>
                    </div>
                </div>

                <div className="flex flex-col">
                    {/* Wishlist Items */}
                    <motion.div
                        layout
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <Heart className="text-pink-500 w-6 h-6 mr-2" />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {wishlistItems.length} {wishlistItems.length === 1 ? "Item" : "Items"} in your wishlist
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {wishlistItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                    >
                                        <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors">
                                            <X className="w-5 h-5" />
                                        </button>

                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-64 object-cover"
                                            />
                                            {!item.inStock && (
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                                    <span className="text-white font-medium bg-pink-500 px-3 py-1 rounded-full">
                                                        Out of Stock
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4 cursor-pointer">
                                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-2">
                                                {item.color} | Size: {item.size}
                                            </p>
                                            <p className="text-lg font-semibold text-gray-900 mb-4">
                                                ${item.price.toFixed(2)}
                                            </p>

                                            <div className="flex space-x-2">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    disabled={!item.inStock}
                                                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${item.inStock
                                                        ? "bg-pink-500 text-white hover:bg-pink-600"
                                                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                                        }`}
                                                >
                                                    <ShoppingBag className="w-5 h-5 inline mr-2" />
                                                    Add to Bag
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Continue Shopping */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-center"
                    >
                        <a
                            href=""
                            className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium text-lg"
                        >
                            Continue Shopping
                            <ChevronRight className="w-5 h-5 ml-1" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Wishlist;