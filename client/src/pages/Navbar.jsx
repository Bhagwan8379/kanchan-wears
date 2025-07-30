import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, User, ShoppingCart, Menu, X, Search, LogIn } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    const navLinks = [
        { path: "/collections", label: "Collections", icon: null },
        { path: "/products", label: "products", icon: null },
        { path: "/wishlist", label: "Wishlist", icon: Heart },
        { path: "/profile", label: "Account", icon: User },
        { path: "/cart", label: "Cart", icon: ShoppingCart }
    ];

    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow-sm border-b border-pink-100">
            {/* Top VIP Banner */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-400 text-white text-xs py-1 px-4 text-center">
                MEMBERS GET 20% OFF + FREE EXPRESS SHIPPING
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Luxury Brand"
                            className="h-10 w-10 mr-2"
                        />
                        <span className="text-2xl font-serif font-bold text-pink-600 tracking-tight">
                            Kanchan<span className="text-gray-800">Wear</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-gray-700 hover:text-pink-600 font-medium text-sm uppercase tracking-wider transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Search and Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search Bar - Desktop */}
                        <form
                            onSubmit={handleSearch}
                            className="hidden md:flex items-center bg-pink-50 rounded-full px-3 py-1"
                        >
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search luxury items..."
                                className="bg-transparent border-none focus:outline-none text-sm w-40 placeholder-pink-300 text-pink-700"
                            />
                            <button type="submit" className="text-pink-500 hover:text-pink-700">
                                <Search size={16} />
                            </button>
                        </form>

                        {/* Icons - Desktop */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {navLinks.slice(2).map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="p-2 text-gray-600 hover:text-pink-600 relative"
                                >
                                    {link.icon && <link.icon size={18} />}

                                </Link>
                            ))}
                            <Link
                                to="/login"
                                className="ml-2 px-4 py-2 bg-pink-600 text-white text-xs font-medium uppercase tracking-wider rounded-full hover:bg-pink-700 transition-colors flex items-center"
                            >
                                <LogIn size={16} className="mr-1" />
                                Login
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-gray-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-white">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={logo}
                                    alt="Luxury Brand"
                                    className="h-10 w-10 mr-2"
                                />
                                <span className="text-xl font-serif font-bold text-pink-600">
                                    Kanchan<span className="text-gray-800">Wear</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="mb-6 flex items-center bg-pink-50 rounded-full px-3 py-2">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search luxury items..."
                                className="bg-transparent border-none focus:outline-none text-sm w-full placeholder-pink-300 text-pink-700"
                            />
                            <button type="submit" className="text-pink-500">
                                <Search size={16} />
                            </button>
                        </form>

                        {/* Mobile Navigation */}
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.path}
                                    onClick={() => handleNavigation(link.path)}
                                    className="flex items-center justify-between py-3 border-b border-pink-50 text-gray-700 hover:text-pink-600"
                                >
                                    <span className="font-medium">{link.label}</span>
                                    {link.icon && <link.icon size={18} className="text-pink-400" />}
                                </button>
                            ))}
                            <button
                                onClick={() => handleNavigation("/login")}
                                className="mt-6 px-6 py-3 bg-pink-600 text-white font-medium rounded-full flex items-center justify-center space-x-2"
                            >
                                <LogIn size={16} />
                                <span> Login</span>
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;