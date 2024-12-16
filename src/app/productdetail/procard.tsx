// /app/components/ProductCards.tsx
import Image from 'next/image';
import Link from 'next/link';
const cardData = [
  {
    image: '/cr1.png', 
    name: 'Nike Air Force 1 Mid \'07',
    description: 'Men\'s Shoes',
    price: '9,695.00',
  },
  {
    image: '/cr2.png', 
    name: 'Nike Air Force 1 Low Next Nature',
    description: 'Women\'s Shoes',
    price: '7,295.00',
  },
  {
    image: '/cr3.png', 
    name: 'Nike Court Vision Low Next Nature',
    description: 'Men\'s Shoes',
    price: '6,295.00',
    link: '/productdetail/1shoe', 
  },
  {
    image: '/cr4.png', 
    name: 'Nike Standard Issue',
    description: 'Women\'s Basketball Jersey',
    price: '2,695.00',
  },
  {
    image: '/cr5.png', 
    name: 'Nike Dri-FIT',
    description: 'Men\'s Sports Top',
    price: '2,495.00',
  },
  {
    image: '/cr6.png', 
    name: 'Nike Dri-FIT Sports Bra',
    description: 'Women\'s Sports Bra',
    price: '3,095.00',
  },
  {
    image: '/cr7.png', 
    name: 'Nike Dri-FIT Shorts',
    description: 'Men\'s Sports Shorts',
    price: '3,295.00',
  },
  {
    image: '/cr8.png', 
    name: 'Nike Court Vision Low',
    description: 'Men\'s Shoes',
    price: '6,295.00',
  },
  {
    image: '/cr9.png', 
    name: 'Nike Court Vision Low',
    description: 'Men\'s Shoes',
    price: '6,295.00',
  },
];

const ProductCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {cardData.map((card, index) => (
        <div key={index} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
          
          {card.link ? (
            <Link href={card.link} className="block cursor-pointer">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={150}
                className="object-cover mb-4"
              />
              <h3 className="text-sm font-medium text-gray-800">{card.name}</h3>
              <p className="text-xs text-gray-600 mt-2">{card.description}</p>
              <span className="text-xs text-gray-500 mt-1">{`MRP: ₹ ${card.price}`}</span>
            </Link>
          ) : (
            <>
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={150}
                className="object-cover mb-4"
              />
              <h3 className="text-sm font-medium text-gray-800">{card.name}</h3>
              <p className="text-xs text-gray-600 mt-2">{card.description}</p>
              <span className="text-xs text-gray-500 mt-1">{`MRP: ₹ ${card.price}`}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
