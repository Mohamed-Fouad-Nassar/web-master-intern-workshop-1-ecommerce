import logo from "../data/logo.png";
import arrow from "../data/arrow1.png";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import ConditionsFooter from "../components/ConditionsFooter";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 px-3">
      <div className="flex justify-center">
        <img src={logo} alt="amazon logo" className="mt-6 mb-8" />
      </div>
      <div className="flex items-center justify-center ">
        <form className="px-3 py-8 mb-4  md:p-8 rounded-xl md:w-[60%] lg:w-[35%] border-1 border-[#656565] ">
          <h2 className="font-ibm-con text-3xl font-medium mb-3">Sign in</h2>

          <Input
            label="Email or mobile phone number"
            id="emailPhone"
            type="text"
          />
          <button className="bg-primary mb-3 w-full font-ibm-con py-2 font-medium rounded-lg cursor-pointer hover:bg-[#ffe800] ">
            Continue
          </button>
          <p className="font-ibm-con text-[17px] mb-4">
            By continuing, you agree to Amazon’s{" "}
            <a href="#" className="text-fourth font-inika underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-fourth font-inika underline">
              Privacy Notice.
            </a>
          </p>
          <div className="flex items-center gap-1 border-b border-[#D9D9D9] pb-5 mb-4">
            <img src={arrow} alt="arrow icon" className="w-[10px]" />
            <a href="#" className="text-fourth font-inika">
              Need help?
            </a>
          </div>

          <p className="font-ibm-con font-bold text-xl">Buying for work?</p>
          <a href="#" className="text-fourth font-inika">
            Shop on Amazon Business
          </a>
        </form>
      </div>

      <div className="lg:w-[35%] md:w-[60%]  mx-auto">
        <p className="text-[#717171] mb-3 font-ibm-con relative text-center before:absolute before:content-[''] before:w-[160px] before:h-[1px] before:bg-[#D9D9D9] before:top-1/2 before:left-0 after:absolute after:content-[''] after:w-[160px] after:h-[1px] after:bg-[#D9D9D9] after:top-1/2 after:right-0">
          New to Amazon?
        </p>
        <button
          className="bg-white mb-3 w-full font-ibm-con py-1 font-medium rounded-lg cursor-pointer shadow-sm border-1 border-[#656565] hover:border-black hover:bg-slate-200 "
          onClick={() => navigate("/register")}
        >
          Create your Amazon account
        </button>
      </div>

      <ConditionsFooter />
    </section>
  );
};

export default SignIn;
