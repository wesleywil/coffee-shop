import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { FaTimes } from "react-icons/fa";
import { switch_form_product_hidden } from "../../../redux/utils/utils";

const FormProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="h-3/4 md:h-1/2 mt-40 md:mt-0 m-2 fixed  inset-0 md:inset-60 z-50 bg-black/40 backdrop-blur-lg text-white overflow-hidden rounded-xl border border-[#F3EFE6]">
      <div className="bg-[#D87D4A] h-8 px-2 flex justify-between">
        <h1 className="self-center font-bold">Form</h1>
        <button
          onClick={() => dispatch(switch_form_product_hidden())}
          className="self-center flex p-1 bg-[#F3EFE6] hover:bg-[#70351B] text-[#D87D4A] rounded-full"
        >
          <FaTimes />
        </button>
      </div>
      <h1 className="mt-2 mb-2 text-2xl text-center font-bold">New Product</h1>
      <form className="p-2 flex flex-col text-xl text-center">
        <span>Title</span>
        <input type="text" className="text-[#F3EFE6] bg-[#70351B] rounded" />
        <span>Description</span>
        <textarea className="text-[#F3EFE6] bg-[#70351B] rounded"></textarea>
        <span>Price</span>
        <input type="number" className="text-[#F3EFE6] bg-[#70351B] rounded" />
        <span>Image</span>
        <input type="text" className="text-[#F3EFE6] bg-[#70351B] rounded" />
        <span>Category</span>
        <select className="text-[#F3EFE6] bg-[#70351B] rounded">
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="treatsAndSweets">Treats And Sweets</option>
        </select>
        <div className="mt-2 flex justify-center gap-2">
          <button className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2">
            Submit
          </button>
          <button
            onClick={() => dispatch(switch_form_product_hidden())}
            type="button"
            className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProduct;
