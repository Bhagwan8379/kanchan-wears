import React from "react";

const dummyProducts = [
    {
        id: 1,
        name: "Vintage Leather Jacket",
        image: "https://i.pinimg.com/736x/b9/30/2a/b9302ab3dc058a4a6a7207e0ed74fc57.jpg",
        price: "₹2,499",
        category: "Mens Wear",
    },
    {
        id: 2,
        name: "Floral Summer Dress",
        image: "https://i.pinimg.com/736x/94/0c/27/940c27a9e9bdc38c9cf0dfca58e63726.jpg",
        price: "₹1,299",
        category: "Womens Wear",
    },
    {
        id: 3,
        name: "Smart Casual Blazer",
        image: "https://i.pinimg.com/736x/df/e1/6a/dfe16a2dd499103846d3854f6aa460cc.jpg",
        price: "₹3,199",
        category: "Mens Wear",
    },
    {
        id: 4,
        name: "Elegant Evening Gown",
        image: "https://i.pinimg.com/736x/9e/c7/6c/9ec76c44f6706cc4067a6e6e52d9db3e.jpg",
        price: "₹4,999",
        category: "Womens Wear",
    },
    {
        id: 5,
        name: "Kids Party Outfit",
        image: "https://i.pinimg.com/736x/9e/70/3b/9e703b3b8a3bb4d7a68114eea6a30df4.jpg",
        price: "₹899",
        category: "Kids",
    },
    {
        id: 6,
        name: "Denim Street Style",
        image: "https://i.pinimg.com/736x/f3/18/c0/f318c0dddf144d28c88994c3f6ddad4d.jpg",
        price: "₹1,799",
        category: "Unisex",
    },
];

const Products = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Featured Products
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {dummyProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-64 w-full object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-500">{product.category}</p>
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-xl font-bold text-gray-900">
                                    {product.price}
                                </span>
                                <button className="px-4 py-1 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
