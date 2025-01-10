import React from "react";
import ProductCard from "../../components/card";
import DiscountProductCard from "@/components/discountcard";

const App = () => {
  return (
    <div className="p-6 flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        <ProductCard
          image="/images/hero/Dell-XPS-5.jpg"
          name="Laptop"
          price={999}
          description="A high-quality laptop with excellent performance."
        />
        <ProductCard
          image="/images/hero/Dell-XPS-5.jpg"
          name="Laptop"
          price={999}
          description="A high-quality laptop with excellent performance."
        />
         <DiscountProductCard
        image="/images/hero/Dell-XPS-5.jpg"
        name="Dell XPS 15"
        price={1500}
        discountPercentage={20}
        description="A high-quality laptop with excellent performance and stunning design."
      />
        <ProductCard
          image="/images/hero/Dell-XPS-5.jpg"
          name="Laptop"
          price={999}
          description="A high-quality laptop with excellent performance."
        />
        <ProductCard
          image="/images/hero/Dell-XPS-5.jpg"
          name="Laptop"
          price={999}
          description="A high-quality laptop with excellent performance."
        />
         <DiscountProductCard
        image="/images/hero/Dell-XPS-5.jpg"
        name="Dell XPS 15"
        price={1500}
        discountPercentage={20}
        description="A high-quality laptop with excellent performance and stunning design."
      />
         <DiscountProductCard
        image="/images/hero/Dell-XPS-5.jpg"
        name="Dell XPS 15"
        price={1500}
        discountPercentage={20}
        description="A high-quality laptop with excellent performance and stunning design."
      />
         <DiscountProductCard
        image="/images/hero/Dell-XPS-5.jpg"
        name="Dell XPS 15"
        price={1500}
        discountPercentage={20}
        description="A high-quality laptop with excellent performance and stunning design."
      />
         <DiscountProductCard
        image="/images/hero/Dell-XPS-5.jpg"
        name="Dell XPS 15"
        price={1500}
        discountPercentage={20}
        description="A high-quality laptop with excellent performance and stunning design."
      />
         <DiscountProductCard
        image="/images/hero/Dell-XPS-5.jpg"
        name="Dell XPS 15"
        price={1500}
        discountPercentage={20}
        description="A high-quality laptop with excellent performance and stunning design."
      />
      </div>
    </div>
  );
};

export default App;
