// import { motion } from "framer-motion";
// import { Heart, ShoppingBag, ChevronLeft, ChevronRight, Star, Share2, Minus, Plus } from "lucide-react";
// import { useState } from "react";

// const Details = () => {
//     const [selectedSize, setSelectedSize] = useState("M");
//     const [quantity, setQuantity] = useState(1);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const product = {
//         id: 1,
//         name: "Floral Summer Dress",
//         price: 59.99,
//         description: "A beautiful floral summer dress made from lightweight, breathable fabric. Perfect for warm days with its flowy silhouette and comfortable fit.",
//         details: [
//             "100% Organic Cotton",
//             "Machine wash cold",
//             "Imported",
//             "Mid-length with ruffled hem"
//         ],
//         sizes: ["XS", "S", "M", "L", "XL"],
//         colors: [
//             { name: "Pink", code: "bg-pink-300" },
//             { name: "Blue", code: "bg-blue-300" },
//             { name: "White", code: "bg-gray-100" }
//         ],
//         images: [
//             "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
//             "https://images.unsplash.com/photo-1585487000120-7e3d1195550e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
//             "https://images.unsplash.com/photo-1585487000105-3d3d5e7d9f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
//             "https://images.unsplash.com/photo-1585487000105-3d3d5e7d9f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
//         ],
//         rating: 4.5,
//         reviews: 128,
//         inStock: true
//     };

//     const handleQuantityChange = (newQuantity) => {
//         if (newQuantity > 0 && newQuantity < 10) {
//             setQuantity(newQuantity);
//         }
//     };

//     const handleImageNavigation = (direction) => {
//         if (direction === "prev") {
//             setCurrentImageIndex(prev =>
//                 prev === 0 ? product.images.length - 1 : prev - 1
//             );
//         } else {
//             setCurrentImageIndex(prev =>
//                 prev === product.images.length - 1 ? 0 : prev + 1
//             );
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
//         >
//             <div className="max-w-7xl mx-auto">
//                 {/* Back button */}
//                 <motion.div
//                     initial={{ x: -20 }}
//                     animate={{ x: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="mb-6"
//                 >
//                     <a
//                         href="#"
//                         className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium"
//                     >
//                         <ChevronLeft className="w-5 h-5 mr-1" />
//                         Back to Shop
//                     </a>
//                 </motion.div>

//                 <div className="flex flex-col lg:flex-row gap-8">
//                     {/* Product Images */}
//                     <div className="lg:w-1/2">
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                             className="relative bg-white rounded-xl shadow-md overflow-hidden"
//                         >
//                             {/* Main Image */}
//                             <div className="relative aspect-square">
//                                 <img
//                                     src={product.images[currentImageIndex]}
//                                     alt={product.name}
//                                     className="w-full h-full object-cover"
//                                 />

//                                 {/* Navigation Arrows */}
//                                 <button
//                                     onClick={() => handleImageNavigation("prev")}
//                                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors"
//                                 >
//                                     <ChevronLeft className="w-6 h-6" />
//                                 </button>
//                                 <button
//                                     onClick={() => handleImageNavigation("next")}
//                                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors"
//                                 >
//                                     <ChevronRight className="w-6 h-6" />
//                                 </button>

//                                 {/* Wishlist Button */}
//                                 <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors">
//                                     <Heart className="w-6 h-6" />
//                                 </button>
//                             </div>

//                             {/* Thumbnail Gallery */}
//                             <div className="p-4 flex gap-2 overflow-x-auto">
//                                 {product.images.map((img, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setCurrentImageIndex(index)}
//                                         className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-pink-500' : 'border-transparent'}`}
//                                     >
//                                         <img
//                                             src={img}
//                                             alt={`Thumbnail ${index + 1}`}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </button>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>

//                     {/* Product Info */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.4 }}
//                         className="lg:w-1/2"
//                     >
//                         <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
//                             <div className="mb-6">
//                                 <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

//                                 <div className="flex items-center mb-4">
//                                     <div className="flex text-yellow-400 mr-2">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star
//                                                 key={i}
//                                                 className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
//                                             />
//                                         ))}
//                                     </div>
//                                     <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
//                                 </div>

//                                 <p className="text-2xl font-semibold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

//                                 <p className="text-gray-700 mb-6">{product.description}</p>

//                                 <div className="mb-6">
//                                     <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
//                                     <ul className="list-disc pl-5 text-gray-700 space-y-1">
//                                         {product.details.map((detail, index) => (
//                                             <li key={index}>{detail}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>

//                             {/* Size Selection */}
//                             <div className="mb-6">
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
//                                 <div className="flex flex-wrap gap-2">
//                                     {product.sizes.map(size => (
//                                         <button
//                                             key={size}
//                                             onClick={() => setSelectedSize(size)}
//                                             className={`px-4 py-2 border rounded-md transition-colors ${selectedSize === size ? 'bg-pink-500 text-white border-pink-500' : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'}`}
//                                         >
//                                             {size}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Color Selection */}
//                             <div className="mb-6">
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
//                                 <div className="flex gap-3">
//                                     {product.colors.map(color => (
//                                         <button
//                                             key={color.name}
//                                             className={`w-10 h-10 rounded-full ${color.code} border-2 border-transparent hover:border-pink-500`}
//                                             aria-label={color.name}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Quantity and Add to Cart */}
//                             <div className="mb-8">
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
//                                 <div className="flex items-center gap-4">
//                                     <div className="flex items-center border border-gray-300 rounded-md">
//                                         <button
//                                             onClick={() => handleQuantityChange(quantity - 1)}
//                                             className="px-3 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
//                                         >
//                                             <Minus className="w-4 h-4" />
//                                         </button>
//                                         <span className="px-4 py-2 text-gray-900">{quantity}</span>
//                                         <button
//                                             onClick={() => handleQuantityChange(quantity + 1)}
//                                             className="px-3 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
//                                         >
//                                             <Plus className="w-4 h-4" />
//                                         </button>
//                                     </div>

//                                     <motion.button
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-md font-medium shadow-lg hover:shadow-pink-200 transition-all flex items-center justify-center"
//                                     >
//                                         <ShoppingBag className="w-5 h-5 mr-2" />
//                                         Add to Bag
//                                     </motion.button>
//                                 </div>
//                             </div>

//                             {/* Share and Stock Status */}
//                             <div className="flex items-center justify-between">
//                                 <button className="text-gray-600 hover:text-pink-500 flex items-center">
//                                     <Share2 className="w-5 h-5 mr-2" />
//                                     Share
//                                 </button>

//                                 <div className="text-sm">
//                                     {product.inStock ? (
//                                         <span className="text-green-600">In Stock - Ready to Ship</span>
//                                     ) : (
//                                         <span className="text-gray-500">Out of Stock</span>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default Details;









import { motion } from "framer-motion";
import { Heart, ShoppingBag, ChevronLeft, ChevronRight, Star, Share2, Minus, Plus } from "lucide-react";
import { useState } from "react";

const Details = () => {
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const product = {
        id: 1,
        name: "Floral Summer Dress",
        price: 59.99,
        description: "A beautiful floral summer dress made from lightweight, breathable fabric. Perfect for warm days with its flowy silhouette and comfortable fit.",
        details: [
            "100% Organic Cotton",
            "Machine wash cold",
            "Imported",
            "Mid-length with ruffled hem"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Pink", code: "bg-pink-300" },
            { name: "Blue", code: "bg-blue-300" },
            { name: "White", code: "bg-gray-100" }
        ],
        images: [
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
            "https://images.unsplash.com/photo-1585487000120-7e3d1195550e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
            "https://images.unsplash.com/photo-1585487000105-3d3d5e7d9f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80",
            "https://images.unsplash.com/photo-1585487000105-3d3d5e7d9f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80"
        ],
        rating: 4.5,
        reviews: 128,
        inStock: true
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity > 0 && newQuantity < 10) {
            setQuantity(newQuantity);
        }
    };

    const handleImageNavigation = (direction) => {
        if (direction === "prev") {
            setCurrentImageIndex(prev =>
                prev === 0 ? product.images.length - 1 : prev - 1
            );
        } else {
            setCurrentImageIndex(prev =>
                prev === product.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Back button */}
                <motion.div
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 sm:mb-6"
                >
                    <a
                        href="#"
                        className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium text-sm sm:text-base"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                        Back to Shop
                    </a>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                    {/* Product Images */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            {/* Main Image */}
                            <div className="relative aspect-square">
                                <img
                                    src={product.images[currentImageIndex]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Navigation Arrows */}
                                <button
                                    onClick={() => handleImageNavigation("prev")}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-1 sm:p-2 rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                                </button>
                                <button
                                    onClick={() => handleImageNavigation("next")}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-1 sm:p-2 rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors"
                                >
                                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                                </button>

                                {/* Wishlist Button */}
                                <button className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1 sm:p-2 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-pink-50 hover:text-pink-500 transition-colors">
                                    <Heart className="w-4 h-4 sm:w-6 sm:h-6" />
                                </button>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="p-2 sm:p-4 flex gap-2 overflow-x-auto">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-pink-500' : 'border-transparent'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6">
                            <div className="mb-4 sm:mb-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                                </div>

                                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">${product.price.toFixed(2)}</p>

                                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{product.description}</p>

                                <div className="mb-4 sm:mb-6">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Product Details</h3>
                                    <ul className="list-disc pl-4 sm:pl-5 text-sm sm:text-base text-gray-700 space-y-1">
                                        {product.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="mb-4 sm:mb-6">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base border rounded-md transition-colors ${selectedSize === size ? 'bg-pink-500 text-white border-pink-500' : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-4 sm:mb-6">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Color</h3>
                                <div className="flex gap-2 sm:gap-3">
                                    {product.colors.map(color => (
                                        <button
                                            key={color.name}
                                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${color.code} border-2 border-transparent hover:border-pink-500`}
                                            aria-label={color.name}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="mb-6 sm:mb-8">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Quantity</h3>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                    <div className="flex items-center border border-gray-300 rounded-md w-max">
                                        <button
                                            onClick={() => handleQuantityChange(quantity - 1)}
                                            className="px-2 sm:px-3 py-1 sm:py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                                        >
                                            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                        <span className="px-3 sm:px-4 py-1 sm:py-2 text-gray-900">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(quantity + 1)}
                                            className="px-2 sm:px-3 py-1 sm:py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                                        >
                                            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </button>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium shadow-lg hover:shadow-pink-200 transition-all flex items-center justify-center"
                                    >
                                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Add to Bag
                                    </motion.button>
                                </div>
                            </div>

                            {/* Share and Stock Status */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                                <button className="text-sm sm:text-base text-gray-600 hover:text-pink-500 flex items-center">
                                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    Share
                                </button>

                                <div className="text-xs sm:text-sm">
                                    {product.inStock ? (
                                        <span className="text-green-600">In Stock - Ready to Ship</span>
                                    ) : (
                                        <span className="text-gray-500">Out of Stock</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Details;