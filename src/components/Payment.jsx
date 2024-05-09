import { useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";

function Payment() {
  const initialOptions = {
    "client-id":
      "ASuV0-mMC0k6gk8xNuoo5Z0mMbdajSDiRQMDnAYP2RMJYAvB_tdgu9bC2vnlq2ZUoRQehFwAD6YvN1qy",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className=" h-[60vh] flex justify-center items-center bg-[#0D47A1]">
      <div className="bg-white p-[10em] rounded-xl shadow-xl">
        <PayPalScriptProvider options={initialOptions}>
          <Checkout />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default Payment;
