import { Order } from "../../../redux/orders/order";

const OrderDetailsItem = ({ item }: any) => {
  return (
    <div
      key={item.product_id}
      className="py-1 px-2 bg-[#70351B] flex gap-2 justify-between rounded"
    >
      <h1>{item.product.title}</h1>
      <div className="flex gap-12">
        <h1>
          Qty{" "}
          <span className="px-2 bg-[#F3EFE6] text-[#70351B]">
            {item.quantity}
          </span>{" "}
        </h1>
        <h1>${item.product.price}</h1>
      </div>
    </div>
  );
};

export default OrderDetailsItem;
