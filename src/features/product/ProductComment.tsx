import Stars from "../../components/Stars";

import { TFinalProductComment } from "../../types/product.types";

type TProductCommentProps = {
  comment: TFinalProductComment;
};

export default function ProductComment({
  comment: {
    date,
    title,
    rating,
    details,
    content,
    location,
    user: { avatar, name },
  },
}: TProductCommentProps) {
  return (
    <div className="mb-2">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <img src={avatar} alt="user-avatar" />
          <span>{name}</span>
        </div>

        <div className="flex gap-3 items-center">
          <Stars rate={rating} />
          <h4 className="font-bold text-lg font-hind">{title}</h4>
        </div>

        <p className="text-gray-700">
          Reviewed in the {location} on {date}
        </p>

        <div
          className={`flex gap-2 text-sm my-1.5 ${
            details && "divide-x divide-gray-300 *:pr-2"
          }`}
        >
          {details && details?.size && (
            <span className="text-gray-500">Size: {details?.size}</span>
          )}
          {details && details?.color && (
            <span className="text-gray-500">Color: {details?.color}</span>
          )}
          <a href="#" className="text-secondary hover:text-primary">
            Verified Purchase
          </a>
        </div>
      </div>

      <p className="my-2">{content}</p>

      <a
        href="#"
        className="self-start font-hind text-lg text-gray-600 hover:text-third"
      >
        Report
      </a>
    </div>
  );
}
