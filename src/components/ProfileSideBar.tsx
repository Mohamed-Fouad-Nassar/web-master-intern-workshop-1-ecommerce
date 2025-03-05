import { Link, useLocation } from "react-router";
import { LogOut, Package, User } from "lucide-react";

import Button from "./Button";
import Spinner from "./Spinner";

import { signout } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function ProfileSideBar() {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const { isLoading, isLoadingAction } = useAppSelector((state) => state.auth);

  return (
    <aside className="w-fit md:w-[220px] p-2 flex flex-col justify-between bg-gray-100 rounded">
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            to="profile"
            className={`flex items-center gap-2 w-full px-4 py-2 rounded hover:bg-primary/20 ${
              pathname === "/profile" ? "bg-primary/30 hover:bg-primary/30" : ""
            }`}
          >
            <User className="size-6 md:size-5" />
            <span className="hidden md:block">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="orders"
            className={`flex items-center gap-2 w-full px-4 py-2 rounded hover:bg-primary/20 ${
              pathname === "/orders" ? "bg-primary/30 hover:bg-primary/30" : ""
            }`}
          >
            <Package className="size-6 md:size-5" />
            <span className="hidden md:block">Orders</span>
          </Link>
        </li>
      </ul>

      {isLoading ? null : (
        <Button
          variation="third"
          disabled={isLoadingAction}
          onClick={() => dispatch(signout())}
          className="w-full flex items-center justify-center md:justify-start gap-2"
        >
          {isLoadingAction ? (
            <>
              <Spinner size="size-4" />
              <span className="hidden md:block">Signing Out...</span>
            </>
          ) : (
            <>
              <LogOut className="size-4" />
              <span className="hidden md:block">Sign out</span>
            </>
          )}
        </Button>
      )}
    </aside>
  );
}
