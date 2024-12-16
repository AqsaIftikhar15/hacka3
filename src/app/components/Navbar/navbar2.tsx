'use client';

import React from "react";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo2 from "../../../../public/logo2.png";

const Navbar2 = () => {
  return (
    <nav className="bg-white mb-4 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={logo2} className="h-auto w-28" alt="Nike Logo" />
        </div>

        {/* Navbar Links */}
        <ul className="flex flex-row space-x-8 text-sm font-medium">
          <li>
            <Link href="/sidebar" className="text-gray-900 hover:underline">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/men" className="text-gray-900 hover:underline">
              Men
            </Link>
          </li>
          <li>
            <Link href="/women" className="text-gray-900 hover:underline">
              Women
            </Link>
          </li>
          <li>
            <Link href="/kids" className="text-gray-900 hover:underline">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/sale" className="text-gray-900 hover:underline">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/snkrs" className="text-gray-900 hover:underline">
              SNKRS
            </Link>
          </li>
        </ul>

        {/* Search and Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Search Box */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1">
            <SearchIcon />
            <input
              type="text"
              className="ml-2 outline-none bg-transparent border-none focus:ring-0"
              placeholder="Search..."
            />
          </div>

          {/* Favorite and Cart Icons */}
          <Link href="/favorites" className="text-gray-900 hover:underline">
            <FavoriteBorderIcon />
          </Link>
          <Link href="/cart" className="text-gray-900 hover:underline">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
