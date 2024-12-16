import React from 'react';
import Image from 'next/image';

const ProductDetailPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nike Court Vision Low Next Nature</h1>

      <Image
        src="/page3.png" 
        alt="Nike Court Vision Low"
        width={300}
        height={300}
        className="mb-4"
      />

      <p className="text-lg font-semibold">Men's Shoes</p>

      <p className="text-sm mt-2">
        Description: Turn style on its head with this crafted take on the Nike Court Vision. Its sleek design is perfect for everyday wear, with premium materials and comfort.
      </p>

      <span className="text-xl font-bold text-gray-800 mt-2">Price: ₹ 6,295.00</span>
      
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
