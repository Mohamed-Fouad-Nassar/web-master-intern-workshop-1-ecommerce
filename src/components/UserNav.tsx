import Spinner from "./Spinner";
import { Link } from "react-router";

import { useAppSelector } from "../store/hooks";
import { CircleUserRound } from "lucide-react";

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
        <p className="text-sm">Hello, {user.firstName}</p>
        <Link to="#">Accounts &amp; Lists</Link>
      </div>

      <Link to="#" className="hidden sm:block">
        Returns <br /> &amp; Orders{" "}
      </Link>
    </>
  );
}
