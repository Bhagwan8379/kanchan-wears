import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = () => {
    const navigate = useNavigate();
    const contactInfo = [
        {
            icon: <MapPin className="text-pink-500" size={24} />,
            title: "Our Boutique",
            text: "123 Fashion Avenue, Style District, New York, NY 10001",
        },
        {
            icon: <Phone className="text-pink-500" size={24} />,
            title: "Call Us",
            text: "+1 (555) 123-4567",
        },
        {
            icon: <Mail className="text-pink-500" size={24} />,
            title: "Email Us",
            text: "hello@eleganceboutique.com",
        },
        {
            icon: <Clock className="text-pink-500" size={24} />,
            title: "Working Hours",
            text: "Mon-Sat: 10:00 AM - 8:00 PM\nSun: 12:00 PM - 6:00 PM",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const formVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            {/* Header */}
            <div className="px-4 pt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition font-medium"
                >
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
            </div>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="py-12 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Get In Touch</h1>
                <p className="text-lg text-pink-600 max-w-2xl mx-auto">
                    We'd love to hear from you! Whether you have a question about our collections, need styling advice, or want to visit our boutique.
                </p>
            </motion.div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Info */}
                    <div>
                        <motion.div variants={itemVariants} className="mb-10">
                            <h2 className="text-2xl font-semibold text-black mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-4 p-4 bg-white border border-pink-100 rounded-lg shadow hover:shadow-md transition-shadow"
                                    >
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h3 className="font-medium text-black">{item.title}</h3>
                                            <p className="text-gray-700 whitespace-pre-line">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-black mb-4">Our Location</h2>
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179603!2d-73.9888759241646!3d40.7484409713895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        variants={formVariants}
                        className="bg-white p-8 rounded-xl shadow-lg border border-pink-100  min-h-[500px] max-h-[100vh] overflow-auto">
                        <h2 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition text-black"
                                        placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition text-black"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-pink-300 rounded-lg  focus:ring-2 focus:ring-pink-400 focus:border-pink-400  outline-none transition text-black"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none transition text-black"
                                    placeholder="Tell us about your inquiry..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
