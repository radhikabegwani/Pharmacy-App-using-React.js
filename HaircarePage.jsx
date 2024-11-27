import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const haircareData = [
    { id: 1, name: "Shampoo", price: 180, image: "https://meds.myupchar.com/101535/nizral-solution-50ml-1.webp" },
    { id: 2, name: "Hair Oil", price: 220, image: "https://outdocart.s3.amazonaws.com/uploads/shopforcows/productImages/full/3091703239949-gavyadhara-hair-o-life-hair-oil.png" },
    { id: 3, name: "Hair Serum", price: 300, image: "https://www.thriveco.in/cdn/shop/files/thriveco-hair-growth-serum-for-men-_-women.webp?v=1708349446" },
    { id: 4, name: "Conditioner", price: 150, image: "https://in.loccitane.com/cdn/shop/files/1200_PNG-17AS500E24_RVB_1080x.png?v=1721709933" },
    { id: 5, name: "Hair Mask", price: 400, image: "https://www.mcaffeine.com/cdn/shop/products/8_1.jpg?v=1646892358" },
    { id: 6, name: "Hair Gel", price: 250, image: "https://images-static.nykaa.com/media/catalog/product/0/4/043ad1d8908012729037_1.jpg" },
    { id: 7, name: "Hair Spray", price: 200, image: "https://zuame.in/cdn/shop/products/190101HairSpray.png?v=1679418595" },
    { id: 8, name: "Hair Dye", price: 350, image: "https://cdn.shopify.com/s/files/1/0761/1701/6914/files/NATURIGIN-Hair-Color-Chart_480x480.jpg?v=1696237238" },
    { id: 9, name: "Scalp Treatment", price: 450, image: "https://www.livingproof.com/dw/image/v2/BCMH_PRD/on/demandware.static/-/Sites-livingproof-catalog/default/dw6d9a6c99/images/hi-res/pdp/refresh/alts/Scalp_DryScalp_ALTIMG_3.jpg?sw=800&sh=800&sm=fit" },
    { id: 10, name: "Anti-Hairfall Serum", price: 500, image: "https://www.livingproof.com/dw/image/v2/BCMH_PRD/on/demandware.static/-/Sites-livingproof-catalog/default/dw6d9a6c99/images/hi-res/pdp/refresh/alts/Scalp_DryScalp_ALTIMG_3.jpg?sw=800&sh=800&sm=fit" },
    { id: 11, name: "Heat Protectant Spray", price: 350, image: "https://images.bblunt.com/catalog/product/h/o/hot_shot_mist.jpg?format=auto&height=600" },
    { id: 12, name: "Leave-in Conditioner", price: 300, image: "https://www.alpropharmacy.com/wp-content/uploads/2023/05/00476553_L_1_9174-450x450.png" },
];

const HaircarePage = () => {
    const navigate = useNavigate();
    const [bag, setBag] = useState([]);

    const handleAddToBag = (product, quantity) => {
        if (quantity < 1) return;
        const existingItem = bag.find(item => item.id === product.id);
        if (existingItem) {
            setBag(bag.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
        } else {
            setBag([...bag, { ...product, quantity }]);
        }
    };

    const handleMoveToCart = () => {
        let currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        bag.forEach(item => {
            const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) existingItem.quantity += item.quantity;
            else currentCart.push(item);
        });
        localStorage.setItem('cartItems', JSON.stringify(currentCart));
        navigate('/cart');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    const totalPrice = bag.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-8 relative">
            <button onClick={handleGoHome} className="absolute top-4 right-4 text-4xl text-black hover:transform-transition duration-450 hover:text-white">
                <FaHome />
            </button>
            <h2 className="text-5xl font-bold text-white text-center mb-4">Haircare</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {haircareData.map(product => (
                    <div key={product.id} className="bg-gradient-to-r from-[#001f3f] shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mb-2 rounded" />
                        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                        <p className="text-gray-600 text-white">Price: ₹{product.price}</p>

                        <button
                            className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-black hover:text-white"
                            onClick={() => handleAddToBag(product, 1)}
                        >
                            Add to Bag
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-gradient-to-r from-[#001f3f] mt-8 p-4 bg-gray-100 rounded-lg shadow-md transition-transform duration-300">
                <h3 className="text-3xl text-white font-semibold">Your Bag</h3>
                <div>
                    {bag.length === 0 ? (
                        <p className="text-white">Your bag is empty.</p>
                    ) : (
                        <ul>
                            {bag.map(item => (
                                <li key={item.id} className="flex justify-between items-center text-white">
                                    <span>{item.name} (x{item.quantity})</span>
                                    <span>₹{item.price * item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="mt-4 flex flex-col items-start">
                    <span className="text-white font-bold text-xl mb-4">Total: ₹{totalPrice}</span>
                    <button
                        className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-black hover:text-white hover:transition-transform duration-300 hover:scale-105"
                        onClick={handleMoveToCart}
                    >
                        Move to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HaircarePage;
