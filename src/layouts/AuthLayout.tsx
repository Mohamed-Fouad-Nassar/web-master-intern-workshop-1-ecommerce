import { Navigate, Outlet } from "react-router";

import ConditionsFooter from "../components/ConditionsFooter";
import SpinnerFullScreen from "../components/SpinnerFullScreen";

import { useAppSelector } from "../store/hooks";

import logo from "../data/logo.png";

export default function AuthLayout() {
  const { isLoading, accessToken } = useAppSelector((state) => state.auth);

  if (isLoading) return <SpinnerFullScreen />;
  if (accessToken) return <Navigate to="/" />;

  return (
    <main className="container mx-auto py-8 px-3">
      <div className="flex justify-center">
        <img src={logo} alt="amazon logo" className="max-w-full mt-6 mb-8" />
      </div>
      <Outlet />
      <ConditionsFooter />
    </main>
  );
}
