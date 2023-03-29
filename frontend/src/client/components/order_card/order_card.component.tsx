const OrderCard = () => {
  return (
    <div className="p-2 flex flex-col text-xl text-[#F3EFE6] border-2 border-[#D87D4A] rounded-xl ">
      <h1 className="text-center text-base font-bold px-2 border-b">
        In Delivery
      </h1>

      <h1 className="mt-2 h-20 w-20 mx-auto flex justify-center items-center border-2 border-[#D87D4A] rounded-full">
        5 Items
      </h1>

      <h1 className="mt-2 text-sm">Total</h1>
      <h1 className="text-2xl font-bold">$00.00</h1>
      <button className="mt-2 p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] font-bold rounded">
        Details
      </button>
    </div>
  );
};

export default OrderCard;
