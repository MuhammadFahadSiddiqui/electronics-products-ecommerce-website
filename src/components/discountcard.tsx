import React from "react";

interface ProductCardProps {
  image: string; // Image URL or path
  name: string;
  price: number; // Original price
  discountPercentage: number; // Discount percentage
  description: string;
}

const DiscountProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  discountPercentage,
  description,
}) => {
  // Calculate discounted price
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-gray-500 line-through">
              ${price.toFixed(2)}
            </span>
            <span className="text-xl font-bold text-green-600 ml-2">
              ${discountedPrice}
            </span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
        <p className="text-sm text-red-500 mt-2">
          Save {discountPercentage}%!
        </p>
      </div>
    </div>
  );
};

export default DiscountProductCard;
