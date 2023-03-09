import CatalogCategories from "../../components/catalog_categories/catalog_categories.component";
import CatalogItem from "../../components/catalog_item/catalog_item.component";

const Catalog = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-36 self-center flex justify-center gap-2 p-4">
          <div className="mr-16 hidden md:block">
            <img src="https://dummyimage.com/600x600" alt="Cup of coffee" />
          </div>
          <div className="flex flex-col gap-1 w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-center mb-2">Catalog</h3>

            <CatalogCategories />

            <div className="flex flex-wrap justify-center gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
