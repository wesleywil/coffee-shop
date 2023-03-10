import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

import CatalogCategories from "../../components/catalog_categories/catalog_categories.component";
import CatalogItem from "../../components/catalog_item/catalog_item.component";

const Catalog = () => {
  const categories_item = useSelector(
    (state: RootState) => state.utils.categories_tab
  );
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-4">
        <div className="mt-36 self-center flex justify-center gap-2 p-4">
          <div className="flex-none mr-16 hidden md:block border">
            <img src="https://dummyimage.com/600x600" alt="Cup of coffee" />
          </div>
          <div className="flex-none flex flex-col gap-1 w-11/12 md:w-[40rem] border">
            <h3 className="text-2xl font-bold text-center mb-2">Catalog</h3>

            <CatalogCategories />

            <div className="w-full flex flex-wrap justify-center gap-2">
              {categories_item === "coffee" ? (
                <>
                  <CatalogItem
                    title="Coffee Name 1"
                    price={12.0}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi blanditiis labore totam cupiditate quisquam quae nemo dolores quas sed iste ut, tempora in, nulla explicabo? Quo esse autem debitis!"
                  />
                  <CatalogItem
                    title="Coffee Name 2"
                    price={14.0}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi blanditiis labore totam cupiditate quisquam quae nemo dolores quas sed iste ut, tempora in, nulla explicabo? Quo esse autem debitis!"
                  />
                  <CatalogItem
                    title="Coffee Name 3"
                    price={16.99}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi blanditiis labore totam cupiditate quisquam quae nemo dolores quas sed iste ut, tempora in, nulla explicabo? Quo esse autem debitis!"
                  />
                  <CatalogItem
                    title="Coffee Name 4"
                    price={8.5}
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi blanditiis labore totam cupiditate quisquam quae nemo dolores quas sed iste ut, tempora in, nulla explicabo? Quo esse autem debitis!"
                  />
                </>
              ) : categories_item === "tea" ? (
                <CatalogItem
                  title="Tea Name 1"
                  price={5.5}
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi blanditiis labore totam cupiditate quisquam quae nemo dolores quas sed iste ut, tempora in, nulla explicabo? Quo esse autem debitis!"
                />
              ) : (
                <CatalogItem
                  title="Sweats and Treats Name 1"
                  price={2.5}
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nisi blanditiis labore totam cupiditate quisquam quae nemo dolores quas sed iste ut, tempora in, nulla explicabo? Quo esse autem debitis!"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
