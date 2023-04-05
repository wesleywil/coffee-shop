import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/products/products";
import { add_to_cart } from "../../redux/cart/cart";

import CatalogCategories from "../../components/catalog_categories/catalog_categories.component";
import CatalogItem from "../../components/catalog_item/catalog_item.component";

import mainImg from "../../assets/M01.jpg";

const Catalog = () => {
  const categories_item = useSelector(
    (state: RootState) => state.utils.categories_tab
  );
  const status = useSelector((state: RootState) => state.products.status);
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center pb-4">
        <div className="mt-36 self-center flex xl:flex-row	md:flex-col-reverse justify-center gap-2 p-4 ">
          <div className="mx-auto flex-none mr-16 hidden md:block xl:w-1/2 md:w-1/2 md:mx-auto">
            <img src={mainImg} alt="Cup of coffee" className="rounded-xl" />
          </div>
          <div className="flex-none flex flex-col gap-1 w-11/12 md:w-[40rem] border border-[#F3EFE6] rounded-xl">
            <h3 className="text-2xl text-[#F3EFE6] font-bold text-center mb-2">
              Catalog
            </h3>

            <CatalogCategories />

            <div className="w-full flex flex-wrap justify-center gap-2">
              {products.length ? (
                products.map((item) => (
                  <CatalogItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    handleClick={() => {
                      dispatch(add_to_cart({ product: item, quantity: 1 }));
                    }}
                  />
                ))
              ) : (
                <h1 className="text-2xl md:text-4xl text-[#F3EFE6] font-bold">
                  CHOOSE A CATEGORY
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
