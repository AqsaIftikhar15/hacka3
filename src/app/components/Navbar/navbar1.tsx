import Image from "next/image";
import Link from "next/link";

export default function Navbar1() {
    return (
      <div className="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500 mb-4">
        <Image src={"/logo1.png"} alt="Website Logo" width={24} height={14} />

        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="#" className="hover:text-gray-800">Find Store | </Link>
          <Link href="#" className="hover:text-gray-800"> Help | </Link>
          <Link href="#" className="hover:text-gray-800"> Join Us | </Link>
          <Link href="/Signin" className="hover:text-gray-800"> Sign In </Link>
        </div>
        
      </div>
    );
  }
  