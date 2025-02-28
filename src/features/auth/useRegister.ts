import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { register as registerAuth } from "../../store/auth/authSlice";

import {
  RegisterFormTypes,
  registerSchema,
} from "../../validations/registerSchema";

export default function useRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormTypes>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoadingAction } = useAppSelector((state) => state.auth);

  const submitForm: SubmitHandler<RegisterFormTypes> = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
      firstName: data.name.split(" ")[0],
      lastName: data.name.split(" ")[1],
      avatar:
        "https://web-master-intern-workshop-1-ecommerce-backend.vercel.app/data/users/user-avatar-2.png",
    };

    dispatch(registerAuth({ ...user }))
      .unwrap()
      .then(() => toast.success("User registered successfully!"))
      .then(() => navigate("/signin"))
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
