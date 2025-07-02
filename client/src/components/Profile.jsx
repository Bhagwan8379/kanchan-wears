import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, CreditCard, ShoppingBag, Heart, Settings, LogOut } from "lucide-react";
import { useState } from "react";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("personal");
    const [isEditing, setIsEditing] = useState(false);

    const user = {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Apt 4B, New York, NY 10001",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
        joinedDate: "January 2022",
        orders: 12,
        wishlist: 8
    };

    const orders = [
        {
            id: "#ORD-78945",
            date: "2023-10-15",
            status: "Delivered",
            items: 2,
            total: 149.98
        },
        {
            id: "#ORD-78231",
            date: "2023-09-28",
            status: "Processing",
            items: 1,
            total: 129.99
        },
        {
            id: "#ORD-77654",
            date: "2023-08-10",
            status: "Cancelled",
            items: 1,
            total: 120.00
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Account</h1>
                    <p className="text-gray-600 mt-1">Manage your profile and orders</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:w-1/4"
                    >
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            {/* Profile Card */}
                            <div className="p-6 text-center border-b border-gray-100">
                                <div className="relative mx-auto w-20 h-20 rounded-full overflow-hidden mb-4">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="absolute bottom-0 right-0 bg-pink-500 text-white p-1 rounded-full"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </motion.button>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">Member since {user.joinedDate}</p>

                                <div className="flex justify-center gap-4 mt-4">
                                    <div className="text-center">
                                        <p className="font-semibold text-gray-900">{user.orders}</p>
                                        <p className="text-gray-500 text-xs">Orders</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold text-gray-900">{user.wishlist}</p>
                                        <p className="text-gray-500 text-xs">Wishlist</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="p-4">
                                <ul className="space-y-2">
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("personal")}
                                            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === "personal" ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            <User className="w-5 h-5 mr-3" />
                                            Personal Info
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("orders")}
                                            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === "orders" ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            <ShoppingBag className="w-5 h-5 mr-3" />
                                            My Orders
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("wishlist")}
                                            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === "wishlist" ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            <Heart className="w-5 h-5 mr-3" />
                                            Wishlist
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("payments")}
                                            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === "payments" ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            <CreditCard className="w-5 h-5 mr-3" />
                                            Payment Methods
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setActiveTab("settings")}
                                            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === "settings" ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            <Settings className="w-5 h-5 mr-3" />
                                            Settings
                                        </button>
                                    </li>
                                </ul>
                            </nav>

                            {/* Logout */}
                            <div className="p-4 border-t border-gray-100">
                                <button className="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                                    <LogOut className="w-5 h-5 mr-3" />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:w-3/4"
                    >
                        {activeTab === "personal" && (
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                    <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="text-pink-500 hover:text-pink-600 font-medium"
                                    >
                                        {isEditing ? "Cancel" : "Edit"}
                                    </button>
                                </div>

                                <div className="p-6">
                                    {isEditing ? (
                                        <motion.form
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        defaultValue={user.name}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                                    <input
                                                        type="email"
                                                        defaultValue={user.email}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                                    <input
                                                        type="tel"
                                                        defaultValue={user.phone}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                                    <textarea
                                                        defaultValue={user.address}
                                                        rows={3}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-3 pt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsEditing(false)}
                                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-6"
                                        >
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mr-4">
                                                    <User className="w-6 h-6 text-gray-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                                                    <p className="mt-1 text-gray-900">{user.name}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mr-4">
                                                    <Mail className="w-6 h-6 text-gray-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                                    <p className="mt-1 text-gray-900">{user.email}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mr-4">
                                                    <Phone className="w-6 h-6 text-gray-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                                    <p className="mt-1 text-gray-900">{user.phone}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 mr-4">
                                                    <MapPin className="w-6 h-6 text-gray-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                                                    <p className="mt-1 text-gray-900">{user.address}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        )}

                        {activeTab === "orders" && (
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-semibold text-gray-900">My Orders</h2>
                                </div>

                                <div className="divide-y divide-gray-100">
                                    {orders.map((order, index) => (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-6 hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{order.id}</h3>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {new Date(order.date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" :
                                                        order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                                                            "bg-red-100 text-red-800"
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                    <p className="text-gray-900 font-medium mt-2">${order.total.toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-between items-center">
                                                <p className="text-sm text-gray-500">{order.items} item{order.items > 1 ? 's' : ''}</p>
                                                <button className="text-sm text-pink-500 hover:text-pink-600 font-medium">
                                                    View Details
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "wishlist" && (
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-semibold text-gray-900">Wishlist</h2>
                                    <p className="text-gray-500 mt-1">8 items</p>
                                </div>

                                <div className="p-6 text-center">
                                    <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900">Your wishlist is empty</h3>
                                    <p className="text-gray-500 mt-2">Save items you love for easy access later</p>
                                    <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                                        Start Shopping
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "payments" && (
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
                                </div>

                                <div className="p-6">
                                    <div className="border border-gray-200 rounded-lg p-4 mb-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <CreditCard className="w-6 h-6 text-gray-400 mr-3" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">Visa •••• 4242</h3>
                                                    <p className="text-sm text-gray-500">Expires 05/2025</p>
                                                </div>
                                            </div>
                                            <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-pink-300 hover:text-pink-500 transition-colors">
                                        + Add New Payment Method
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "settings" && (
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                                                    <p className="text-sm text-gray-500">Receive updates about your orders</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                                                </label>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                                                    <p className="text-sm text-gray-500">Get text messages about shipping updates</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
                                        <button className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-left">
                                            Change Password
                                        </button>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Account Management</h3>
                                        <button className="w-full py-3 px-4 border border-red-300 rounded-lg text-red-500 hover:bg-red-50 transition-colors text-left">
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile;