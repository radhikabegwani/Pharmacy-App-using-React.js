

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Link and useNavigate for navigation
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome for icons
// import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import the home icon

// const LimitedTimeOffer = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook for redirecting to cart
//   const [cart, setCart] = useState(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart'));
//     return savedCart || [];
//   });

  // const products = [
  //   {
  //     id: 1,
  //     category: 'Medications',
  //     name: 'Aspirin 500mg',
  //     originalPrice: '150',
  //     discountPrice: '100',
  //     discount: '30%',
  //     image: 'https://pharmawest.al/cdn/shop/products/aspirin.jpg?v=1622634780',
  //   },
  //   {
  //     id: 2,
  //     category: 'Medications',
  //     name: 'Paracetamol',
  //     originalPrice: '120',
  //     discountPrice: '80',
  //     discount: '40%',
  //     image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000.jpg',
  //   },
  //   {
  //     id: 3,
  //     category: 'Medications',
  //     name: 'Amoxicillin',
  //     originalPrice: '200',
  //     discountPrice: '150',
  //     discount: '25%',
  //     image: 'https://www.chemicalbook.com/NewsImg/2024-02-27/6384464630493500482722447.jpg',
  //   },
  //   {
  //     id: 4,
  //     category: 'Medications',
  //     name: 'Ciprofloxacin',
  //     originalPrice: '240',
  //     discountPrice: '120',
  //     discount: '50%',
  //     image: 'https://www.storkhospitals.com/wp-content/uploads/2023/12/Ciprofloxacin-Antibiotics-Drug-.jpg',
  //   },
  //   {
  //     id: 5,
  //     category: 'Supplements',
  //     name: 'Vitamin D3',
  //     originalPrice: '250',
  //     discountPrice: '200',
  //     discount: '20%',
  //     image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APV0019_2-JULY23_1.jpg',
  //   },
  //   {
  //     id: 6,
  //     category: 'Supplements',
  //     name: 'Omega-3 Fish Oil',
  //     originalPrice: '500',
  //     discountPrice: '350',
  //     discount: '35%',
  //     image: 'https://store.planetayurveda.com/cdn/shop/files/Omega-3-Fish-Oil.jpg?v=1704268974',
  //   },
  //   {
  //     id: 7,
  //     category: 'Supplements',
  //     name: 'Calcium Tablets',
  //     originalPrice: '200',
  //     discountPrice: '150',
  //     discount: '25%',
  //     image: 'https://m.media-amazon.com/images/I/71qC9Q62G3L._AC_UF1000,1000_QL80_.jpg',
  //   },
  //   {
  //     id: 8,
  //     category: 'Supplements',
  //     name: 'Multivitamins',
  //     originalPrice: '500',
  //     discountPrice: '400',
  //     discount: '50%',
  //     image: 'https://cpimg.tistatic.com/02370194/b/5/Multivitamins-Tablets.jpg',
  //   },
  //   {
  //     id: 9,
  //     category: 'Health Devices',
  //     name: 'Blood Pressure Monitor',
  //     originalPrice: '2400',
  //     discountPrice: '2000',
  //     discount: '15%',
  //     image: 'https://m.media-amazon.com/images/I/71-qOprKrIL.jpg',
  //   },
  //   {
  //     id: 10,
  //     category: 'Health Devices',
  //     name: 'Glucometer',
  //     originalPrice: '2000',
  //     discountPrice: '1800',
  //     discount: '25%',
  //     image: 'https://m.media-amazon.com/images/I/81RbmA27zpL.jpg',
  //   },
  //   {
  //     id: 11,
  //     category: 'Health Devices',
  //     name: 'Thermometer',
  //     originalPrice: '600',
  //     discountPrice: '500',
  //     discount: '40%',
  //     image: 'https://drtrust.in/cdn/shop/files/30802567528494_1200x1200.jpg?v=1703333960',
  //   },
  //   {
  //     id: 12,
  //     category: 'Health Devices',
  //     name: 'Pulse Oximeter',
  //     originalPrice: '1400',
  //     discountPrice: '1000',
  //     discount: '30%',
  //     image: 'https://www.accusureindia.com/shop/wp-content/uploads/2019/09/PULSE-OXIMETER1.jpg',
  //   }
  // ];

//   const addToCart = (item) => {
//     let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

//     // Check if the item is already in the cart, if so, update its quantity
//     const existingItem = cart.find((i) => i.id === item.id);
//     if (existingItem) {
//       existingItem.quantity += 1; // Increase quantity by 1
//     } else {
//       item.quantity = 1; // If new item, set quantity to 1
//       cart.push(item);
//     }

//     localStorage.setItem('cartItems', JSON.stringify(cart));
//     setCart(cart); // Update cart state
//   };

//   return (
//     <div className="container mx-auto py-12 px-4 relative">
//       {/* Poster Section */}
//       <div className="relative bg-gradient-to-r from-custom-yellow via-custom-red to-custom-orange p-6 rounded-lg mb-12 shadow-lg">
//         <h2 className="text-5xl font-bold text-white text-center mb-4">Limited Time Offer!</h2>
//         <p className="text-xl text-white text-center font-medium">
//           Up to <span className="font-extrabold text-blue-400">50% OFF</span> on selected products, medications, and supplements.
//         </p>
//         <p className="text-lg text-white text-center mt-2">Hurry, these deals won’t last forever!</p>
//         <div className="absolute top-0 right-0 h-24 w-24 bg-blue-400 rounded-full opacity-40 transform rotate-45"></div>
//         <div className="absolute bottom-0 left-0 h-32 w-32 bg-blue-600 rounded-full opacity-50 transform rotate-12"></div>
//       </div>

//       {/* Product Grid */}
//       <div className="bg-gradient-to-r from-gray-100 to-white shadow-md rounded-lg p-6 mb-6">
//         <ul className="space-y-4">
//           {products.map((item) => (
//             <li key={item.id} className="flex justify-between items-center border-b border-gray-300 pb-4">
//               <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
//               <span className="font-semibold">{item.name}</span>
//               <span className="font-semibold text-black">₹{item.discountPrice}</span>
//               <button
//                 onClick={() => addToCart(item)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Add to Cart
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Go to Cart Button */}
//       <div className="mt-12 text-center">
//         <button
//           onClick={() => navigate('/cart')}
//           className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-md hover:from-blue-600 hover:to-teal-600 transition duration-300"
//         >
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LimitedTimeOffer;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing Font Awesome icon
import { FaHome } from 'react-icons/fa'; // Importing home icon

const LimitedTimeOffer = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems'));
    return savedCart || [];
  });


  const products = [
    {
      id: 1,
      category: 'Medications',
      name: 'Aspirin 500mg',
      originalPrice: '150',
      discountPrice: '100',
      discount: '30%',
      image: 'https://pharmawest.al/cdn/shop/products/aspirin.jpg?v=1622634780',
    },
    {
      id: 2,
      category: 'Medications',
      name: 'Paracetamol',
      originalPrice: '120',
      discountPrice: '80',
      discount: '40%',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/AC/ZD/LY/122822982/85513-1-1000.jpg',
    },
    {
      id: 3,
      category: 'Medications',
      name: 'Amoxicillin',
      originalPrice: '200',
      discountPrice: '150',
      discount: '25%',
      image: 'https://www.chemicalbook.com/NewsImg/2024-02-27/6384464630493500482722447.jpg',
    },
    {
      id: 4,
      category: 'Medications',
      name: 'Ciprofloxacin',
      originalPrice: '240',
      discountPrice: '120',
      discount: '50%',
      image: 'https://www.storkhospitals.com/wp-content/uploads/2023/12/Ciprofloxacin-Antibiotics-Drug-.jpg',
    },
    {
      id: 5,
      category: 'Supplements',
      name: 'Vitamin D3',
      originalPrice: '250',
      discountPrice: '200',
      discount: '20%',
      image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APV0019_2-JULY23_1.jpg',
    },
    {
      id: 6,
      category: 'Supplements',
      name: 'Omega-3 Fish Oil',
      originalPrice: '500',
      discountPrice: '350',
      discount: '35%',
      image: 'https://store.planetayurveda.com/cdn/shop/files/Omega-3-Fish-Oil.jpg?v=1704268974',
    },
    {
      id: 7,
      category: 'Supplements',
      name: 'Calcium Tablets',
      originalPrice: '200',
      discountPrice: '150',
      discount: '25%',
      image: 'https://m.media-amazon.com/images/I/71qC9Q62G3L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 8,
      category: 'Supplements',
      name: 'Multivitamins',
      originalPrice: '500',
      discountPrice: '400',
      discount: '50%',
      image: 'https://cpimg.tistatic.com/02370194/b/5/Multivitamins-Tablets.jpg',
    },
    {
      id: 9,
      category: 'Health Devices',
      name: 'Blood Pressure Monitor',
      originalPrice: '2400',
      discountPrice: '2000',
      discount: '15%',
      image: 'https://m.media-amazon.com/images/I/71-qOprKrIL.jpg',
    },
    {
      id: 10,
      category: 'Health Devices',
      name: 'Glucometer',
      originalPrice: '2000',
      discountPrice: '1800',
      discount: '25%',
      image: 'https://m.media-amazon.com/images/I/81RbmA27zpL.jpg',
    },
    {
      id: 11,
      category: 'Health Devices',
      name: 'Thermometer',
      originalPrice: '600',
      discountPrice: '500',
      discount: '40%',
      image: 'https://drtrust.in/cdn/shop/files/30802567528494_1200x1200.jpg?v=1703333960',
    },
    {
      id: 12,
      category: 'Health Devices',
      name: 'Pulse Oximeter',
      originalPrice: '1400',
      discountPrice: '1000',
      discount: '30%',
      image: 'https://www.accusureindia.com/shop/wp-content/uploads/2019/09/PULSE-OXIMETER1.jpg',
    }
  ];

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]); // Update localStorage whenever cart changes

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div>
       {/* Home Icon Link */}
       <Link to="/" className="absolute top-4 right-4 text-[#001f3f] hover:text-white transition duration-300 hover:scale-105 duration-300 ">
        <FaHome className="w-10 h-10" />
      </Link>
    <div className="container mx-auto py-12 px-4 relative">
     

      {/* Poster Section */}
      <div className="relative bg-gradient-to-r from-custom-yellow via-custom-red to-custom-orange p-6 rounded-lg mb-12 shadow-lg">
        <h2 className="text-5xl font-bold text-white text-center mb-4">Limited Time Offer!</h2>
        <p className="text-xl text-white text-center font-medium">
          Up to <span className="font-extrabold text-blue-400">50% OFF</span> on selected products, medications, and supplements.
        </p>
        <p className="text-lg text-white text-center mt-2">Hurry, these deals won’t last forever!</p>
        <div className="absolute top-0 right-0 h-24 w-24 bg-blue-400 rounded-full opacity-40 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 h-32 w-32 bg-blue-600 rounded-full opacity-50 transform rotate-12"></div>
      </div>

      {/* Product Grid */}
      <div className="bg-gradient-to-r from-gray-100 to-white shadow-md rounded-lg p-6 mb-6">
        <ul className="space-y-4">
          {products.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b border-gray-300 pb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 mr-4" />
              <span className="font-semibold">{item.name}</span>
              <span className="font-semibold text-black">₹{item.discountPrice}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Go to Cart Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate('/cart')}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-md hover:from-blue-600 hover:to-teal-600 transition duration-300"
        >
          Go to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default LimitedTimeOffer;
