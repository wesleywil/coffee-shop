import OrderCard from "../../components/order_card/order_card.component";

const MyOrders = () => {
  return (
    <div className="mt-24 text-center">
      <h1>My Orders</h1>
      <div className="mt-2 p-4 flex flex-wrap justify-center gap-2">
        {/* My Order Components */}
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default MyOrders;
