import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const medicationsData = [
    { id: 1, name: "Aspirin Tablets", price: 50, image: "https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg" },
    { id: 2, name: "Ibuprofen Tablets", price: 75, image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301541063/BT/YB/AK/7034457/ibuprofen-tablets-500x500.jpg" },
    { id: 3, name: "Paracetamol Tablets", price: 30, image: "https://5.imimg.com/data5/SELLER/Default/2021/12/LK/ON/KX/43755673/paracetamol-500mg-tablet-500x500.jpg" },
    { id: 4, name: "Amoxicillin Capsules", price: 120, image: "https://5.imimg.com/data5/ANDROID/Default/2023/4/302037696/HU/JI/VN/116627000/product-jpeg-500x500.jpg" },
    { id: 5, name: "Metformin Tablets", price: 60, image: "https://images.ctfassets.net/4w8qvp17lo47/6vXaH4Y5Gw6AMEmASwGkc6/e6ff962a82811e4d160cc2d5c0d8b3cb/metformin-antidiabetic-tablets-science-photo-library.jpg" },
    { id: 6, name: "Ciprofloxacin Tablets", price: 90, image: "https://dorsapharma.com/uploads/products/%D8%B3%DB%8C%D9%BE%D8%B1%D9%88%D9%81%D9%84%D9%88%DA%A9%D8%B3%D8%A7%D8%B3%DB%8C%D9%86%20copy.jpg" },
    { id: 7, name: "Lisinopril Tablets", price: 80, image: "https://dorsapharma.com/uploads/products/%D8%B3%DB%8C%D9%BE%D8%B1%D9%88%D9%81%D9%84%D9%88%DA%A9%D8%B3%D8%A7%D8%B3%DB%8C%D9%86%20copy.jpg" },
    { id: 8, name: "Atorvastatin Tablets", price: 100, image: "https://bizimages.withfloats.com/actual/915ff6d4005f47c6bc6a03b630f48021.jpg" },
    { id: 9, name: "Simvastatin Tablets", price: 70, image: "https://cpimg.tistatic.com/06893669/b/4/Simvastatin-Ezetimibe-Tablets.jpg" },
    { id: 10, name: "Levothyroxine Tablets", price: 40, image: "https://yaralpharma.com/wp-content/uploads/2023/06/Levothyroxine-box-and-blister-1024x958.jpg" },
    { id: 11, name: "Naproxen Tablets", price: 85, image: "https://www.aflofarm.com.pl/media/__sized__/produkt_zdjecia/naproxen-aflofarm-zdjecie-glowne-M2-thumbnail-450x450.png" },
    { id: 12, name: "Clopidogrel Tablets", price: 95, image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Clopidogrel_Oral_Tablet-732x549-thumbnail-1-732x549.jpg" },
    { id: 13, name: "Warfarin Tablets", price: 150, image: "https://assets.heartfoundation.org.nz/images/all-shared-sections/blogs/warfarin.jpg?mtime=1669000868" },
    { id: 14, name: "Omeprazole Tablets", price: 110, image: "https://www.adegenpharma.com/wp-content/uploads/2023/02/OMILESS-20-CAPSULE.jpg" },
    { id: 15, name: "Hydrochlorothiazide Tablets", price: 40, image: "https://5.imimg.com/data5/SELLER/Default/2022/10/LM/RA/LN/129230798/hydrochlorothiazide-tablets.jpg" },
    { id: 16, name: "Gabapentin Capsules", price: 70, image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355908629/SH/LU/PF/149589108/gabapentin-capsules-ip-300-mg.jpg" },
    { id: 17, name: "Furosemide Tablets", price: 25, image: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0006_2.jpg" },
    { id: 18, name: "Metoprolol Tablets", price: 90, image: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0006_2.jpg" },
    { id: 19, name: "Escitalopram Tablets", price: 120, image: "https://dwatson.pk/media/catalog/product/cache/05d0b9b316ef5704ebda3486c0293fcb/E/s/Esc_egg_shell_calcium_tab.png" },
    { id: 20, name: "Cetirizine Tablets", price: 60, imageUrl: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0006_2.jpg" },
    { id: 21, name: "Cough Syrup", price: 85, image: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0006_2.jpg" },
    { id: 22, name: "Paracetamol Syrup", price: 60, image: "https://www.netprimepharma.com/wp-content/uploads/2021/06/Fixflem-plus-suspension-1.jpg" },
    { id: 23, name: "Amoxicillin Syrup", price: 100, image: "https://5.imimg.com/data5/SELLER/Default/2023/8/334790578/JT/LJ/TY/6299000/amoxicillin-trihydrate-syrup.jpeg" },
    { id: 24, name: "Ibuprofen Syrup", price: 90, image: "https://www.arlakbiotech.com/wp-content/uploads/2023/09/BRUCARE-PLUS.jpg" },
    { id: 25, name: "Antacid Syrup", price: 75, image: "https://cdn01.pharmeasy.in/dam/products_otc/Z63893/liveasy-wellness-antacid-mint-flavour-sugar-free-bottle-of-200ml-oral-liquid-2-1695207631.jpg?dim=400x0&dpr=1&q=100" },
    { id: 26, name: "Lactulose Syrup", price: 50, image: "https://www.orionlifes.com/wp-content/uploads/2020/08/LACTOXX-200-ML-SYP-NEW-1.jpeg" },
    { id: 27, name: "Dextromethorphan Syrup", price: 110, image: "https://5.imimg.com/data5/SELLER/Default/2022/1/YP/PK/HC/95289/loratadine-syrup-500x500.jpeg" },
    { id: 28, name: "Guaifenesin Syrup", price: 95, image: "https://5.imimg.com/data5/SELLER/Default/2022/1/YP/PK/HC/95289/loratadine-syrup-500x500.jpeg" },
    { id: 29, name: "Salbutamol Syrup", price: 120, image: "https://5.imimg.com/data5/SELLER/Default/2022/1/YP/PK/HC/95289/loratadine-syrup-500x500.jpeg" },
    { id: 30, name: "Loratadine Syrup", price: 100, image: "https://5.imimg.com/data5/SELLER/Default/2022/1/YP/PK/HC/95289/loratadine-syrup-500x500.jpeg" },
    { id: 31, name: "Insulin Syringe", price: 150, image: "https://cdn11.bigcommerce.com/s-tvpg77x4p0/images/stencil/1280x1280/products/12923/42789/4e973925-53e7-4cd8-8eda-19deac726e72_TRIS4H01B30100__93932.1698391020.png?c=1" },
    { id: 32, name: "Adrenaline Syringe", price: 200, image: "https://www.shutterstock.com/image-illustration/adrenaline-addiction-3d-concept-600nw-153874907.jpg" },
    { id: 33, name: "Vitamin B12 Syringe", price: 180, image: "https://cdn.prod.website-files.com/64c8b8901ad20c3518e174ff/66cf36ce8ac6351ece892a3f_Blog%20Header%20(1).png" },
    { id: 34, name: "Heparin Syringe", price: 220, image: "https://www.fresenius-kabi.com/us/images/Simplist_Heparin2_rdax_694x374.png" },
    { id: 35, name: "Morphine Syringe", price: 250, image: "https://5.imimg.com/data5/SELLER/Default/2023/10/355908629/SH/LU/PF/149589108/gabapentin-capsules-ip-300-mg.jpg" },
    { id: 36, name: "Ceftriaxone Syringe", price: 230, image: "https://5.imimg.com/data5/SELLER/Default/2021/1/NY/CX/LH/2068994/dextromethorphan-hydrobromide-phenylephrine-hydrobromide-chlorpheniramine-maleate-syrup.jpeg" },
    { id: 37, name: "Epinephrine Syringe", price: 300, image: "https://5.imimg.com/data5/SELLER/Default/2021/1/NY/CX/LH/2068994/dextromethorphan-hydrobromide-phenylephrine-hydrobromide-chlorpheniramine-maleate-syrup.jpeg" },
    { id: 38, name: "Hydrocortisone Syringe", price: 210, image: "https://homeobasket.com/wp-content/uploads/2023/04/Cortisone-400x400.jpg" },
    { id: 39, name: "Penicillin Syringe", price: 190, image: "https://5.imimg.com/data5/SELLER/Default/2022/2/ZD/JG/MR/135124068/ampicillin-cloxacillin-dry-syrup.jpg" },
    { id: 40, name: "Gentamicin Syringe", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZmy3W5uzI8epLVDMMafqsxtALEnniiA-I-4VMNN9LaOqmyyVVNR_pjuW_yQNo81JiGtQ&usqp=CAU" },
    { id: 41, name: "Zinc Syrup", price: 70, image: "https://m.media-amazon.com/images/I/719+kMvq-1L.jpg" },
    { id: 42, name: "Iron Syrup", price: 60, image: "https://m.media-amazon.com/images/I/719+kMvq-1L.jpg" },
    { id: 43, name: "Cough Suppressant Syrup", price: 95, image: "https://5.imimg.com/data5/SELLER/Default/2024/8/444209035/XW/PS/LQ/211720643/acetaminophen-dextromethorphan-doxylamine-phenylephrine-syrup.png" },
    { id: 44, name: "Lisinopril Syrup", price: 80, image: "https://5.imimg.com/data5/SELLER/Default/2024/8/444209035/XW/PS/LQ/211720643/acetaminophen-dextromethorphan-doxylamine-phenylephrine-syrup.png" },
    { id: 45, name: "Doxylamine Syrup", price: 75, image: "https://5.imimg.com/data5/SELLER/Default/2024/8/444209035/XW/PS/LQ/211720643/acetaminophen-dextromethorphan-doxylamine-phenylephrine-syrup.png" },
    { id: 46, name: "Magnesium Syrup", price: 100, image: "https://media.healthnews.com/images/featured/2023/04/Vitamin-D-Injections.jpg" },
    { id: 47, name: "Saline Syringe", price: 90, image: "https://media.healthnews.com/images/featured/2023/04/Vitamin-D-Injections.jpg" },
    { id: 48, name: "Vitamin D Syringe", price: 160, image: "https://media.healthnews.com/images/featured/2023/04/Vitamin-D-Injections.jpg" },
    { id: 49, name: "Hydromorphone Syringe", price: 290, image: "https://www.benadryl.com.ph/sites/benadryl_ph/files/product-images/benadrylone_sidetablet_0.png" },
    { id: 50, name: "Antihistamine Syrup", price: 110, image: "https://www.benadryl.com.ph/sites/benadryl_ph/files/product-images/benadrylone_sidetablet_0.png" },
    { id: 51, name: "Fluoxetine Tablets", price: 85, image: "https://5.imimg.com/data5/SELLER/Default/2023/7/329417930/CV/MW/NN/187995913/fluoxetine-hydrochloride-tablets.jpeg" },
];


const OrderPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [bag, setBag] = useState([]);

    // Handle adding items to the bag
    const handleAddToBag = (medication, quantity) => {
        if (quantity < 1) return;
        const existingItem = bag.find(item => item.id === medication.id);
        if (existingItem) {
            const updatedBag = bag.map(item =>
                item.id === medication.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            setBag(updatedBag);
        } else {
            setBag([...bag, { ...medication, quantity }]);
        }
    };

    const handleIncreaseQuantity = (id) => {
        setBag(bag.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecreaseQuantity = (id) => {
        setBag(bag.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const handleRemoveFromBag = (id) => {
        setBag(bag.filter(item => item.id !== id));
    };

    const handleMoveToCart = () => {
        let currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        bag.forEach(item => {
            const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                currentCart.push(item);
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(currentCart));
        handleGoToCart();
    };

    const handleGoToCart = () => {
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
            <h2 className="text-5xl font-bold text-white text-center mb-4">Order Medications</h2>

            <div className="flex justify-center mb-4 text-2xl transition-transform duration-300 hover:scale-105">
                <input
                    type="text"
                    placeholder="Search medications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-1/2 hover:transform-transition duration-450"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {medicationsData.filter(med => med.name.toLowerCase().includes(searchTerm.toLowerCase())).map(med => (
                    <div key={med.id} className="bg-gradient-to-r from-[#001f3f] shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <img src={med.image} alt={med.name} className="w-24 h-24 object-cover mb-4" /> {/* Image added */}
                        <h3 className="text-lg font-semibold text-white">{med.name}</h3>
                        <p className="text-gray-600 text-white">Price: ₹{med.price}</p>

                        <div className="mt-2 flex items-center">
                            <button
                                className="bg-gray-200 font-semibold text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                                onClick={() => handleDecreaseQuantity(med.id)}
                            >
                                -
                            </button>
                            <span className="mx-4 text-lg text-white">{bag.find(item => item.id === med.id)?.quantity || 1}</span>
                            <button
                                className="bg-gray-200 font-semibold text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                                onClick={() => handleIncreaseQuantity(med.id)}
                            >
                                +
                            </button>
                        </div>

                        <div className="mt-4 space-x-4">
                            <button
                                className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-black hover:text-white"
                                onClick={() => {
                                    const quantity = bag.find(item => item.id === med.id)?.quantity || 1;
                                    handleAddToBag(med, quantity);
                                }}
                            >
                                Add to Bag
                            </button>
                            <button
                                className="bg-red-700 text-white px-4 py-1 rounded hover:bg-red-900"
                                onClick={() => handleRemoveFromBag(med.id)}
                            >
                                Remove
                            </button>
                        </div>
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

export default OrderPage;
