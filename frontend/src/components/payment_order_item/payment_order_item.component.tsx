const PaymentOrderItem = ({ item }: any) => {
  return (
    <div className="w-full flex justify-between gap-2 px-2 py-1 font-semibold text-2xl text-[#F3EFE6] border border-[#D87D4A] rounded">
      <h1 className="grow text-left">{item.product.title}</h1>
      <h1 className="grow text-center">
        Qty{" "}
        <span className="px-2 bg-[#F3EFE6] text-[#70351B]">
          {item.quantity}
        </span>
      </h1>
      <h1 className="grow text-right">${item.product.price}</h1>
    </div>
  );
};

export default PaymentOrderItem;
