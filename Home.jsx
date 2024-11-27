import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Login from './Login';
import Registration from './Registration';
import Reminder from './Reminder';
import OrderPage from './OrderPage';
import Account from './Account';
import Cart from './Cart';
import SupplementsPage from './SupplementsPage';
import SkincarePage from './SkincarePage';
import Haircare from './HaircarePage';
import HealthDevicesPage from './HealthDevicesPage';
import LimitedTimeOffer from './LimitedTimeOffer';

  // Array of product details
  const products = [
    {
      id: 1,
      name: 'Melalumin Lip Lightner',
      description: 'The Melalumin SPF 15 lip lightener is specifically formulated to help lighten dark pigmentation on the lips, giving them a more even and natural tone.',
      imgSrc: 'https://www.clinikally.com/cdn/shop/files/a2_cad71030-d323-4f5d-986a-a57570d9dba3.jpg?v=1716271116&width=1000'
    },
    {
      id: 2,
      name: 'Dewderm Cream',
      description: 'D Derm KT Cream is a combination medicine used in the treatment of various types of skin infections. It minimizes symptoms of inflammation such as redness, swelling, and itching by acting against the infection-causing microorganisms.',
      imgSrc: 'https://www.clinikally.com/cdn/shop/files/Dewdermmoisturisinglotion100g_3.jpg?v=1699427809&width=1000'
    },
    {
      id: 3,
      name: 'Nizral Shampoo',
      description: 'Nizral 2 Solution 50ml is utilized to treat skin fungal infections like athlete\'s foot, thrush, and ringworm. It works by eliminating the fungi causing the skin infections.',
      imgSrc: 'https://www.secondmedic.com/app/asset/site_images/product/Secondmedic202402191295822.webp'
    },
    {
      id: 4,
      name: 'Acnelak Soap',
      description: 'Acnelak Soap has a specialized oil-free formula that cleanses excess oil from acne-prone skin, leaving it completely clean.',
      imgSrc: 'https://m.media-amazon.com/images/I/41LfmQ9M9ZL.jpg'
    },
    {
      id: 5,
      name: 'UV AVO Pro Spf50+ Sunscreen',
      description: 'U.V. Avo Pro Spf 50 Gel is an effective sunscreen gel. It is a broad-spectrum gel-based sunscreen that leaves the skin shine-free and protects from sun exposure.',
      imgSrc: 'https://m.media-amazon.com/images/I/51wclSji5VL.jpg'
    },
    {
      id: 6,
      name: 'Elastoderm Cream 50g',
      description: 'Elastoderm is an anti-stretch mark cream that helps reduce the length, depth, and color of stretch marks. Can be used for pregnancy and body stretch marks.',
      imgSrc: 'https://www.cureka.com/wp-content/uploads/2023/01/elastoderm-main2-1.jpg'
    }
  ];


const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");


  // Function to handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes slideInBottom {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `, styleSheet.cssRules.length);

  return (
    
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#001f3f] p-3">
  <div className="container mx-auto flex justify-between items-center">
    {/* Left Text with Gradient */}
    <div 
  className="text-2xl font-bold bg-gradient-to-r from-lime-300 to-teal-200 bg-clip-text text-transparent 
    transition-all duration-500 ease-in-out transform hover:scale-125 hover:animate-pulse hover:text-transparent"
>
  FirstHealth 
</div>


    {/* Right Links and Icons */}
    <div className="flex space-x-4">
      <Link to="/" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">Home</Link>
      <Link to="/login" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">Login</Link>
      <Link to="/register" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">Register</Link>
      <Link to="/order" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">Order</Link>

      {/* Account Icon */}
      <Link to="/account" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2 0 4 1 4 2v2H8v-2c0-1 2-2 4-2z" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </Link>


      {/* Reminder Icon */}
      <Link to="/reminder" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405C18.21 14.79 17 13.42 17 12V9a7 7 0 00-14 0v3c0 1.42-1.21 2.79-1.595 3.595L2 17h5m10 0a2 2 0 11-4 0h4z" />
              </svg>
      </Link>


      {/* Bag Icon */}
      <Link to="/cart" className="text-white text-2xl border border-transparent rounded-full hover:text-black px-4 py-2 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-2 12H5L3 3z" />
          <circle cx="9" cy="21" r="1" />
          <circle cx="15" cy="21" r="1" />
        </svg>
      </Link>

    </div>
  </div>
</nav>

      {/* Main Section */}
      {/* <div className="flex flex-col items-center justify-center h-[60vh] bg-gradient-to-r from-[#001f3f]">
        <h1 className="text-5xl font-bold text-white">Welcome to <span className='text-5xl font-bold text-red transition duration-700 hover:bg-gradient-to-r hover:from-lime-300 hover:to-teal-200 hover:bg-clip-text hover:text-transparent'>Radhika Pharmacy</span></h1>
        <p className="mt-7 text-3xl text-white">Your one-stop store for health & wellness!</p>
        <div className="mt-5 flex space-x-4">
        <Link to="/order" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-2xl hover:bg-black hover:text-white transition duration-300">Order Now</Link>
        <Link to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-2xl hover:bg-black hover:text-white transition duration-300">Login</Link>
        </div>
      </div> */}

      {/* Main Section */}
<div className="flex flex-col items-center justify-center h-[60vh] bg-gradient-to-r from-[#001f3f]">
  {/* Heading with slide and color transition */}
  <h1 className="text-5xl font-bold text-white transition-transform duration-1000 ease-in-out transform hover:translate-y-1">
    Welcome to <span className='text-5xl font-bold text-red transition duration-700 hover:bg-gradient-to-r hover:from-lime-300 hover:to-teal-200 hover:bg-clip-text hover:text-transparent'>
      1stHealth Pharmacy
    </span>
  </h1>

  {/* Paragraph with fade-in animation */}
  <p className="mt-7 text-3xl text-white opacity-0" style={{ animation: "fadeIn 2s ease-in-out forwards" }}>
    Your one-tap store for health & wellness!
  </p>

  {/* Buttons with scaling hover animation */}
  <div className="mt-5 flex space-x-4">
    <Link to="/order" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-black hover:text-white">
      Order Now
    </Link>
    <Link to="/login" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-black hover:text-white">
      Login
    </Link>
  </div>
</div>

{/* Inline CSS for fadeIn animation */}
<style jsx="true">{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`}</style>


{/* Search Bar */}
<div className="flex justify-center mt-8">
  <input
    type="text"
    placeholder="Search for meds, healthcare products, instruments..."
    className="border-2 border-gray-300 rounded-lg w-2/4 p-3 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg focus:scale-110 focus:shadow-xl focus:outline-none focus:border-blue-500 focus:bg-white opacity-90 hover:opacity-100 focus:opacity-100"
    value={searchTerm}
    onChange={handleSearch}
  />
</div>



{/* Product Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-12 relative">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <div key={product.id} className="transition-shadow duration-300 hover:scale-105 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform duration-500 hover:scale-105 relative flex flex-col justify-between h-full">
        {/* Product Image */}
        <img 
          src={product.imgSrc} 
          alt={product.name} 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        
        {/* Product Text Section */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h2>
          <p className="mt-2 text-gray-500">{product.description}</p>
        </div>
        
        {/* Movable Buy Now Button */}
        <div className="mt-4 flex ">
          <Link
            to={`/products/${product.id}`}
            className="bg-yellow-500 text-black font-medium py-2 px-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-black hover:text-white"
            style={{ zIndex: '10' }}
          >
            Buy Now
          </Link>
        </div>
      </div>
    ))
  ) : (
    <p className="text-xl text-center text-gray-500 mt-12">No products found.</p>
  )}
</div>




 {/* Search Bar */}
 {/* <div className="flex justify-center mt-8 transition-transform duration-300 hover:scale-105 ">
        <input
          type="text"
          placeholder="Search for meds, healthcare products, instruments..."
          className="border-2 border-gray-300 rounded-lg w-2/4 p-3"
          value={searchTerm}
          onChange={handleSearch} // Add onChange event to capture user input
        />
</div> */}

      {/* Product Categories Section */}
      <div className="mt-16">
  <h2 className="text-4xl font-bold text-center mb-8">Explore Categories</h2>
  <div className="flex justify-center space-x-8">
    {/* Medicines Category - Redirects to Order Page */}
<Link to="/order" className="text-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300">
  <img src="https://st4.depositphotos.com/6097600/27957/i/450/depositphotos_279576438-stock-photo-drug-prescription-for-treatment-medication.jpg" alt="Medicines" className="w-30 h-24 mx-auto" />
  <p className="mt-2 text-lg text-white">Medicines</p>
</Link>

{/* Supplements Category - Redirects to Supplements Page */}
<Link to="/supplements" className="text-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300">
  <img src="https://st2.depositphotos.com/1755706/6791/i/450/depositphotos_67915429-stock-photo-variety-of-nutritional-supplements.jpg" alt="Supplements" className="w-30 h-24 mx-auto" />
  <p className="mt-2 text-lg text-white">Supplements</p>
</Link>

{/* Haircare Category - Redirects to Haircare Page */}
<Link to="/haircare" className="text-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300">
  <img src="https://st3.depositphotos.com/20363444/34569/i/450/depositphotos_345691366-stock-photo-happy-girl-wiping-wet-clean.jpg" alt="Haircare" className="w-30 h-24 mx-auto" />
  <p className="mt-2 text-lg text-white">Haircare</p>
</Link>

{/* Health Devices Category - Redirects to Health Devices Page */}
<Link to="/health-devices" className="text-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300">
  <img src="https://st3.depositphotos.com/12039478/15527/i/450/depositphotos_155273402-stock-photo-stethoscope-and-clipboard-with-diagnosis.jpg" alt="Health Devices" className="w-30 h-24 mx-auto" />
  <p className="mt-2 text-lg text-white">Health Devices</p>
</Link>

{/* Skincare Category - Redirects to Skincare Page */}
<Link to="/skincare" className="text-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300">
  <img src="https://st4.depositphotos.com/12982378/24611/i/450/depositphotos_246112536-stock-photo-close-view-tender-girl-freckles.jpg" alt="Skincare" className="w-30 h-24 mx-auto" />
  <p className="mt-2 text-lg text-white">Skincare</p>
</Link>

{/* Essentials Category - Redirects to Product Page for Product ID 1 */}
<Link to="/products/1" className="text-center hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.7)] transition-transform transition-shadow duration-300">
  <img src="https://st2.depositphotos.com/1755706/6791/i/450/depositphotos_67915429-stock-photo-variety-of-nutritional-supplements.jpg" alt="Essentials" className="w-30 h-24 mx-auto" />
  <p className="mt-2 text-lg text-white">Essentials</p>
</Link>


  </div>
</div>





<Link to="/deals" className="block mt-12 px-12">
      <div 
        className="bg-gradient-to-r from-custom-yellow via-custom-red to-custom-orange p-6 rounded-lg justify-col justify-center items-center hover:bg-blue-200 transition duration-300 hover:scale-105"
        style={{ animation: 'slideInBottom 1s ease-out' }} // Apply the animation here
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Limited Time Offer</h2>
        <p className="text-center">Get up to 50% off on selected products. Hurry, offer ends soon!</p>
      </div>
    </Link>




{/* People Review Section */}
<div className="mt-16 bg-gray-800 py-10">
  <h2 className="text-4xl font-bold text-center mb-8 text-white">What Our Customers Say</h2>
  <div className="flex justify-center space-x-8">
    {/* Review Card 1 */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-500">
      <div className="text-center mb-4">
        <i className="fas fa-user-circle text-4xl text-white"></i> {/* Font Awesome user icon */}
      </div>
      <p className="text-lg text-white text-center">Great service and fast delivery! Highly recommend this pharmacy!</p>
      <p className="mt-2 text-md text-gray-400 text-center">- John Doe</p>
    </div>
    {/* Review Card 2 */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-500">
      <div className="text-center mb-4">
        <i className="fas fa-user-circle text-4xl text-white"></i> {/* Font Awesome user icon */}
      </div>
      <p className="text-lg text-white text-center">Wide variety of products and excellent customer support!</p>
      <p className="mt-2 text-md text-gray-400 text-center">- Jane Smith</p>
    </div>
    {/* Review Card 3 */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-500">
      <div className="text-center mb-4">
        <i className="fas fa-user-circle text-4xl text-white"></i> {/* Font Awesome user icon */}
      </div>
      <p className="text-lg text-white text-center">I always find what I need here. Love the discounts!</p>
      <p className="mt-2 text-md text-gray-400 text-center">- Emily Johnson</p>
    </div>
  </div>
</div>

{/* Founder Section */}
<div className="mt-12 px-12 py-12 bg-gradient-to-r from-[#001f3f]">
 
  
  <div className="flex flex-col md:flex-row items-center justify-center">
    {/* Founder Image */}
    <div className="w-full md:w-auto flex justify-center hover:scale-105 duration-500">
      <img 
        src="src/assets/satish.jpeg" 
        alt="Founder" 
        className="w-48 h-72 md:w-64 md:h-96 object-cover shadow-lg" 
      />
    </div>
    {/* Founder Info */}
    <div className="w-full md:w-2/3 mt-8 md:mt-0 md:ml-12">
    <h2 className="text-4xl font-bold text-white mb-8">Meet the founder: Satish Begwani</h2>
      <p className="mt-4 text-lg text-white">
        Satish Begwani, the visionary behind FirstHealth Pharmacy, founded the company with the mission of providing accessible healthcare solutions to everyone. With his extensive knowledge in pharmacy and a passion for wellness, Mr. Begwani aims to create a trusted platform that prioritizes customer care and quality products.
      </p>
      <p className="mt-4 text-lg text-white">
        My goal is to ensure that everyone has access to the best healthcare products, with the convenience of home delivery. We at FirstHealth Pharmacy are committed to supporting your journey to better health.
      </p>
      <p className="mt-4 text-lg text-white">- Satish Begwani, Founder & CEO</p>
    </div>
  </div>
</div>

            {/* Footer */}
<footer className="bg-gray-800 text-white mt-16">
  <div className="container mx-auto py-10 px-6">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-bold mb-2">1stHealth Pharmacy</h3>
        <p>Madhav Plaza, Gwalior (474009)</p>
        <p>Email: firsthealthpharmacy@gmail.com</p>
        <p>Contact: +91 9425336135 / +91 7389826135</p>
        <p className="mt-2 text-sm italic">Your Trusted Partner in Health Across India</p>
      </div>
      <div className="pr-8">
        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
        <ul>
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/login" className="hover:text-yellow-500">Login</Link></li>
          <li><Link to="/register" className="hover:text-yellow-500">Register</Link></li>
          <li><Link to="/order" className="hover:text-yellow-500">Order</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} FirstHealth Pharmacy. All rights reserved.</p>
      <p className="text-sm mt-1">Integrating modern medicine with traditional wisdom.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;




