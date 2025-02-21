import Stars from "../../components/Stars";
import RateStat from "../../components/RateStat";

import { TProduct } from "../../types/product.types";

type TProductRatingsProps = {
  rating: TProduct["rating"];
};

export default function ProductRatings({ rating }: TProductRatingsProps) {
  return (
    <section className="min-w-xs p-2 space-y-2">
      <h3 className="font-bold font-ibm text-lg">Customer Reviews</h3>

      <div>
        <div className="flex gap-1 items-center font-hind">
          <Stars rate={rating?.rate} />
          <span>{rating.rate} out of 5</span>
        </div>
        <p className="text-gray-700 pt-2">{rating.count} global rating</p>
      </div>

      <div className="pt-2 space-y-2">
        {Object.entries(rating.stars)
          .reverse()
          .map(([star, val]) => (
            <RateStat
              key={star}
              star={+star}
              per={Math.floor((val / rating?.count) * 100)}
            />
          ))}
      </div>
    </section>
  );
}
