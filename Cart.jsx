import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({
    houseNo: '',
    locality: '',
    city: '',
    pincode: '',
    paymentMethod: 'COD',
    cardNumber: '',
    cardCVV: '',
    upiId: '',
  });
  const [showNotification, setShowNotification] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(null); // For discount selection
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  // Calculate the total cart price
  const totalCartPrice = cartItems.reduce((total, med) => {
    const price = med.discountPrice || med.price; // Use discountPrice if available, else use price
    return total + price * med.quantity;
  }, 0);

  // Calculate the discount
  const discountValue = selectedDiscount ? (totalCartPrice * selectedDiscount.percentage) / 100 : 0;
  const finalPrice = totalCartPrice - discountValue;

  // Remove item from cart
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Change quantity of an item
  const handleQuantityChange = (id, operation) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = operation === 'increase' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Handle delivery address input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress({ ...deliveryAddress, [name]: value });
  };

  // Navigate to home
  const handleNavigateHome = () => {
    navigate('/');
  };

  // Place order
  const handlePlaceOrder = () => {
    if (!deliveryAddress.houseNo || !deliveryAddress.locality || !deliveryAddress.city || !deliveryAddress.pincode) {
      alert("Please fill in all delivery address fields.");
      return;
    }

    if (deliveryAddress.paymentMethod === 'Card' && (!deliveryAddress.cardNumber || !deliveryAddress.cardCVV)) {
      alert("Please fill in your card details.");
      return;
    }

    if (deliveryAddress.paymentMethod === 'UPI' && !deliveryAddress.upiId) {
      alert("Please fill in your UPI ID.");
      return;
    }

    setShowNotification(true);
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  // Discount options
  const discountOptions = [
    { id: 1, label: 'First Order (10%)', percentage: 10 },
    { id: 2, label: 'Shopping over ₹500 (10%)', percentage: 10, minAmount: 500 },
    { id: 3, label: 'Shopping over ₹1000 (25%)', percentage: 25, minAmount: 1000 },
  ];

  const isDiscountApplicable = (discount) => {
    return discount.minAmount ? totalCartPrice >= discount.minAmount : true;
  };

  const handleDiscountChange = (discount) => {
    if (isDiscountApplicable(discount)) {
      setSelectedDiscount(discount);
    } else {
      alert('Discount is not applicable for your cart total.');
      setSelectedDiscount(null); // Reset if discount is not applicable
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-[#001f3f] min-h-screen">
      <FaHome
        onClick={handleNavigateHome}
        className="absolute top-4 right-4 text-black-600 text-4xl hover:text-white transition duration-300 cursor-pointer"
        title="Go to Home"
      />
      <h2 className="text-4xl text-white font-bold text-center mb-6">Your Cart</h2>

      {/* Your Bag Items */}
      <div className="bg-gradient-to-r from-[#f3ff32] via-[#b4d6ff] to-[#b4d6ff] shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Bag</h3>
        {cartItems.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cartItems.map((med) => (
                <li key={med.id} className="flex justify-between items-center border-b border-black pb-4">
                  <div className="flex items-center text-black">
                    <img src={med.image} alt={med.name} className="w-20 h-20 mr-4" />
                    <span className="font-semibold mr-4">{med.name}</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(med.id, 'decrease')}
                        className="text-gray-500 hover:text-red-600"
                      >
                        -
                      </button>
                      <span className="mx-2">{med.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(med.id, 'increase')}
                        className="text-gray-500 hover:text-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800">₹{med.discountPrice || med.price}</span>
                    <button
                      onClick={() => handleRemoveItem(med.id)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-black">
              <h4 className="font-semibold text-lg">Total Cart Price: ₹{totalCartPrice}</h4>
              {selectedDiscount && (
                <h4 className="font-semibold text-lg text-green-500">
                  Discount Applied: -₹{discountValue.toFixed(2)} ({selectedDiscount.label})
                </h4>
              )}
              <h4 className="font-bold text-xl text-blue-600">Final Price: ₹{finalPrice.toFixed(2)}</h4>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-700 font-semibold">Your bag is empty.</p>
        )}
      </div>

      {/* Delivery Address */}
      <div className="bg-gradient-to-r from-[#f3ff32] via-[#b4d6ff] to-[#b4d6ff] shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Address</h3>
        <form>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <input
                type="text"
                name="houseNo"
                value={deliveryAddress.houseNo}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
                placeholder="House No"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <input
                type="text"
                name="locality"
                value={deliveryAddress.locality}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Locality"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <input
                type="text"
                name="city"
                value={deliveryAddress.city}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
                placeholder="City"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <input
                type="text"
                name="pincode"
                value={deliveryAddress.pincode}
                onChange={handleInputChange}
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Pincode"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Discount Section */}
      {cartItems.length > 0 && (
        <div className="bg-gradient-to-r from-[#f3ff32] via-[#b4d6ff] to-[#b4d6ff] shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Apply Discount</h3>
          <ul>
            {discountOptions.map((discount) => (
              <li key={discount.id}>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="discount"
                    onChange={() => handleDiscountChange(discount)}
                    checked={selectedDiscount?.id === discount.id}
                  />
                  <span className="font-semibold text-black">{discount.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {/* Payment Method */}
      <div className="bg-gradient-to-r from-[#f3ff32] via-[#b4d6ff] to-[#b4d6ff] shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h3>
        <div className="mt-4">
          <select
            name="paymentMethod"
            value={deliveryAddress.paymentMethod}
            onChange={handleInputChange}
            className="w-full p-2 rounded border border-gray-300"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Card">Card Payment</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        {/* Card Details */}
        {deliveryAddress.paymentMethod === 'Card' && (
          <div className="mt-4">
            <input
              type="text"
              name="cardNumber"
              value={deliveryAddress.cardNumber}
              onChange={handleInputChange}
              className="w-full p-2 rounded border border-gray-300"
              placeholder="Card Number"
            />
            <input
              type="text"
              name="cardCVV"
              value={deliveryAddress.cardCVV}
              onChange={handleInputChange}
              className="w-full p-2 rounded border border-gray-300 mt-4"
              placeholder="CVV"
            />
          </div>
        )}

        {/* UPI Details */}
        {deliveryAddress.paymentMethod === 'UPI' && (
          <div className="mt-4">
            <input
              type="text"
              name="upiId"
              value={deliveryAddress.upiId}
              onChange={handleInputChange}
              className="w-full p-2 rounded border border-gray-300"
              placeholder="UPI ID"
            />
          </div>
        )}
      </div>

      {/* Place Order */}
      <div className="text-center">
        <button
          onClick={handlePlaceOrder}
          className="bg-gradient-to-r from-red-800 to-red-600 text-white px-6 py-3 rounded-lg hover:bg-black transition duration-300 hover:scale-105"
        >
          Place Order
        </button>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Cart;

