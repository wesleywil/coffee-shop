import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import {
  get_all_products,
  filter_by_category,
} from "../../../redux/products/products";

const FilterProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="mb-4 md:text-xl flex justify-center gap-2">
      <button
        onClick={() => dispatch(get_all_products())}
        className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded"
      >
        All
      </button>
      <button
        onClick={() => dispatch(filter_by_category("coffee"))}
        className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded"
      >
        Coffee
      </button>
      <button
        onClick={() => dispatch(filter_by_category("tea"))}
        className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded"
      >
        Tea
      </button>
      <button
        onClick={() => dispatch(filter_by_category("treatsAndSweets"))}
        className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded"
      >
        Treats And Sweets
      </button>
    </div>
  );
};

export default FilterProducts;
