import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { FaTimes } from "react-icons/fa";
import { switch_form_product_hidden } from "../../../redux/utils/utils";
import {
  clean_selected_product,
  updateProduct,
  createProduct,
} from "../../../redux/products/products";

interface CustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
  price: HTMLInputElement;
  image: HTMLInputElement;
  category: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const FormProduct = () => {
  const product = useSelector((state: RootState) => state.products.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Form Product");
  }, [product]);

  const handleCloseWindow = () => {
    dispatch(clean_selected_product());
    dispatch(switch_form_product_hidden());
  };
  const handleSubmit = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    const data = {
      title: target.title.value,
      description: target.description.value,
      price: target.price.value,
      image: target.image.value,
      category: target.category.value,
    };
    if (Object.keys(product).length === 0) {
      console.log("NEW PRODUCT");
      dispatch(createProduct(data));
      handleCloseWindow();
    } else {
      console.log("PRODUCT=> ", product);
      dispatch(updateProduct({ id: product.id, ...data }));
      handleCloseWindow();
    }
  };
  return (
    <div className="md:h-3/4 md:h-1/2 mt-40 md:mt-0 m-2 fixed  inset-0 md:inset-60 z-50 bg-black/40 backdrop-blur-lg text-white overflow-hidden rounded-xl border border-[#F3EFE6]">
      <div className="bg-[#D87D4A] h-8 px-2 flex justify-between">
        <h1 className="self-center font-bold">Form</h1>
        <button
          onClick={() => handleCloseWindow()}
          className="self-center flex p-1 bg-[#F3EFE6] hover:bg-[#70351B] text-[#D87D4A] rounded-full"
        >
          <FaTimes />
        </button>
      </div>
      <h1 className="mt-2 mb-2 text-2xl text-center font-bold">New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="p-2 flex flex-col text-xl text-center"
      >
        <span>Title</span>
        <input
          type="text"
          name="title"
          defaultValue={product ? product.title : ""}
          className="text-[#F3EFE6] bg-[#70351B] rounded"
        />
        <span>Description</span>
        <textarea
          name="description"
          defaultValue={product ? product.description : ""}
          className="text-[#F3EFE6] bg-[#70351B] rounded"
        ></textarea>
        <span>Price</span>
        <input
          type="number"
          name="price"
          defaultValue={product ? product.price : ""}
          className="text-[#F3EFE6] bg-[#70351B] rounded"
        />
        <span>Image</span>
        <input
          type="text"
          name="image"
          defaultValue={product ? product.image : ""}
          className="text-[#F3EFE6] bg-[#70351B] rounded"
        />
        <span>Category</span>
        <select
          name="category"
          defaultValue={product ? product.category : ""}
          className="text-[#F3EFE6] bg-[#70351B] rounded"
        >
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="treatsAndSweets">Treats And Sweets</option>
        </select>
        <div className="mt-2 flex justify-center gap-2">
          <button className="px-4 py-2 bg-[#D87D4A] hover:bg-[#70351B] text-gray-50 rounded-xl flex items-center gap-2">
            Submit
          </button>
          <button
            onClick={() => handleCloseWindow()}
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
