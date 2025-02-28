import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { signin } from "../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { SigninFormTypes, signinSchema } from "../../validations/signinSchema";

export default function useSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormTypes>({
    mode: "onBlur",
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoadingAction } = useAppSelector((state) => state.auth);

  const submitForm: SubmitHandler<SigninFormTypes> = async (data) => {
    dispatch(signin(data))
      .unwrap()
      .then(() => toast.success("User Logged in successfully!"))
      .then(() => navigate("/"))
      .catch((err) => toast.error(err));
  };

  return {
    errors,
    register,
    submitForm,
    handleSubmit,
    isLoadingAction,
  };
}
