import { Link } from "react-router";
import { CircleUserRound } from "lucide-react";

import Spinner from "./Spinner";

import { useAppSelector } from "../store/hooks";

export default function UserNav() {
  const { isLoading, error, user } = useAppSelector((state) => state.auth);

  if (isLoading) return <Spinner size="size-4" />;

  if (error) {
    console.log(error);
    return null;
  }

  if (!user)
    return (
      <Link
        to="/signin"
        className="flex items-center gap-1.5 hover:underline hover:text-third"
      >
        <CircleUserRound />
        Sign in
      </Link>
    );

  return (
    <>
      <div>
        <Link
          to="/profile"
          className="text-sm hover:text-third hover:underline"
        >
          Hello, {user.firstName}
        </Link>
      </div>

      <Link
        to="/orders"
        className="text-sm hidden sm:block hover:text-third hover:underline"
      >
        Orders
      </Link>
    </>
  );
}
