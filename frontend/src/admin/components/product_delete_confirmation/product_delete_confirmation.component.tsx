import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import {
  deleteProduct,
  clean_selected_product,
} from "../../../redux/products/products";
import { switch_product_delete_hidden } from "../../../redux/utils/utils";

const ProductDeleteConfirmation = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
    dispatch(clean_selected_product());
    dispatch(switch_product_delete_hidden());
  };
  const handleClose = () => {
    dispatch(clean_selected_product());
    dispatch(switch_product_delete_hidden());
  };
  return (
    <div className="w-fit p-2 mb-2 mx-auto flex flex-col items-center text-xl border rounded-xl">
      <h1>Are you sure you want to delete this product?</h1>
      <div className="flex justify-center gap-2 font-bold">
        <button
          onClick={() => handleDelete()}
          className="text-red-400 hover:text-red-600"
        >
          Yes
        </button>
        /{" "}
        <button
          onClick={() => handleClose()}
          className="text-blue-400 hover:text-blue-600"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ProductDeleteConfirmation;
