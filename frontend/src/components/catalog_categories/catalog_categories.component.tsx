const CatalogCategories = () => {
  return (
    <div className="self-center border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          {/* <!-- Tabs --> */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 font-medium text-lg  px-4 rounded-lg"
              >
                Coffee
              </a>
              <span className="text-gray-500 font-medium text-lg ">/</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 font-medium text-lg  px-4 rounded-lg"
              >
                Tea
              </a>
              <span className="text-gray-500 font-medium text-lg ">/</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 font-medium text-lg  px-4 rounded-lg"
              >
                Treats and Sweets
              </a>
            </div>
          </div>

          {/* <!-- Dropdown (mobile) --> */}
          <div className="md:hidden">
            <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Coffee</option>
              <option>Tea</option>
              <option>Treats and Sweets</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategories;
