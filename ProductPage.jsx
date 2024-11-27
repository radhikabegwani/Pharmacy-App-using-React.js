// import React, { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { FaHome, FaShoppingCart } from 'react-icons/fa';

// // Mock Products Array (Modify as per your actual list)
// const products = [
//     {
//       id: 1,
//       name: 'Melalumin Lip Lightner',
//       description:
//         'The Melalumin SPF 15 lip lightener is specifically formulated to help lighten dark pigmentation on the lips, giving them a more even and natural tone.',
//       price: '2100',  // Price without ₹
//       image:
//         'https://www.clinikally.com/cdn/shop/files/a2_cad71030-d323-4f5d-986a-a57570d9dba3.jpg?v=1716271116&width=1000',
//     },
//     {
//       id: 2,
//       name: 'Dewderm Cream',
//       description:
//         'D Derm KT Cream is a combination medicine used in the treatment of various types of skin infections. It minimizes symptoms of inflammation such as redness, swelling, and itching by acting against the infection-causing microorganisms.',
//       price: '1000',  // Price without ₹
//       image:
//         'https://www.clinikally.com/cdn/shop/files/Dewdermmoisturisinglotion100g_3.jpg?v=1699427809&width=1000',
//     },
//     {
//       id: 3,
//       name: 'Nizral Shampoo',
//       description:
//         "Nizral 2 Solution 50ml is utilized to treat skin fungal infections like athlete's foot, thrush, and ringworm. It works by eliminating the fungi causing the skin infections.",
//       price: '1550',  // Price without ₹
//       image:
//         'https://www.secondmedic.com/app/asset/site_images/product/Secondmedic202402191295822.webp',
//     },
//     {
//       id: 4,
//       name: 'Acnelak Soap',
//       description:
//         'Acnelak Soap has a specialized oil-free formula that cleanses excess oil from acne-prone skin, leaving it completely clean.',
//       price: '750',  // Price without ₹
//       image: 'https://m.media-amazon.com/images/I/41LfmQ9M9ZL.jpg',
//     },
//     {
//       id: 5,
//       name: 'UV AVO Pro Spf50+ Sunscreen',
//       description:
//         'U.V. Avo Pro Spf 50 Gel is an effective sunscreen gel. It is a broad-spectrum gel-based sunscreen that leaves the skin shine-free and protects from sun exposure.',
//       price: '1300',  // Price without ₹
//       image: 'https://m.media-amazon.com/images/I/51wclSji5VL.jpg',
//     },
//     {
//       id: 6,
//       name: 'Elastoderm Cream 50g',
//       description:
//         'Elastoderm is an anti-stretch mark cream that helps reduce the length, depth, and color of stretch marks. Can be used for pregnancy and body stretch marks.',
//       price: '2500',  // Price without ₹
//       image: 'https://www.cureka.com/wp-content/uploads/2023/01/elastoderm-main2-1.jpg',
//     },
//   ];

// const ProductPage = () => {
//   const { productId } = useParams();
//   const product = products.find((p) => p.id === parseInt(productId));

//   if (!product) return <p>Product not found</p>;

//   const [quantity, setQuantity] = useState(1);
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, e.target.value);
//     setQuantity(value);
//   };

//   const handleAddToCart = () => {
//     const existingProduct = cart.find((item) => item.id === product.id);
//     const updatedCart = existingProduct
//       ? cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       : [...cart, { ...product, quantity }];

//     setCart(updatedCart);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     alert(`Added ${quantity} ${product.name}(s) to the cart.`);
//   };

//   const handleGoToCart = () => {
//     window.location.href = '/cart';
//   };

//   return (
//     <div className="container mx-auto p-5">
//       <Link
//         to="/"
//         className="absolute top-4 right-4 text-[#001f3f] hover:text-white transition duration-300 hover:scale-105"
//         style={{ zIndex: 1000 }}
//       >
//         <FaHome className="w-10 h-10 cursor-pointer" />
//       </Link>

//       <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-64 h-64 object-cover mb-4 md:mb-0 md:mr-8"
//         />
//         <div>
//           <h1 className="text-3xl font-semibold mb-4 text-[#001f3f]">{product.name}</h1>
//           <p className="text-lg text-gray-700 mb-4">{product.description}</p>
//           {/* Display price with ₹ symbol here */}
//           <p className="text-2xl font-bold mb-6">₹{product.price}</p>

//           <div className="flex items-center mb-4">
//             <label className="mr-4 text-[#001f3f]">Quantity:</label>
//             <input
//               type="number"
//               value={quantity}
//               min="1"
//               onChange={handleQuantityChange}
//               className="w-16 p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-xl transition duration-300 w-full"
//           >
//             <FaShoppingCart className="inline mr-2" />
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="mt-16">
//         <h2 className="text-2xl font-semibold text-center mb-4 text-[#001f3f]">Similar Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map(
//             (prod) =>
//               prod.id !== product.id && (
//                 <div
//                   key={prod.id}
//                   className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center"
//                 >
//                   <img
//                     src={prod.image}
//                     alt={prod.name}
//                     className="w-40 h-40 object-cover mb-4"
//                   />
//                   <h2 className="text-xl font-semibold mb-2 text-[#001f3f]">{prod.name}</h2>
//                   <p className="text-gray-500 mb-2">{prod.description}</p>
//                   {/* Display price with ₹ symbol here */}
//                   <p className="text-lg font-bold mb-4">₹{prod.price}</p>
//                   <Link
//                     to={`/product/${prod.id}`}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               )
//           )}
//         </div>
//       </div>

//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={handleGoToCart}
//           className="bg-yellow-600 text-black px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


// import React, { useState } from 'react';
// import { FaHome, FaShoppingCart } from 'react-icons/fa';

// // Mock Products Array (Modify as per your actual list)
// const products = [
//   {
//     id: 1,
//     name: 'Melalumin Lip Lightner',
//     description:
//       'The Melalumin SPF 15 lip lightener is specifically formulated to help lighten dark pigmentation on the lips, giving them a more even and natural tone.',
//     price: '2100', // Price without ₹
//     image:
//       'https://www.clinikally.com/cdn/shop/files/a2_cad71030-d323-4f5d-986a-a57570d9dba3.jpg?v=1716271116&width=1000',
//   },
//   {
//     id: 2,
//     name: 'Dewderm Cream',
//     description:
//       'D Derm KT Cream is a combination medicine used in the treatment of various types of skin infections. It minimizes symptoms of inflammation such as redness, swelling, and itching by acting against the infection-causing microorganisms.',
//     price: '1000', // Price without ₹
//     image:
//       'https://www.clinikally.com/cdn/shop/files/Dewdermmoisturisinglotion100g_3.jpg?v=1699427809&width=1000',
//   },
//   {
//     id: 3,
//     name: 'Nizral Shampoo',
//     description:
//       "Nizral 2 Solution 50ml is utilized to treat skin fungal infections like athlete's foot, thrush, and ringworm. It works by eliminating the fungi causing the skin infections.",
//     price: '1550', // Price without ₹
//     image:
//       'https://www.secondmedic.com/app/asset/site_images/product/Secondmedic202402191295822.webp',
//   },
//   {
//     id: 4,
//     name: 'Acnelak Soap',
//     description:
//       'Acnelak Soap has a specialized oil-free formula that cleanses excess oil from acne-prone skin, leaving it completely clean.',
//     price: '750', // Price without ₹
//     image: 'https://m.media-amazon.com/images/I/41LfmQ9M9ZL.jpg',
//   },
//   {
//     id: 5,
//     name: 'UV AVO Pro Spf50+ Sunscreen',
//     description:
//       'U.V. Avo Pro Spf 50 Gel is an effective sunscreen gel. It is a broad-spectrum gel-based sunscreen that leaves the skin shine-free and protects from sun exposure.',
//     price: '1300', // Price without ₹
//     image: 'https://m.media-amazon.com/images/I/51wclSji5VL.jpg',
//   },
//   {
//     id: 6,
//     name: 'Elastoderm Cream 50g',
//     description:
//       'Elastoderm is an anti-stretch mark cream that helps reduce the length, depth, and color of stretch marks. Can be used for pregnancy and body stretch marks.',
//     price: '2500', // Price without ₹
//     image: 'https://www.cureka.com/wp-content/uploads/2023/01/elastoderm-main2-1.jpg',
//   },
// ];

// const ProductPage = () => {
//   // Set initial product based on the first product in the array
//   const [currentProduct, setCurrentProduct] = useState(products[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, e.target.value);
//     setQuantity(value);
//   };

//   const handleAddToCart = () => {
//     const existingProduct = cart.find((item) => item.id === currentProduct.id);
//     const updatedCart = existingProduct
//       ? cart.map((item) =>
//           item.id === currentProduct.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         )
//       : [...cart, { ...currentProduct, quantity }];

//     setCart(updatedCart);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     alert(`Added ${quantity} ${currentProduct.name}(s) to the cart.`);
//   };

//   const handleGoToCart = () => {
//     window.location.href = '/cart';
//   };

//   // Function to handle product swap
//   const handleProductSwap = (productId) => {
//     const newProduct = products.find((p) => p.id === productId);
//     setCurrentProduct(newProduct);
//   };

//   return (
//     <div className="container mx-auto p-5">
//       <a
//         href="/"
//         className="absolute top-4 right-4 text-[#001f3f] hover:text-white transition duration-300 hover:scale-105"
//         style={{ zIndex: 1000 }}
//       >
//         <FaHome className="w-10 h-10 cursor-pointer" />
//       </a>

//       <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
//         <img
//           src={currentProduct.image}
//           alt={currentProduct.name}
//           className="w-64 h-64 object-cover mb-4 md:mb-0 md:mr-8"
//         />
//         <div>
//           <h1 className="text-3xl font-semibold mb-4 text-[#001f3f]">{currentProduct.name}</h1>
//           <p className="text-lg text-gray-700 mb-4">{currentProduct.description}</p>
//           <p className="text-2xl font-bold mb-6">₹{currentProduct.price}</p>

//           <div className="flex items-center mb-4">
//             <label className="mr-4 text-[#001f3f]">Quantity:</label>
//             <input
//               type="number"
//               value={quantity}
//               min="1"
//               onChange={handleQuantityChange}
//               className="w-16 p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-xl transition duration-300 w-full"
//           >
//             <FaShoppingCart className="inline mr-2" />
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <div className="mt-16">
//         <h2 className="text-2xl font-semibold text-center mb-4 text-[#001f3f]">Similar Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map(
//             (prod) =>
//               prod.id !== currentProduct.id && (
//                 <div
//                   key={prod.id}
//                   className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center"
//                 >
//                   <img
//                     src={prod.image}
//                     alt={prod.name}
//                     className="w-40 h-40 object-cover mb-4"
//                   />
//                   <h2 className="text-xl font-semibold mb-2 text-[#001f3f]">{prod.name}</h2>
//                   <p className="text-gray-500 mb-2">{prod.description}</p>
//                   <p className="text-lg font-bold mb-4">₹{prod.price}</p>
//                   <button
//                     onClick={() => handleProductSwap(prod.id)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               )
//           )}
//         </div>
//       </div>

//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={handleGoToCart}
//           className="bg-yellow-600 text-black px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

// Mock Products Array (Modify as per your actual list)
const products = [
  {
    id: 1,
    name: 'Melalumin Lip Lightner',
    description: 'The Melalumin SPF 15 lip lightener is specifically formulated to help lighten dark pigmentation on the lips, giving them a more even and natural tone.',
    price: '2100',
    image: 'https://www.clinikally.com/cdn/shop/files/a2_cad71030-d323-4f5d-986a-a57570d9dba3.jpg?v=1716271116&width=1000',
  },
  {
    id: 2,
    name: 'Dewderm Cream',
    description: 'D Derm KT Cream is a combination medicine used in the treatment of various types of skin infections...',
    price: '1000',
    image: 'https://www.clinikally.com/cdn/shop/files/Dewdermmoisturisinglotion100g_3.jpg?v=1699427809&width=1000',
  },
  {
    id: 3,
    name: 'Nizral Shampoo',
    description: 'Nizral 2 Solution 50ml is utilized to treat skin fungal infections...',
    price: '1550',
    image: 'https://www.secondmedic.com/app/asset/site_images/product/Secondmedic202402191295822.webp',
  },
  {
    id: 4,
    name: 'Acnelak Soap',
    description: 'Acnelak Soap has a specialized oil-free formula that cleanses excess oil from acne-prone skin...',
    price: '750',
    image: 'https://m.media-amazon.com/images/I/41LfmQ9M9ZL.jpg',
  },
  {
    id: 5,
    name: 'UV AVO Pro Spf50+ Sunscreen',
    description: 'U.V. Avo Pro Spf 50 Gel is an effective sunscreen gel. It is a broad-spectrum gel-based sunscreen...',
    price: '1300',
    image: 'https://m.media-amazon.com/images/I/51wclSji5VL.jpg',
  },
  {
    id: 6,
    name: 'Elastoderm Cream 50g',
    description: 'Elastoderm is an anti-stretch mark cream that helps reduce the length, depth, and color of stretch marks...',
    price: '2500',
    image: 'https://www.cureka.com/wp-content/uploads/2023/01/elastoderm-main2-1.jpg',
  },
];

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, e.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const updatedCart = existingProduct
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cart, { ...product, quantity }];

    setCart(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert(`Added ${quantity} ${product.name}(s) to the cart.`);
  };

  const handleGoToCart = () => {
    window.location.href = '/cart';
  };

  return (
    <div className="container mx-auto p-5 pt-16"> {/* Added top padding of 16 */}
      <Link
        to="/"
        className="absolute top-4 right-4 text-[#001f3f] text-5xl hover:text-white transition duration-300 hover:scale-105"
        style={{ zIndex: 1000 }}
      >
        <FaHome className="w-10 h-10 cursor-pointer" />
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center transform transition-transform duration-300 hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h1 className="text-3xl font-semibold mb-4 text-[#001f3f]">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">₹{product.price}</p>

          <div className="flex items-center mb-4">
            <label className="mr-4 text-[#001f3f]">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="w-16 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-xl transition duration-300 w-full"
          >
            <FaShoppingCart className="inline mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl text-white font-semibold text-center mb-4 text-[#001f3f]">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(
            (prod) =>
              prod.id !== product.id && (
                <div
                  key={prod.id}
                  className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105"  // Added transition and hover scale
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-40 h-40 object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 text-[#001f3f]">{prod.name}</h2>
                  <p className="text-gray-500 mb-2">{prod.description}</p>
                  <p className="text-lg font-bold mb-4">₹{prod.price}</p>
                  <Link
                    to={`/product/${prod.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              )
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleGoToCart}
          className="bg-yellow-500 text-2xl text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
