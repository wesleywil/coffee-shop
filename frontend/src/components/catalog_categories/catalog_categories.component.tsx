import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { filter_by_category } from "../../redux/products/products";

const CatalogCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedOption, setSelectedOption] = useState("coffee");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    dispatch(filter_by_category(selectedValue));
  };
  return (
    <div className="self-center border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          {/* <!-- Tabs --> */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <button
                onClick={() => dispatch(filter_by_category("coffee"))}
                className="text-gray-500 hover:text-gray-700 font-medium text-lg  px-4 rounded-lg"
              >
                Coffee
              </button>
              <span className="text-gray-500 font-medium text-lg ">/</span>
              <button
                onClick={() => dispatch(filter_by_category("tea"))}
                className="text-gray-500 hover:text-gray-700 font-medium text-lg  px-4 rounded-lg"
              >
                Tea
              </button>
              <span className="text-gray-500 font-medium text-lg ">/</span>
              <button
                onClick={() => dispatch(filter_by_category("treatsAndSweets"))}
                className="text-gray-500 hover:text-gray-700 font-medium text-lg  px-4 rounded-lg"
              >
                Treats and Sweets
              </button>
            </div>
          </div>

          {/* <!-- Dropdown (mobile) --> */}
          <div className="md:hidden">
            <select
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              defaultValue={selectedOption}
              onChange={handleChange}
            >
              <option value="coffee">Coffee</option>
              <option value="tea">Tea</option>
              <option value="treatsAndSweets">Treats and Sweets</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategories;
