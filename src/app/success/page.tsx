"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const searchPaRAMS = useSearchParams();
  const payment_intent = searchPaRAMS.get("payment_intent");

  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/confirm/${payment_intent}`,
          {
            method: "PUT",
          }
        );
        router.push("/orders");
      } catch (error) {}
    };
    makeRequest();
  }, [payment_intent, router]);

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do
      not close the page.
    </div>
  );
};
export default SuccessPage;
