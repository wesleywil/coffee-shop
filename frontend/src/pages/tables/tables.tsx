import CoffeeShopLayout from "../../components/coffee_shop_layout/coffee_shop_layout.component";

const Tables = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8 md:mt-48">
        <h1 className="text-4xl text-[#F3EFE6] font-bold ">
          Coffee Shop Tables
        </h1>
      </div>
      <div className="mt-2">
        <CoffeeShopLayout />
      </div>
    </div>
  );
};

export default Tables;
