import { Triangle } from "lucide-react";
import { useNavigate } from "react-router";

import RegisterForm from "../features/auth/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="px-4 py-8 mb-4 md:p-8 rounded-xl max-w-lg border-1 border-gray-600">
          <h2 className="font-ibm-con text-2xl font-medium mb-4">
            Create Account
          </h2>

          <RegisterForm />

          <div className="border-t border-b border-gray-300 py-5 my-4">
            <p className="font-ibm-con font-bold">Buying for work?</p>
            <a href="#" className="text-fourth font-inika">
              Create a free business account
            </a>
          </div>

          <div className="font-ibm-con mb-4 flex gap-2">
            <p> Already have an account?</p>
            <a
              onClick={() => navigate("/signin")}
              href="#"
              className="text-fourth font-inika underline flex items-center gap-1"
            >
              Sign in
              <Triangle className="size-3 rotate-90" fill="#2a8fd7 " />
            </a>
          </div>

          <p className="text-sm font-ibm-con mb-4">
            By creating an account or logging in , you agree to Amazon’s
            <a href="#" className="mx-1 text-fourth font-inika underline">
              Conditions of Use
            </a>
            and
            <a href="#" className="mx-1 text-fourth font-inika underline">
              Privacy Notice.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
