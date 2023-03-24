import { useState } from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

type OrderItemType = {
  img: string;
  product_id: number;
  product_name: string;
  quantity: number;
  price: number;
};

const OrderItem = ({ ...item }: OrderItemType) => {
  return (
    <div className="w-full flex justify-between items-center px-2 mb-2 text-[#F3EFE6]">
      {/* Image */}
      <img
        src={item.img}
        alt=""
        className="self-center w-16 xl:w-24 rounded-xl"
      />
      {/* Product Info */}
      <div className="flex flex-col items-center text-xl">
        <h2 className="self-center">
          {item.product_name.length > 13
            ? item.product_name.substring(0, 13) + "..."
            : item.product_name}
        </h2>
        <div className="self-center w-20 text-base flex justify-between">
          <button className="p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded">
            <FaMinus />
          </button>
          <h2>{item.quantity}</h2>
          <button className="p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded">
            <FaPlus />
          </button>
        </div>
      </div>
      {/* Price */}
      <h1 className="w-18 h-12 pl-2 flex items-center justify-start self-center text-xl">
        $ {item.price.toFixed(2)}
      </h1>
      {/* Remove Product */}
      <button className="h-12 w-12 flex justify-center items-center p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] text-2xl font-bold rounded">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default OrderItem;
