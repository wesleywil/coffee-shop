import PaymentOrderItem from "../payment_order_item/payment_order_item.component";

const PaymentOrder = () => {
  return (
    <div>
      <div className="h-full md:w-1/2 xl:w-full mx-auto flex flex-col p-2 border rounded-xl">
        <div className="max-h-96 flex flex-col gap-2 overflow-y-auto">
          <PaymentOrderItem
            item={{
              quantity: 2,
              product: { title: "product name 1", price: 2.5 },
            }}
          />
          <PaymentOrderItem
            item={{
              quantity: 2,
              product: { title: "product name 1", price: 2.5 },
            }}
          />
          <PaymentOrderItem
            item={{
              quantity: 2,
              product: { title: "product name 1", price: 2.5 },
            }}
          />
          <PaymentOrderItem
            item={{
              quantity: 2,
              product: { title: "product name 1", price: 2.5 },
            }}
          />
        </div>

        <div className="mt-2 flex flex-col items-center font-bold text-[#F3EFE6] text-3xl border-t">
          <h1>TOTAL</h1>
          <h2>$ 12.50</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentOrder;
