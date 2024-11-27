import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load the components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const OrderPage = React.lazy(() => import('./pages/OrderPage'));
const Login = React.lazy(() => import('./pages/Login'));
const Registration = React.lazy(() => import('./pages/Registration'));
const Account = React.lazy(() => import('./pages/Account'));
const Reminder = React.lazy(() => import('./pages/Reminder'));
const Cart = React.lazy(() => import('./pages/Cart'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const SupplementsPage = React.lazy(() => import('./pages/SupplementsPage')); // Added
const HaircarePage = React.lazy(() => import('./pages/HaircarePage'));       // Added
const HealthDevicesPage = React.lazy(() => import('./pages/HealthDevicesPage')); // Added
const SkincarePage = React.lazy(() => import('./pages/SkincarePage'));       // Added
const LimitedTimeOffer = React.lazy(()=> import('./pages/LimitedTimeOffer'));

// Fallback component for lazy loading
const Fallback = () => (
  <div className="flex items-center justify-center h-screen text-white">
    <h2>Loading...</h2>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#001f3f] to-[#FFD700] text-black">
        {/* Suspense wrapper to handle the fallback while pages are loading */}
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/supplements" element={<SupplementsPage />} />    {/* Added */}
            <Route path="/haircare" element={<HaircarePage />} />          {/* Added */}
            <Route path="/health-devices" element={<HealthDevicesPage />} /> {/* Added */}
            <Route path="/skincare" element={<SkincarePage />} />          {/* Added */}
            <Route path="/deals" element={<LimitedTimeOffer />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
