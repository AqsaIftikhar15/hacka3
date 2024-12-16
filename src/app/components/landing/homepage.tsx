import Image from "next/image";
import ProductShowcase from "../../components/landing/products";
import Navbar3 from "../Navbar/navbar3";



export default function Home() {
  return (
    <>
      {/* Hero Section */}

      <Navbar3/>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Image
          src="/airmax.png" // Use path from public folder
          alt="airmax"
          className="w-[1200px] h-[500px] mt-0 ml-4 mr-4"
          width={1200} // Add width and height for optimization
          height={500}
        />
        <div className="space-y-4">
          <p className="text-sm">First look</p>
          <h1 className="text-3xl font-bold">NIKE AIR MAX PULSE</h1>
          <p className="text-sm max-w-xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Notify Me</button>
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Shop Air Max</button>
          </div>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="w-[1270px] flex justify-between items-center flex-wrap">
        <p className="mt-4 ml-10 text-xl font-bold">Best of Air Max</p>
        <div className="mr-10 flex items-center">
          <p className="mr-4 text-lg font-medium">Shop</p>
          <div className="flex space-x-4">
            {/* Left Arrow Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
              <span className="text-white text-xl">&#8592;</span> {/* Left Arrow */}
            </div>
            {/* Right Arrow Circle */}
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400">
              <span className="text-white text-xl">&#8594;</span> {/* Right Arrow */}
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-6 mt-10 px-4">
        {/* Card 1 */}
        <div className="w-[380px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/shoe1.png" // Correct path from public folder
            alt="Nike Air Max Pulse"
            className="w-full h-[70%] object-cover"
            width={380}
            height={350}
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-bold text-black">Nike Air Max Pulse</h2>
              <p className="text-sm font-semibold text-black">$13,995</p>
            </div>
            <p className="text-[#757575] text-xs">Women's Shoes</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[380px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/shoe1.png" // Correct path from public folder
            alt="Nike Air Max Pulse"
            className="w-full h-[70%] object-cover"
            width={380}
            height={350}
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-bold text-black">Nike Air Max Pulse</h2>
              <p className="text-sm font-semibold text-black">$13,995</p>
            </div>
            <p className="text-[#757575] text-xs">Men's Shoes</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[380px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/shoe2.png" // Correct path from public folder
            alt="Nike Air Max Pulse"
            className="w-full h-[70%] object-cover"
            width={380}
            height={350}
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-bold text-black">Nike Air Max 97 SE</h2>
              <p className="text-sm font-semibold text-black">$13,995</p>
            </div>
            <p className="text-[#757575] text-xs">Women's Shoes</p>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="w-[1270px] flex justify-between items-center flex-wrap">
        <p className="mt-4 ml-10 text-xl font-bold">Featured</p>
      </div>
      <div className="flex justify-center mb-10"> 
        <Image
          src="/feature.png" // Correct path from public folder
          alt="featuring"
          className="w-[1200px] h-[500px] mx-auto"
          width={1200}
          height={500}
        />
      </div>

      {/* Step Into What Feels Good Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-sm max-w-xl mx-auto">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Find Your Shoes</button>
          </div>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="w-[1270px] flex justify-between items-center flex-wrap">
        <p className="mt-4 ml-10 text-xl font-bold">Gear Up</p>
      </div>
      <ProductShowcase/>

      {/* Don't Miss Section */}
      <div className="w-[1270px] flex justify-between items-center flex-wrap">
        <p className="mt-4 ml-10 text-xl font-bold">Don't Miss</p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <Image
          src="/dontmiss.png" // Correct path from public folder
          alt="don't miss"
          className="w-[1200px] h-[500px] mt-0 ml-4 mr-4"
          width={1200}
          height={500}
        />
      </div>

      {/* Flight Essentials Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">FLIGHT ESSENTIALS</h1>
          <p className="text-sm max-w-xl mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-2 bg-black text-white rounded-[30px]">Shop</button>
          </div>
        </div>
      </div>

      {/* The Essentials Section */}
      <div className="w-[1270px] flex justify-between items-center flex-wrap">
        <p className="mt-4 ml-10 text-xl font-bold">The Essentials</p>
      </div>
      <div className="flex justify-center space-x-3 mt-10 px-7">
        <div className="w-[380px] h-600">
          <Image
            src="/ess1.png" // Correct path from public folder
            alt="Essentials 1"
            className="w-full h-120 object-cover"
            width={380}
            height={120}
          />
        </div>
        <div className="w-[380px] h-600">
          <Image
            src="/ess2.png" // Correct path from public folder
            alt="Essentials 2"
            className="w-full h-120 object-cover"
            width={380}
            height={120}
          />
        </div>
        <div className="w-[380px] h-600">
          <Image
            src="/ess3.png" // Correct path from public folder
            alt="Essentials 3"
            className="w-full h-120 object-cover"
            width={380}
            height={120}
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-transparent text-white py-10 mt-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 sm:px-6">
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Icons</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">Air Force 1</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Huarache</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Air Max 90</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Air Max 95</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Shoes</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">All Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Custom Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Jordan Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Running Shoes</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Clothing</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">All Clothing</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Modest Clothing</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Hoodies & Pullovers</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Shirts & Tops</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-black text-sm">Kids'</h5>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline text-gray-600">Infants & Toddlers Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Kids' Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Kids' Jordan Shoes</a></li>
                <li><a href="#" className="hover:underline text-gray-600">Kids' Basketball Shoes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
