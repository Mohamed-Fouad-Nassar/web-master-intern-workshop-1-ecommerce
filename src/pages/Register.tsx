import logo from "../data/logo.png";
import arrow from "../data/arrow.png";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import ConditionsFooter from "../components/ConditionsFooter";

const Register = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 px-3">
      <div className="flex justify-center">
        <img src={logo} alt="amazon logo" className="mt-6 mb-8" />
      </div>

      <div className="flex items-center justify-center ">
        <form className="px-3 py-8 mb-4  md:p-8 rounded-xl md:w-[60%] lg:w-[35%] border-1 border-[#656565] ">
          <h2 className="font-ibm-con text-3xl font-medium mb-3">
            Create Account
          </h2>

          <Input label="Your Name" id="name" type="text" />

          <Input label="Mobile numbers" id="number" type="text" />

          <Input label="Password" id="password" type="password" />

          <button className="bg-primary mb-5 w-full font-ibm-con py-2 font-medium rounded-lg cursor-pointer hover:bg-[#ffe800] ">
            Verify mobile number
          </button>

          <div className="border-t border-b border-[#D9D9D9] py-5 mb-4">
            <p className="font-ibm-con font-bold text-xl">Buying for work?</p>
            <a href="#" className="text-fourth font-inika">
              Create a free business account
            </a>
          </div>

          <div className="font-ibm-con text-[17px] mb-4 flex gap-2">
            <p> Already have an account?</p>
            <a
              onClick={() => navigate("/signin")}
              href="#"
              className="text-fourth font-inika underline flex items-center gap-1"
            >
              Sign in
              <img src={arrow} alt="arrow icon" className="w-2" />
            </a>
          </div>

          <p className="font-ibm-con text-[17px] mb-4">
            By creating an account or logging in , you agree to Amazon’s
            <a href="#" className="text-fourth font-inika underline">
              Conditions of Use
            </a>
            and
            <a href="#" className="text-fourth font-inika underline">
              Privacy Notice.
            </a>
          </p>
        </form>
      </div>
      <ConditionsFooter/>
    </section>
  );
};

export default Register;
