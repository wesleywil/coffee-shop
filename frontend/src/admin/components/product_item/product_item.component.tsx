import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductItem = () => {
  return (
    <div className="bg-[#70351B] flex flex-col rounded-xl overflow-hidden">
      <h1 className="w-full mb-1 text-center bg-[#D87D4A] ">Coffee</h1>
      <div className="text-xl flex flex-col md:flex-row justify-between px-2">
        <div className="flex gap-2">
          <img
            src="https://dummyimage.com/300x300"
            alt="product"
            className="self-center w-24 h-24 m-2 rounded-full "
          />
          <div className="self-center text-center flex flex-col">
            <h1>Products name</h1>
            <p className="text-base">
              description goes here description goes here description goes here
              description goes here description goes here description goes here
            </p>
          </div>
        </div>
        <h1 className="self-center w-full md:w-1/4 text-center my-2 md:my-0 font-bold border-t md:border-0">
          $00.00
        </h1>
        <div className="ml-2 mb-2 md:mb-0 text-2xl md:text-xl self-center flex gap-2 justify-center">
          <button className="px-2 py-1 bg-blue-500 hover:bg-blue-700 rounded">
            <FaEdit />
          </button>
          <button className="px-2 py-1 bg-red-500 hover:bg-red-700 rounded">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
