import OrderItem from "../../components/order_item/order_item.component";

const Order = () => {
  return (
    <div className="flex flex-col items-center p-1 md:p-4">
      <h1 className=" xl:mt-12 md:mt-20 text-4xl text-[#F3EFE6] font-bold text-center mb-2">
        Order
      </h1>
      <div className="w-full xl:w-1/2 md:w-2/3 p-1 md:p-2 border border-[#F3EFE6] rounded-xl">
        <h2 className="text-2xl text-[#D87D4A] text-center font-semibold">
          Products in Order
        </h2>
        <div className="py-2 border-y border-[#D87D4A] ">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
        <div className="text-center text-4xl text-[#F3EFE6] font-bold">
          <h1>Total</h1>
          <h2 className="my-2 text-xl">$00.00</h2>
        </div>
        <div className="border-y border-[#D87D4A] p-2 mb-2">
          <button className="w-full p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] text-2xl font-bold rounded">
            Make Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
