import { useState } from "react";

type CatalogItemType = {
  title: string;
  price: number;
  description: string;
  handleClick: any;
};

const CatalogItem = ({
  title,
  price,
  description,
  handleClick,
}: CatalogItemType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 p-2 rounded "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 bg-[#D87D4A] text-xl text-[#F3EFE6] font-bold backdrop-blur-sm flex flex-row gap-2 z-20 rounded-xl overflow-x-auto">
        <h1>{title}</h1> - <h1>$ {price}</h1>
      </div>
      <div
        className="bg-[#F3EFE6] text-[#70351B] text-center absolute top-full left-0  w-full px-2 rounded z-10"
        style={{
          maxHeight: isHovered ? "280px" : "0",
          transition: "max-height 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="p-2">{description}</p>
        <button
          onClick={handleClick}
          className="w-full bg-[#D87D4A] hover:bg-[#70351B] text-[#F3EFE6] font-bold mb-2 px-2 py-1 rounded-xl"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
