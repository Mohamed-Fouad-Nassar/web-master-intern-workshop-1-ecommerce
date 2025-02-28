import { useNavigate } from "react-router";
import { CheckCircle } from "lucide-react";

import Button from "../components/Button";

export default function Thanks() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="text-2xl font-semibold mt-4 text-gray-900">
          Thank You for Your Purchase!
        </h1>
        <p className="text-gray-600 my-4">
          Your order has been successfully placed. We will send you a
          confirmation email shortly.
        </p>
        <Button onClick={() => navigate("/", { replace: true })}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
