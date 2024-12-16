import Sidebar from '../../app/components/Navbar/sidenav';
import ProductCards from '../../app/productdetail/procard'; 
import { ArrowDropDown as DropdownIcon } from '@mui/icons-material'; // Import icons from MUI
import Link from "next/link";
import React from "react";

const SidebarPage = () => {
  return (
    <>
      <div className="bg-white flex justify-between items-center px-6 py-4 md:text-sm sm:text-xs text-xs font-medium text-gray-700 mb-4 shadow-md">
        <h2 className="text-black">New (500)</h2>

        <div className="flex md:gap-6 sm:gap-4 gap-3">
         
          <Link href="#" className="hover:text-gray-800 flex items-center gap-2">
            Hide Filters
          </Link>

          <Link href="#" className="hover:text-gray-800 flex items-center gap-2">
            Sort By
            <DropdownIcon className="ml-1" /> 
          </Link>
        </div>
      </div>

      
      <div className="flex">
        
        <div className="w-1/4"> 
          <Sidebar />
        </div>


        <div className="w-3/4 p-6">  
          < ProductCards/>
        </div>


        
      </div>
    </>
  );
};

export default SidebarPage;
