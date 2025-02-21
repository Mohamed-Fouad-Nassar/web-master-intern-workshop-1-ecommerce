import { LoaderCircle } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex justify-center animate-spin">
      <LoaderCircle className="size-12" />
    </div>
  );
}
