import ProductComment from "./ProductComment";

import { TFinalProductComment } from "../../types/product.types";

type TProductCommentsProps = {
  comments: TFinalProductComment[];
};

export default function ProductComments({ comments }: TProductCommentsProps) {
  return (
    <section className="max-w-[90%] w-full mx-auto px-2 md:px-10 py-5 font-inter flex flex-col gap-4">
      {!comments?.length ? (
        <div className="text-center">
          <p className="text-gray-600 italic">No comments yet</p>
          <span className="">Be the first comment</span>
        </div>
      ) : (
        comments.map((comment, i) => (
          <ProductComment key={i} comment={comment} />
        ))
      )}
    </section>
  );
}
