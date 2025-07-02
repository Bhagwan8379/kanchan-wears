import { motion } from "framer-motion";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: "Floral Summer Dress",
            price: 59.99,
            size: "M",
            color: "Pink",
            image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            quantity: 1,
        },
        {
            id: 2,
            name: "Elegant Blouse",
            price: 39.99,
            size: "S",
            color: "White",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            quantity: 2,
        },
        {
            id: 3,
            name: "High-Waist Jeans",
            price: 49.99,
            size: "28",
            color: "Blue",
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
            quantity: 1,
        },
    ];

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 5.99;
    const total = subtotal + shipping;

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
                        Your Shopping Bag
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

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <motion.div
                        layout
                        className="lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex items-center mb-6">
                                <ShoppingBag className="text-pink-500 w-6 h-6 mr-2" />
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"} in your bag
                                </h2>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="py-6 flex flex-col sm:flex-row"
                                    >
                                        <div className="flex-shrink-0 mb-4 sm:mb-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-32 h-32 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="ml-0 sm:ml-6 flex-1">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        {item.name}
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {item.color} | Size: {item.size}
                                                    </p>
                                                </div>
                                                <button className="text-gray-400  hover:text-pink-500 transition-colors">
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="flex items-center border border-gray-200 rounded-lg">
                                                    <button className="px-3 py-1 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="px-4 py-1 text-gray-800">
                                                        {item.quantity}
                                                    </span>
                                                    <button className="px-3 py-1 text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors">
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-lg font-semibold text-gray-900">
                                                    ${item.price.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/3"
                    >
                        <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
                            <div className="p-6 bg-gradient-to-r from-pink-50 to-pink-100">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Order Summary
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                                        <span className="text-lg font-semibold">Total</span>
                                        <span className="text-lg font-semibold text-pink-600">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-8 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-pink-200 transition-all"
                                >
                                    Proceed to Checkout
                                </motion.button>

                                <div className="mt-6 text-center">
                                    <a
                                        href="#"
                                        className="text-pink-500 hover:text-pink-600 font-medium text-sm"
                                    >
                                        Continue Shopping
                                    </a>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Cart;