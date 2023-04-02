import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import PaymentOrder from "../../components/payment_order/payment_order.component";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
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
          <PaymentElement />
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
