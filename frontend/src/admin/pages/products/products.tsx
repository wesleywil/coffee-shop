import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";
import FilterProducts from "../../components/filter_products/filter_products.component";
import ProductItem from "../../components/product_item/product_item.component";
import ProductSearch from "../../components/product_search/product_search.component";

const Products = () => {
  // Product Category List
  // Add Product
  // Edit Product
  // Delete Product
  return (
    <div className="w-full flex flex-col items-center text-[#F3EFE6]">
      <h1 className="mt-12 text-3xl font-bold mb-2">Product Management</h1>
      <div className="w-full p-2">
        {/* Product Search */}
        <ProductSearch />

        <div>
          <h1 className="text-center font-bold text-2xl my-4">
            Filter Products
          </h1>
          {/* Products by Category */}
          <FilterProducts />
          {/* Filtered List of Products */}
          <div className="xl:w-1/2 xl:mx-auto flex flex-col gap-2">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
