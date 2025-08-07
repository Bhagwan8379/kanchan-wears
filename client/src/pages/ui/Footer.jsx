import React, { useEffect, useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik"
import clsx from "clsx"
import { toast } from "sonner"
import { motion, AnimatePresence, hover } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import {
    Mail, Phone, MapPin, Youtube, X, User, Lock, Instagram, Facebook,
    Twitter, MessageCircle,
    ShoppingBag,
    Heart,
    LogIn,
    Loader2
} from 'lucide-react';
import { useLoginAdminMutation } from "../../redux/api/authApi";

const Footer = () => {
    const [LoginAdmin, { isSuccess, isLoading, isError, error }] = useLoginAdminMutation()
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const socialLinks = [
        { icon: <Instagram size={20} />, name: "Instagram", url: "https://instagram.com" },
        { icon: <Youtube size={20} />, name: "YouTube", url: "https://youtube.com" },
        { icon: <Twitter size={20} />, name: "Twitter", url: "https://twitter.com" },
        { icon: <Facebook size={20} />, name: "Facebook", url: "https://facebook.com" }
    ]

    const quickLinks = [
        { name: "About Us", id: "about" },
        { name: "Collections", id: "collection" },
        { name: "Categories", id: "categories" },
        { name: "Featured Products", id: "products" },
        { name: "Testimonials", id: "testimonials" }
    ];

    const contactInfo = [
        { icon: <Mail className="md:size-5 size-4" />, text: "info@kanchanfashion.com" },
        { icon: <Phone className="md:size-5 size-4" />, text: "+91 930 977 5035" },
        { icon: <MapPin className="md:size-5 size-4" />, text: "Suyog Complex, Cidco, Chhatrapati Sambhajinagar" }
    ];

    const navigate = useNavigate();
    const phoneNumber = "+918379832391";
    const message = "Hi there! 👋 I'm interested in Kanchan Exclusive Women's Wear. Could you please provide more details?";

    const sendWhatsAppMessage = () => {
        const encodedMsg = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        window.open(url, "_blank");
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: yup.object({
            username: yup.string().required("Enter Username"),
            password: yup.string().required("Enter Password"),
        }),
        onSubmit: (values, { resetForm }) => {
            LoginAdmin(values)
            resetForm()
        }
    })

    const handleClass = arg => clsx({
        "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500": true,
        "border-green-400 ": !formik.errors[arg] && formik.touched[arg],
        "border-red-400": formik.errors[arg] && formik.touched[arg]
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("You're Login Successfully", {
                position: "top-center",
                style: {
                    background: "#fff",
                    color: "#ff4d8d",
                    fontWeight: "600",
                    fontSize: "15px",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    border: "1px solid #ff4d8d",
                    boxShadow: "0 3px 10px rgba(255, 77, 141, 0.2)",
                },
                icon: "💖",
            });
            formik.resetForm();
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError && error?.data?.message) {
            toast.error(error.data.message, {
                position: "top-center",
                style: { background: "#fff", color: "#e11d48", fontWeight: "600", border: "1px solid #e11d48" },
                icon: "⚠️",
            });
        }
    }, [isError, error]);

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={footerVariants}
            className="bg-gray-900 text-gray-100 pt-20 pb-10"
        >
            <pre>{isError || isError && JSON.stringify(error, null, 2)}</pre>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="flex items-center">
                            <div className="bg-gradient-to-r from-indigo-500 to-pink-500 p-2 rounded-lg mr-3">
                                <ShoppingBag size={24} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                                Kanchan Exclusive
                            </h3>
                        </div>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Curated professional wear for the modern woman. Where style meets sophistication in every meticulously crafted piece.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-lg font-semibold text-indigo-300 border-b border-indigo-500/30 pb-2">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 text-[15px] cursor-pointer hover:text-pink-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors duration-300"></span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-lg font-semibold text-indigo-300 border-b border-indigo-500/30 pb-2">Contact Info</h4>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start space-x-3 cursor-pointer text-gray-400 group"
                                    whileHover={{ color: "#EC4899" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-indigo-400 mt-0.5 group-hover:text-pink-500 transition-colors duration-300">
                                        {info.icon}
                                    </span>
                                    <span className="text-[15px] leading-relaxed">{info.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.button
                            onClick={sendWhatsAppMessage}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-4 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                        >
                            <MessageCircle size={16} />
                            Chat on WhatsApp
                        </motion.button>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-lg font-semibold text-indigo-300 border-b border-indigo-500/30 pb-2">Newsletter</h4>
                        <p className="text-gray-400 text-[15px] leading-relaxed">
                            Subscribe to receive updates, access to exclusive deals, and style inspiration.
                        </p>

                        <form className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-500 text-sm"
                                    required
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="absolute right-1 top-1 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </form>

                        <motion.button
                            onClick={() => navigate("/contact")}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg text-sm font-medium border border-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Mail size={16} />
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-8"
                />

                {/* Bottom Footer */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4"
                >
                    <div className="flex items-center gap-4 order-2 md:order-1">
                        <p>
                            &copy; {new Date().getFullYear()} Kanchan Exclusive. All rights reserved.
                        </p>
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xs"
                            >
                                Admin Login
                            </button>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xs">
                                Privacy Policy
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-xs">
                                Terms of Service
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 order-1 md:order-2">
                        <p onClick={sendWhatsAppMessage} className="text-center text-pink-200 hover:text-pink-300 cursor-pointer text-xs md:text-sm transition-colors duration-300">
                            Design & Developed By Bhagwan Gire
                        </p>
                        <Heart size={14} className="text-rose-400 animate-pulse" fill="#f43f5e" />
                    </div>
                </motion.div>
            </div>

            {/* Admin Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center">
                                <div className="flex items-center space-x-3">
                                    <Lock size={24} className="text-white" />
                                    <h2 className="text-xl font-bold text-white">Admin Portal</h2>
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>

                            {/* Form */}
                            <form onSubmit={formik.handleSubmit} className="p-6 space-y-6">
                                <div className="space-y-4">
                                    {/* Username Field */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className={handleClass("username")}
                                            {...formik.getFieldProps("username")}
                                            required
                                        />
                                    </div>
                                    <span className="text-red-400">{formik.errors.username || formik.touched.username}</span>

                                    {/* Password Field */}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className={handleClass("password")}
                                            {...formik.getFieldProps("password")}
                                            required
                                        />
                                    </div>
                                    <span className="text-red-400">{formik.errors.password || formik.touched.password}</span>
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(79, 70, 229, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-3 px-4 ${isLoading ? "cursor-not-allowed opacity-70" : ""
                                        } bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2`}
                                >
                                    {isLoading ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        <LogIn size={18} />
                                    )}
                                    {isLoading ? "Signing In..." : "Sign In"}
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.footer>
    );
};

export default Footer