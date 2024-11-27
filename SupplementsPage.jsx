import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const supplementsData = [
    { id: 1, name: "Vitamin C Tablets", price: 120, image: "https://tdc-mg-cs-v1.honasa-production.net/pub/media/catalog/product/1/0/1000_mg_vitamin_c_effervescent_tablets.jpg" },
    { id: 2, name: "Omega-3 Capsules", price: 200, image: "https://m.media-amazon.com/images/I/71RcH-GkD6L.jpg" },
    { id: 3, name: "Multivitamin Tablets", price: 150, image: "https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/02/alternative-medicine-herbal-organic-capsule-with-vitamin-e-omega-3-fish-oil-mineral-drug-with-herbs-leaf-natural-supplements-healthy-good-life-1-1067x800.jpg" },
    { id: 4, name: "Calcium Tablets", price: 130, image: "https://mycf.in/cdn/shop/files/71CPj7d21nL._SX679_900x.jpg?v=1721986266" },
    { id: 5, name: "Iron Supplements", price: 100, image: "https://healthbest.com/cdn/shop/files/HaemoBest-Iron.png?v=1715584171&width=1946" },
    { id: 6, name: "Zinc Tablets", price: 90, image: "https://healthbest.com/cdn/shop/files/HaemoBest-Iron.png?v=1715584171&width=1946" },
    { id: 7, name: "Magnesium Capsules", price: 180, image: "https://img.freepik.com/premium-photo/manganese-magnesium-mg-element-pill-dietary-supplements-vitamin-capsules-3d-illustration_505080-1012.jpg" },
    { id: 8, name: "Probiotic Capsules", price: 160, image: "https://ujalacygnus.com/wp-content/uploads/2023/02/Screenshot-24-02-2023-at-15.59-1024x686.png" },
    { id: 9, name: "Vitamin D Tablets", price: 140, image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/7209/conversions/ae7dd8d0-a856-437c-9c81-4a57842e0e34-thumb.jpg" },
    { id: 10, name: "Collagen Powder", price: 250, image: "https://images.everydayhealth.com/images/skin-beauty/potential-health-benefits-of-collagen-1440x810.jpg" },
    { id: 11, name: "B-Complex Tablets", price: 170, image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/vitamin-b-complex-732x549-thumbnail.jpg" },
    { id: 12, name: "Coenzyme Q10 Capsules", price: 220, image: "https://i0.wp.com/www.themustardseedonline.com/wp-content/uploads/2019/01/MS-Coenyme-B.jpg?fit=1868%2C1920&ssl=1" },
];

const SupplementsPage = () => {
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
            <h2 className="text-5xl font-bold text-white text-center mb-4">Supplements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {supplementsData.map(supplement => (
                    <div key={supplement.id} className="bg-gradient-to-r from-[#001f3f] shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img src={supplement.image} alt={supplement.name} className="w-24 h-24 object-cover mb-2 rounded" />
                        <h3 className="text-lg font-semibold text-white">{supplement.name}</h3>
                        <p className="text-gray-600 text-white">Price: ₹{supplement.price}</p>

                        <button
                            className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-black hover:text-white"
                            onClick={() => handleAddToBag(supplement, 1)}
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

export default SupplementsPage;
