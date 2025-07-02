import { motion } from 'framer-motion';
import { ChevronLeft, Clock, CheckCircle, Truck, XCircle, CreditCard, ShoppingBag } from "lucide-react";

const OrderHistory = () => {
    const orders = [
        {
            id: "#ORD-78945",
            date: "2023-10-15",
            status: "Delivered",
            items: [
                {
                    name: "Floral Summer Dress",
                    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
                    price: 59.99,
                    quantity: 1,
                    color: "Pink",
                    size: "M"
                },
                {
                    name: "Denim Jacket",
                    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
                    price: 89.99,
                    quantity: 1,
                    color: "Blue",
                    size: "L"
                }
            ],
            total: 149.98,
            paymentMethod: "Visa •••• 4242",
            trackingNumber: "UPS-789456123",
            deliveryDate: "2023-10-20",
            address: "123 Main St, Apt 4B, New York, NY 10001"
        },
        {
            id: "#ORD-78231",
            date: "2023-09-28",
            status: "Processing",
            items: [
                {
                    name: "Leather Crossbody Bag",
                    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
                    price: 129.99,
                    quantity: 1,
                    color: "Black",
                    size: "One Size"
                }
            ],
            total: 129.99,
            paymentMethod: "Mastercard •••• 5555",
            trackingNumber: null,
            deliveryDate: null,
            address: "123 Main St, Apt 4B, New York, NY 10001"
        },
        {
            id: "#ORD-77654",
            date: "2023-08-10",
            status: "Cancelled",
            items: [
                {
                    name: "Running Shoes",
                    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
                    price: 120.00,
                    quantity: 1,
                    color: "White/Red",
                    size: "10"
                }
            ],
            total: 120.00,
            paymentMethod: "PayPal",
            trackingNumber: null,
            deliveryDate: null,
            address: "123 Main St, Apt 4B, New York, NY 10001"
        }
    ];
    const getStatusIcon = (status) => {
        switch (status) {
            case "Delivered":
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case "Processing":
                return <Clock className="w-5 h-5 text-yellow-500" />;
            case "Shipped":
                return <Truck className="w-5 h-5 text-blue-500" />;
            case "Cancelled":
                return <XCircle className="w-5 h-5 text-red-500" />;
            default:
                return <Clock className="w-5 h-5 text-gray-500" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <motion.div
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4"
                    >
                        <a
                            href="#"
                            className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium text-sm sm:text-base"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                            Back to Account
                        </a>
                    </motion.div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Order History</h1>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">View your past purchases and order status</p>
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {orders.map((order) => (
                        <motion.div
                            key={order.id}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                        >
                            {/* Order Header */}
                            <div className="border-b border-gray-100 p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Order {order.id}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Placed on {new Date(order.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {getStatusIcon(order.status)}
                                        <span className={`font-medium ${order.status === "Delivered" ? "text-green-600" :
                                            order.status === "Processing" ? "text-yellow-600" :
                                                order.status === "Cancelled" ? "text-red-600" :
                                                    "text-blue-600"
                                            }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Order Items */}
                            <div className="p-4 sm:p-6">
                                <div className="space-y-4">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900 text-sm sm:text-base">{item.name}</h4>
                                                <p className="text-gray-500 text-sm mt-1">${item.price.toFixed(2)} × {item.quantity}</p>
                                                <div className="flex gap-3 mt-2">
                                                    {item.color && (
                                                        <span className="text-xs sm:text-sm text-gray-500">Color: {item.color}</span>
                                                    )}
                                                    {item.size && (
                                                        <span className="text-xs sm:text-sm text-gray-500">Size: {item.size}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="border-t border-gray-100 p-4 sm:p-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-2">Payment method</h4>
                                        <div className="flex items-center gap-2">
                                            <CreditCard className="w-5 h-5 text-gray-500" />
                                            <span className="text-gray-600 text-sm sm:text-base">{order.paymentMethod}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-2">Shipping address</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">{order.address}</p>
                                    </div>
                                </div>

                                {order.trackingNumber && (
                                    <div className="mt-4">
                                        <h4 className="font-medium text-gray-900 text-sm sm:text-base mb-2">Tracking information</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            {order.trackingNumber} • Delivered on {new Date(order.deliveryDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="text-right sm:text-left">
                                        <p className="text-gray-500 text-sm sm:text-base">Total paid</p>
                                        <p className="font-bold text-gray-900 text-lg sm:text-xl">${order.total.toFixed(2)}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                            View Details
                                        </button>
                                        <button className="px-4 py-2 bg-pink-500 text-white rounded-md text-sm sm:text-base font-medium hover:bg-pink-600 transition-colors">
                                            Buy Again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State (commented out) */}
                {/* <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                    <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                    <p className="text-gray-500 mb-6">Your order history will appear here once you make purchases.</p>
                    <button className="px-6 py-3 bg-pink-500 text-white rounded-md font-medium hover:bg-pink-600 transition-colors">
                        Start Shopping
                    </button>
                </div> */}
            </div>
        </motion.div>
    );
};

export default OrderHistory;