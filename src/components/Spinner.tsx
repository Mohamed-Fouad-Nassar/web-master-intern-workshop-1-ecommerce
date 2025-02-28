import { LoaderCircle } from "lucide-react";

export default function Spinner({ size }: { size?: string }) {
  return (
    <div className="flex justify-center animate-spin">
      <LoaderCircle className={size ? size : "size-12"} />
    </div>
  );
}
