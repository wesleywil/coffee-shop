import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { FaPlus } from "react-icons/fa";
import { search_product } from "../../../redux/products/products";
import { switch_form_product_hidden } from "../../../redux/utils/utils";

const ProductSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div className="md:w-1/2 xl:w-1/3 p-2 mx-auto flex text-xl">
      <button
        onClick={() => dispatch(switch_form_product_hidden())}
        className="mr-2 px-1 bg-[#F3EFE6] hover:bg-[#D87D4A] text-[#70351B] hover:text-[#F3EFE6] rounded-full"
      >
        <FaPlus />
      </button>
      <input
        type="text"
        placeholder="Search Product"
        className="w-2/3  px-2 bg-[#F3EFE6] text-[#70351B] rounded-l-xl"
        onChange={handleSearch}
      />
      <button
        onClick={() => dispatch(search_product(search))}
        className="md:w-1/3  px-1 md:px-0 flex justify-center bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 flex items-center gap-2 rounded-r-xl"
      >
        Search
      </button>
    </div>
  );
};

export default ProductSearch;
