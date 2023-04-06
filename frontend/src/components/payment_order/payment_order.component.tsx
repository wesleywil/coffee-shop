import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

import PaymentOrderItem from "../payment_order_item/payment_order_item.component";

const PaymentOrder = () => {
  const order = useSelector((state: RootState) => state.orders.selected_order);
  return (
    <div>
      <div className="h-full md:w-1/2 xl:w-full mx-auto flex flex-col p-2 border rounded-xl">
        <div className="max-h-96 flex flex-col gap-2 overflow-y-auto">
          {order.cart_items.length
            ? order.cart_items.map((item) => (
                <PaymentOrderItem
                  item={{
                    quantity: item.quantity,
                    product: {
                      title: item.product.title,
                      price: item.product.price,
                    },
                  }}
                />
              ))
            : "NO ITEMS TO PAY"}
        </div>

        <div className="mt-2 flex flex-col items-center font-bold text-[#F3EFE6] text-3xl border-t">
          <h1>TOTAL</h1>
          <h2>$ {order.total}</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentOrder;
