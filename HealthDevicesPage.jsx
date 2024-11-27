import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const healthDevicesData = [
    { id: 1, name: "Blood Pressure Monitor", price: 1200, image: "https://images-cdn.ubuy.co.in/63bee9ef8a426310231f65a3-omron-bronze-blood-pressure-monitor.jpg" },
    { id: 2, name: "Mercury Thermometer", price: 300, image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301432314/YD/QM/QE/116880623/mercury-thermometer-500x500.jpg" },
    { id: 3, name: "Glucometer", price: 1500, image: "https://m.media-amazon.com/images/I/81RbmA27zpL.jpg" },
    { id: 4, name: "Pulse Oximeter", price: 700, image: "https://cllsociety.org/wp-content/uploads/2020/12/pulse_oximeter.jpg" },
    { id: 5, name: "Nebulizer", price: 1800, image: "https://fitmaxstore.com/wp-content/uploads/2023/04/Nebulizer-machine-components-including-masks-and-tubes.jpg" },
    { id: 6, name: "Digital Weighing Scale", price: 1000, image: "https://cdn.moglix.com/p/17xtQmfQ0RrS5.jpg" },
    { id: 7, name: "Fever Patch", price: 150, image: "https://www.intcomedical.com/web/upload/2022/05/20/16530076645947fp9wi.jpg" },
    { id: 8, name: "Infrared Thermometer", price: 1200, image: "https://sanjayrithikhospital.com/wp-content/uploads/2019/01/medical_shop_8.jpg" },
    { id: 9, name: "ECG Monitor", price: 2500, image: "https://ucarecdn.com/d428e8a5-e0bd-4b63-bff7-f3f696354d1a/-/format/auto/-/preview/3000x3000/-/quality/lighter/21-8k-square-STARD-8-shaped-new-new-2-5CO2-dark.png" },
    { id: 10, name: "Hearing Aid", price: 4000, image: "https://m.media-amazon.com/images/I/618pWn-2rIL.jpg" },
    { id: 11, name: "Therapeutic Massager", price: 1500, image: "https://www.loopyloops.in/cdn/shop/files/81yDUw1OtnL._SL1500.jpg?v=1721977423&width=1445" },
    { id: 12, name: "Digital Thermometer", price: 500, image: "https://drtrust.in/cdn/shop/files/30802567528494_1200x1200.jpg?v=1703333960" },
];

const HealthDevicesPage = () => {
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
            <h2 className="text-5xl font-bold text-white text-center mb-4">Health Devices</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {healthDevicesData.map(device => (
                    <div key={device.id} className="bg-gradient-to-r from-[#001f3f] shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img src={device.image} alt={device.name} className="w-24 h-24 object-cover mb-2 rounded" />
                        <h3 className="text-lg font-semibold text-white">{device.name}</h3>
                        <p className="text-gray-600 text-white">Price: ₹{device.price}</p>

                        <button
                            className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-black hover:text-white"
                            onClick={() => handleAddToBag(device, 1)}
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

export default HealthDevicesPage;
