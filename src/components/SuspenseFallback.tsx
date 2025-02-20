import { Suspense } from "react";

import Spinner from "./Spinner";

export default function SuspenseFallback({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
