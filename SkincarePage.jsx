import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const skincareData = [
    { id: 1, name: "Moisturizer", price: 950, image: "https://aqualogica.in/cdn/shop/files/1_8d797483-8cdc-4d99-9a42-49972639c3cd.jpg?v=1719466573&width=1445" },
    { id: 2, name: "Sunscreen", price: 500, image: "https://ayuga.in/cdn/shop/files/SS_1st_2.jpg?v=1702544751" },
    { id: 3, name: "Face Wash", price: 180, image: "https://sarinskin.com/cdn/shop/files/Artboard1_bf35a8eb-bc80-4fc0-acff-ed7bae519839.webp?v=1714040289" },
    { id: 4, name: "Night Cream", price: 350, image: "https://www.clarins.in/dw/image/v2/AAJY_PRD/on/demandware.static/-/Sites-clarins-master-products/default/dw2c670fec/original/80026894_original_original_4.jpg?sw=680&sh=680" },
    { id: 5, name: "Serum", price: 400, image: "https://dr.rashel.in/cdn/shop/files/Vitamincserum-01_1_11zon_1080x.jpg?v=1722516132" },
    { id: 6, name: "Exfoliator", price: 220, image: "https://dr.rashel.in/cdn/shop/files/Vitamincserum-01_1_11zon_1080x.jpg?v=1722516132" },
    { id: 7, name: "Eye Cream", price: 450, image: "https://sdcdn.io/cl/cl_sku_61EP01_2000x2000_0.jpg?width=650px&height=750px" },
    { id: 8, name: "Sheet Mask", price: 100, image: "https://sdcdn.io/cl/cl_sku_61EP01_2000x2000_0.jpg?width=650px&height=750px" },
    { id: 9, name: "Toner", price: 200, image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mamonde_Rose_Water_Toner.jpg" },
    { id: 10, name: "Lip Balm", price: 80, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/lip-balm/g/9/5/10-melalumin-lip-balm-1-menarini-original-imahfzn7xybfxfpq.jpeg?q=90&crop=false" },
    { id: 11, name: "Alovera Gel", price: 180, image: "https://bhramarah.in/cdn/shop/files/Product_16.jpg?v=1724389632&width=480" },
    { id: 12, name: "Lotion", price: 380, image: "https://media.allure.com/photos/659c52c2e7fa0aa260fe094a/4:3/w_2664,h_1998,c_limit/best_body_lotions_002.jpg" },
];

const SkincarePage = () => {
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
            <h2 className="text-5xl font-bold text-white text-center mb-4">Skincare</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skincareData.map(product => (
                    <div key={product.id} className="bg-gradient-to-r from-[#001f3f] shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 " />
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

export default SkincarePage;
