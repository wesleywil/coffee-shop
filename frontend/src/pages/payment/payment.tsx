import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import api from "../../services/api_config";

import PaymentOrder from "../../components/payment_order/payment_order.component";

const Payment = () => {
  const order_id = useSelector(
    (state: RootState) => state.orders.selected_order.id
  );
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement =
      (elements.getElement("card") as StripeCardElement) || null;

    if (!cardElement) {
      return;
    }

    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      console.log("Error=> ", error);
    } else {
      console.log("Token=> ", token);
      if (order_id) {
        const data = {
          token: token,
          order_id: order_id,
          description: "this is a payment test",
        };
        // const res = await api.post("/payment", data);
        // console.log("Payment test => ", res);
        console.log("DATA =>  ", data);
      }
      console.log("NO ORDER ID");
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#F3EFE6",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "1.5rem",
        "::placeholder": {
          color: "#D87D4A",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "yellow",
        iconColor: "yellow",
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl md:text-5xl text-center text-[#F3EFE6] mb-4">
        Order Payment
      </h1>
      <div className="p-2 w-full xl:w-1/2 flex flex-col gap-4">
        <PaymentOrder />
        <form
          onSubmit={handleSubmit}
          className="xl:w-full md:w-1/2 mx-auto p-4 border rounded-xl"
        >
          <CardElement id="card-element" options={cardStyle} />
          <button
            disabled={!stripe}
            className="w-1/3 mx-auto mt-2 flex justify-center text-2xl py-2 bg-[#D87D4A] hover:bg-[#70351B] font-bold text-gray-50 rounded-xl flex items-center gap-2"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
