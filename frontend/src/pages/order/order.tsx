import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { createOrder } from "../../redux/orders/order";
import OrderItem from "../../components/order_item/order_item.component";

const Order = () => {
  const order_items = useSelector(
    (state: RootState) => state.cart.cart_products
  );
  const total = useSelector((state: RootState) => state.cart.total);
  const reserve_id = useSelector(
    (state: RootState) => state.reservations.today_reservation.id
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("ORDER ITEMS => ", order_items);
  }, [order_items]);

  const handleOrder = () => {
    let order = {
      reserve_id: reserve_id,
      cart_items: [] as { product_id: number; quantity: number }[],
    };

    order_items.forEach((item) => {
      order.cart_items.push({
        product_id: item.product.id,
        quantity: item.quantity,
      });
    });
    if (order.cart_items.length === 0) {
      console.log("THIS EMPTY");
    } else {
      //dispatch(createOrder(order));
      console.log("ORDER => ", order);
    }
  };

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
          {order_items.length ? (
            order_items.map((item) => (
              <OrderItem
                key={item.product.id}
                img={item.product.image}
                product_name={item.product.title}
                product_id={item.product.id}
                quantity={item.quantity}
                price={item.product.price}
              />
            ))
          ) : (
            <h1 className="text-[#F3EFE6] font-bold text-xl text-center">
              NO ITEMS BEING ORDERED
            </h1>
          )}
          {/* <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem /> */}
        </div>
        <div className="text-center text-4xl text-[#F3EFE6] font-bold">
          <h1>Total</h1>
          <h2 className="my-2 text-xl">${total}</h2>
        </div>
        <div className="border-y border-[#D87D4A] p-2 mb-2">
          <button
            onClick={handleOrder}
            className="w-full p-1 bg-[#D87D4A] hover:bg-[#F3EFE6] text-[#F3EFE6] hover:text-[#70351B] text-2xl font-bold rounded"
          >
            Make Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
