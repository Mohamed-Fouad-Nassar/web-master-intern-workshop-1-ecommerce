import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import Spinner from "../../components/Spinner";

import useRegister from "./useRegister";

export default function RegisterForm() {
  const { errors, register, submitForm, handleSubmit, isLoadingAction } =
    useRegister();

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FormRow label="Your Name" error={errors?.name?.message}>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="John Doe"
          disabled={isLoadingAction}
          className={`py-2 px-3 border-1 border-gray-500 rounded-lg focus:ring focus:ring-black ${
            errors?.name?.message ? "border-red-600" : ""
          }`}
        />
      </FormRow>

      <FormRow
        label="Email or mobile phone number"
        error={errors?.email?.message}
      >
        <input
          id="email"
          type="email"
          {...register("email")}
          disabled={isLoadingAction}
          className={`py-2 px-3 border-1 border-gray-500 rounded-lg focus:ring focus:ring-black ${
            errors?.email?.message ? "border-red-600" : ""
          }`}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <input
          id="Password"
          type="Password"
          {...register("password")}
          disabled={isLoadingAction}
          className={`py-2 px-3 border-1 border-gray-500 rounded-lg focus:ring focus:ring-black${
            errors?.password?.message ? "border-red-600" : ""
          } `}
        />
      </FormRow>

      <Button
        type="submit"
        disabled={isLoadingAction}
        className="w-full font-ibm-con"
      >
        {isLoadingAction ? <Spinner size="size-6" /> : "Register"}
      </Button>
    </form>
  );
}
