import { motion } from "framer-motion";
import { CheckCircle, Truck, Clock, ShoppingBag, Home, Package } from "lucide-react";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const OrderSuccess = () => {
    const [order, setOrder] = useState({
        id: "#ORD-78945",
        date: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        items: [
            {
                name: "Floral Summer Dress",
                image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
                price: 59.99,
                quantity: 1,
            },
            {
                name: "Denim Jacket",
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
                price: 89.99,
                quantity: 1,
            },
        ],
        total: 149.98,
        shippingAddress: "123 Main St, Apt 4B, New York, NY 10001",
    });

    // Fire confetti on component mount
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });

        // Small additional bursts
        const timer1 = setTimeout(() => {
            confetti({
                particleCount: 30,
                spread: 60,
                origin: { x: 0.8, y: 0.6 },
            });
        }, 300);

        const timer2 = setTimeout(() => {
            confetti({
                particleCount: 30,
                spread: 60,
                origin: { x: 0.2, y: 0.6 },
            });
        }, 600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const deliverySteps = [
        {
            id: 1,
            name: "Order Placed",
            description: "We've received your order",
            icon: ShoppingBag,
            status: "complete",
        },
        {
            id: 2,
            name: "Processing",
            description: "We're preparing your order",
            icon: Package,
            status: "complete",
        },
        {
            id: 3,
            name: "Shipped",
            description: "Your order is on the way",
            icon: Truck,
            status: "current",
        },
        {
            id: 4,
            name: "Delivered",
            description: "Expected delivery",
            icon: CheckCircle,
            status: "upcoming",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto">
                {/* Success Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="relative inline-block">
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                            className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            ✓
                        </motion.div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                    </p>
                </motion.div>

                {/* Delivery Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
                >
                    <div className="p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Status</h2>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

                            <div className="space-y-8">
                                {deliverySteps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="relative pl-12"
                                    >
                                        <div
                                            className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${step.status === "complete"
                                                    ? "bg-green-100 text-green-600"
                                                    : step.status === "current"
                                                        ? "bg-pink-100 text-pink-600 ring-4 ring-pink-200"
                                                        : "bg-gray-100 text-gray-400"
                                                }`}
                                        >
                                            <step.icon
                                                className={`w-4 h-4 ${step.status === "complete" ? "text-green-600" : step.status === "current" ? "text-pink-600" : "text-gray-400"
                                                    }`}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{step.name}</h3>
                                            <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                                            {step.id === 4 && (
                                                <p className="text-sm text-pink-600 font-medium mt-1">
                                                    {new Date(order.estimatedDelivery).toLocaleDateString("en-US", {
                                                        weekday: "long",
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Order Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
                >
                    <div className="p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-gray-500">Order Number</span>
                                <span className="font-medium text-gray-900">{order.id}</span>
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-gray-500">Order Date</span>
                                <span className="font-medium text-gray-900">
                                    {new Date(order.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between items-start">
                                <span className="text-gray-500">Shipping Address</span>
                                <span className="font-medium text-gray-900 text-right">{order.shippingAddress}</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="font-medium text-gray-900 mb-4">Items</h3>
                            <div className="space-y-4">
                                {order.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                                            <p className="text-gray-500 text-sm">${item.price.toFixed(2)} × {item.quantity}</p>
                                        </div>
                                        <div className="text-gray-900 font-medium">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6 mt-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="text-gray-900">${order.total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-500">Shipping</span>
                                <span className="text-gray-900">Free</span>
                            </div>
                            <div className="flex justify-between items-center font-bold text-lg text-gray-900 mt-4">
                                <span>Total</span>
                                <span>${order.total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="/shop"
                        className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors text-center flex items-center justify-center gap-2"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        Continue Shopping
                    </a>
                    <a
                        href="/account/orders"
                        className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center flex items-center justify-center gap-2"
                    >
                        <Package className="w-5 h-5" />
                        View Order Details
                    </a>
                    <a
                        href="/"
                        className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center flex items-center justify-center gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </a>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 1.5 }}
                    className="absolute top-20 right-10 w-32 h-32 rounded-full bg-pink-300 filter blur-3xl -z-10"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 1.7 }}
                    className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-300 filter blur-3xl -z-10"
                />
            </div>
        </motion.div>
    );
};

export default OrderSuccess;