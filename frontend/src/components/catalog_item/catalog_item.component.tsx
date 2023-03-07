import { useState } from "react";

type CatalogItemType = {
  title: string;
  price: number;
  description: string;
};

const CatalogItem = ({ title, price, description }: CatalogItemType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative  w-56 p-2 rounded"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 bg-black/20 backdrop-blur-sm flex flex-row gap-2 z-20">
        <h1>{title}</h1> - <h1>$ {price}</h1>
      </div>
      <div
        className="bg-red-600 absolute top-full left-0  w-full px-2 rounded z-10"
        style={{
          maxHeight: isHovered ? "250px" : "0",
          transition: "max-height 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <p>{description}</p>
        <button className="w-1/3 bg-black text-white mb-2 px-2 py-1">
          Order
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
