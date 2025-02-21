import { Suspense } from "react";

import Spinner from "./Spinner";

export default function SuspenseFallback({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <Spinner />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
