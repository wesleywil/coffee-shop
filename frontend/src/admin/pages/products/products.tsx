import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchProducts } from "../../../redux/products/products";

import FilterProducts from "../../components/filter_products/filter_products.component";
import ProductItem from "../../components/product_item/product_item.component";
import ProductSearch from "../../components/product_search/product_search.component";
import FormProduct from "../../components/form_product/form_product.component";
import ProductDeleteConfirmation from "../../components/product_delete_confirmation/product_delete_confirmation.component";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);
  const hidden = useSelector(
    (state: RootState) => state.utils.admin_form_product_hidden
  );
  const deleteHidden = useSelector(
    (state: RootState) => state.utils.product_delete_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("admin products");
    if (
      status === "idle" ||
      status === "product created successfully" ||
      status === "product updated successfully" ||
      status === "product was deleted successfully"
    ) {
      dispatch(fetchProducts());
    }
  }, [status, products]);
  return (
    <div className="w-full flex flex-col items-center text-[#F3EFE6]">
      {hidden ? "" : <FormProduct />}

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
          {/* Delete Product Confirmation */}
          {deleteHidden ? "" : <ProductDeleteConfirmation />}

          {/* Filtered List of Products */}
          <div className="xl:w-1/2 xl:mx-auto flex flex-col gap-2">
            {products.length
              ? products.map((item) => (
                  <ProductItem key={item.id} item={item} />
                ))
              : "NO PRODUCTS"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
