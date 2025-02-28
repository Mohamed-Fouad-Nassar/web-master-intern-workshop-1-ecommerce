import { Triangle } from "lucide-react";
import { useNavigate } from "react-router";

import Button from "../components/Button";
import SigninForm from "../features/auth/SigninForm";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="px-4 py-8 mb-4 md:p-8 rounded-xl max-w-lg border-1 border-gray-600">
          <h2 className="font-ibm-con text-2xl font-medium mb-4">Sign in</h2>

          <SigninForm />

          <p className="text-base font-ibm-con mb-4">
            By continuing, you agree to Amazon’s
            <a href="#" className="mx-1 text-fourth font-inika underline">
              Conditions of Use
            </a>
            and
            <a href="#" className="mx-1 text-fourth font-inika underline">
              Privacy Notice.
            </a>
          </p>

          <div className="text-sm flex items-center gap-1 border-b border-gray-300 pb-5 mb-4">
            <Triangle className="size-3 rotate-90" fill="black" />
            <a href="#" className="text-fourth font-inika hover:underline">
              Need help?
            </a>
          </div>

          <p className="font-ibm-con font-bold">Buying for work?</p>
          <a href="#" className="text-fourth font-inika hover:underline">
            Shop on Amazon Business
          </a>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        <p className="text-gray-600 mb-3 font-ibm-con relative text-center before:absolute before:content-[''] before:w-[100px] sm:before:w-[150px] before:h-[1px] before:bg-gray-300 before:top-1/2 before:left-0 after:absolute after:content-[''] after:w-[100px] sm:after:w-[150px] after:h-[1px] after:bg-gray-300 after:top-1/2 after:right-0">
          New to Amazon?
        </p>
        <Button
          size="sm"
          variation="third"
          className="w-full py-2"
          onClick={() => navigate("/register")}
        >
          Create your Amazon account
        </Button>
      </div>
    </>
  );
};

export default SignIn;
