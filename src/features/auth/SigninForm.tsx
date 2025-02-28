import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import Spinner from "../../components/Spinner";

import useSignIn from "./useSignIn";

export default function SigninForm() {
  const { register, submitForm, handleSubmit, isLoadingAction, errors } =
    useSignIn();

  return (
    <form className="mb-6" onSubmit={handleSubmit(submitForm)}>
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
          id="password"
          type="password"
          {...register("password")}
          disabled={isLoadingAction}
          className={`py-2 px-3 border-1 border-gray-500 rounded-lg focus:ring  ${
            errors?.password?.message ? "border-red-600" : ""
          }`}
        />
      </FormRow>

      <Button
        type="submit"
        disabled={isLoadingAction}
        className="w-full font-ibm-con"
      >
        {isLoadingAction ? <Spinner size="size-6" /> : "Sign In"}
      </Button>
    </form>
  );
}
