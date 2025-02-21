import { Star } from "lucide-react";

export default function Stars({ rate }: { rate: number }) {
  if (!rate) return null;

  const filledStars = Math.floor(rate);
  const unFilledStars = 5 - filledStars;

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: filledStars }).map((_, i) => (
        <Star
          key={i}
          className="size-5 stroke-1 stroke-[#FF9900] fill-[#FFCC00]"
        />
      ))}
      {Array.from({ length: unFilledStars }).map((_, i) => (
        <Star key={i} className="size-5 stroke-1 stroke-[#FF9900]" />
      ))}
    </div>
  );
}
