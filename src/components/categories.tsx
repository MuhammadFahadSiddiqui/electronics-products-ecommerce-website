import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col justify-center bg-mywhite my-10">
      <div className="flex justify-center mb-7">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl text-myblack">Categories</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 sm:w-auto sm:h-[1200px] md:w-[1000px] md:h-[400px] lg:w-[1200px] lg:h-[500px] gap-3">
          <div className="flex justify-center items-end hero-mac md:row-span-2 rounded-xl hover:shadow-lg hover:shadow-cyan-200 hover:scale-[102%]">
            <h1 className="bg-mygrey bg-opacity-55 shadow-md shadow-mycyan text-mywhite hover:scale-[102%] p-3 rounded-xl text-4xl font-bold m-7">
              Mac Book
            </h1>
          </div>
          <div className="flex justify-center items-end hero-dell rounded-xl hover:shadow-lg hover:shadow-cyan-200 hover:scale-[102%]">
            <h1 className="bg-mygrey bg-opacity-55 shadow-md shadow-mycyan text-mywhite hover:scale-[102%] p-3 rounded-xl text-4xl font-bold m-7">
              Laptops
            </h1>
          </div>
          <div className="flex justify-center items-end hero-graphic-card rounded-xl hover:shadow-lg hover:shadow-cyan-200 hover:scale-[102%]">
            <h1 className="bg-mygrey bg-opacity-55 shadow-md shadow-mycyan text-mywhite hover:scale-[102%] p-3 rounded-xl text-4xl font-bold m-7">
              Grapics Card
            </h1>
          </div>
          <div className="flex justify-center items-end hero-gaming-laptop rounded-xl hover:shadow-lg hover:shadow-cyan-200 hover:scale-[102%]">
            <h1 className="bg-mygrey bg-opacity-55 shadow-md shadow-mycyan text-mywhite hover:scale-[102%] p-3 rounded-xl text-4xl font-bold m-7">
              Gaming Laptops
            </h1>
          </div>
          <div className="flex justify-center items-end hero-accessories rounded-xl hover:shadow-lg hover:shadow-cyan-200 hover:scale-[102%]">
            <h1 className="bg-mygrey bg-opacity-55 shadow-md shadow-mycyan text-mywhite hover:scale-[102%] p-3 rounded-xl text-4xl font-bold m-7">
              Accessories
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
