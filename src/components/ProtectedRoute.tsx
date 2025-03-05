import { Navigate } from "react-router";

import SpinnerFullScreen from "./SpinnerFullScreen";

import { useAppSelector } from "../store/hooks";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, user, error } = useAppSelector((state) => state.auth);

  if (isLoading) return <SpinnerFullScreen />;

  if (error) return <Navigate to="/" replace />;

  if (!user) return <Navigate to="/signin" replace />;

  return children;
}
