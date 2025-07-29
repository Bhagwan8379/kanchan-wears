// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Heart, User, ShoppingCart, MenuIcon } from 'lucide-react';
// // import logo from '../assets/logo.png';
// // import { LogIn } from "lucide-react";
// // const Navbar = () => {
// //     const [open, setOpen] = useState(false);
// //     return (
// //         <nav className="w-full fixed top-0 z-50 bg-gradient-to-l md:gap-0  from-pink-400 to-blue-300 backdrop-blur-xl shadow-lg px-6 py-3 flex items-center justify-between border-b border-white/20">
// //             <div className="flex-1 flex items-center">
// //                 <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-gray-800 hover:scale-105 transition-transform">
// //                     <img className='h-10 w-10 object-contain' src={logo} alt="ClothStore Logo" />
// //                     <span className="text-pink-600 font-extrabold">Kanchan</span>
// //                     <span className="font-semibold">Wear's</span>
// //                 </Link>
// //             </div>

// //             <div className="flex-1 md:flex justify-center hidden  px-4">
// //                 <input
// //                     type="text"
// //                     placeholder="Search products..."
// //                     className="w-full max-w-md px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-md hover:shadow-lg transition-shadow"
// //                 />
// //             </div>

// //             <div className="flex-1 flex justify-end items-center gap-3 text-gray-700">
// //                 <Link to="/wishlist" className="hover:bg-white/60 p-2 hidden md:flex rounded-full transition-colors group">
// //                     <Heart className="h-5 w-5 group-hover:scale-110 group-hover:text-pink-600 transition-transform" />
// //                 </Link>
// //                 <Link to="/account" className="hover:bg-white/60 hidden md:flex p-2 rounded-full transition-colors group">
// //                     <User className="h-5 w-5 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
// //                 </Link>
// //                 <Link to="/cart" className="hover:bg-white/60 p-2 hidden md:flex rounded-full transition-colors group">
// //                     <ShoppingCart className="h-5 w-5 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
// //                 </Link>
// //                 <MenuIcon className="h-5 w-5 md:hidden group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
// //             </div>

// //             {open && (
// //                 <div className="absolute right-4 top-14 bg-white shadow-lg rounded-xl p-4 w-48 z-50 animate-fade-in-down">
// //                     <div className="flex flex-col gap-4">
// //                         <button className="flex items-center gap-2 hover:text-pink-600 transition">
// //                             <User className="w-5 h-5" />
// //                             <span>Profile</span>
// //                         </button>
// //                         <button className="flex items-center gap-2 hover:text-red-500 transition">
// //                             <Heart className="w-5 h-5" />
// //                             <span>Wishlist</span>
// //                         </button>
// //                         <a
// //                             href="/login"
// //                             className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
// //                         >
// //                             <LogIn className="w-5 h-5" />
// //                             <span>Login / Register</span>
// //                         </a>
// //                     </div>
// //                 </div>
// //             )}
// //         </nav >
// //     );
// // };

// // export default Navbar;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Heart, User, ShoppingCart, MenuIcon, LogIn, LogInIcon } from 'lucide-react';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//     const [open, setOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleNavigate = (path) => {
//         setOpen(false); // Close modal
//         navigate(path); // Navigate to page
//     };

//     return (
//         <nav className="w-full fixed top-0 z-50 bg-gradient-to-l md:gap-0 from-pink-400 to-blue-300 backdrop-blur-xl shadow-lg px-6 py-3 flex items-center justify-between border-b border-white/20">
//             {/* Logo */}
//             <div className="flex-1 flex items-center">
//                 <Link to="/" className="text-2xl font-bold flex items-center gap-2 text-gray-800 hover:scale-105 transition-transform">
//                     <img className='h-10 w-10 object-contain' src={logo} alt="ClothStore Logo" />
//                     <span className="text-pink-600 font-extrabold">Kanchan</span>
//                     <span className="font-semibold">Wear's</span>
//                 </Link>
//             </div>

//             {/* Search bar (desktop only) */}
//             <div className="flex-1 md:flex justify-center hidden px-4">
//                 <input
//                     type="text"
//                     placeholder="Search products..."
//                     className="w-full max-w-md px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-md hover:shadow-lg transition-shadow"
//                 />
//             </div>

//             {/* Icons */}
//             <div className="flex-1 flex justify-end items-center gap-3 text-gray-700">
//                 <Link to="/wishlist" className="hover:bg-white/60 p-2 hidden md:flex rounded-full transition-colors group">
//                     <Heart className="h-5 w-5 group-hover:scale-110 group-hover:text-pink-600 transition-transform" />
//                 </Link>
//                 <Link to="/profile" className="hover:bg-white/60 hidden md:flex p-2 rounded-full transition-colors group">
//                     <User className="h-5 w-5 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
//                 </Link>
//                 <Link to="/cart" className="hover:bg-white/60 p-2 hidden md:flex rounded-full transition-colors group">
//                     <ShoppingCart className="h-5 w-5 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
//                 </Link>

//                 <button
//                     onClick={() => setOpen(!open)}
//                     aria-label="Toggle Menu"
//                     className="md:hidden p-2 rounded-full group hover:bg-white/60 transition-colors"
//                 >
//                     <MenuIcon className="h-5 w-5 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
//                 </button>
//                 <Link to="/login" >
//                     <span className="tracking-wide hidden md:flex rounded-xl cursor-pointer group-hover:scale-110 hover:text-blue-600 hover:bg-white/70 p-2 transition-transform">Login | Register</span>
//                 </Link>
//             </div>

//             {/* Mobile Modal */}
//             {open && (
//                 <div className="absolute right-4 top-14 w-56 z-[999] bg-white border border-pink-600 backdrop-blur-md shadow-xl rounded-2xl p-4 animate-slide-in-down transition-all duration-300">
//                     <div className="flex flex-col gap-3 text-gray-700 font-medium">
//                         <button
//                             onClick={() => handleNavigate("/profile")}
//                             className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-pink-100/60 border border-pink-400 hover:text-pink-700 hover:shadow-md transition-all duration-200 group"
//                         >
//                             <User className="w-5 h-5 group-hover:scale-110 group-hover:text-pink-600 transition-transform" />
//                             <span className="tracking-wide">Profile</span>
//                         </button>
//                         <button
//                             onClick={() => handleNavigate("/wishlist")}
//                             className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-pink-100/60 border border-pink-400 hover:text-pink-700 hover:shadow-md transition-all duration-200 group"
//                         >
//                             <Heart className="w-5 h-5 group-hover:scale-110 group-hover:text-red-500 transition-transform" />
//                             <span className="tracking-wide">Wishlist</span>
//                         </button>
//                         <button
//                             onClick={() => handleNavigate("/cart")}
//                             className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-100/60 border border-pink-400 hover:text-blue-700 hover:shadow-md transition-all duration-200 group"
//                         >
//                             <ShoppingCart className="w-5 h-5 group-hover:scale-110 group-hover:text-blue-500 transition-transform" />
//                             <span className="tracking-wide">Cart</span>
//                         </button>
//                         <button
//                             onClick={() => handleNavigate("/login")}
//                             className="flex items-center gap-3 px-3 py-2 rounded-xl border border-pink-400 hover:bg-gradient-to-r from-pink-200 to-blue-200 hover:text-blue-800 hover:shadow-md transition-all duration-200 group"
//                         >
//                             <LogIn className="w-5 h-5 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
//                             <span className="tracking-wide">Login | Register</span>
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;








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
        { path: "/premium", label: "Premium", icon: null },
        { path: "/wishlist", label: "Wishlist", icon: Heart },
        { path: "/profile", label: "Account", icon: User },
        { path: "/cart", label: "Cart", icon: ShoppingCart }
    ];

    return (
        <nav className="w-full fixed top-0 z-50 bg-white shadow-sm border-b border-pink-100">
            {/* Top VIP Banner */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-400 text-white text-xs py-1 px-4 text-center">
                VIP MEMBERS GET 20% OFF + FREE EXPRESS SHIPPING
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