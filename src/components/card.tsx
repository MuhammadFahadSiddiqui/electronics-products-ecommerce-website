import React from "react";

interface ProductCardProps {
  image: string; // Image URL or path
  name: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">${price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
