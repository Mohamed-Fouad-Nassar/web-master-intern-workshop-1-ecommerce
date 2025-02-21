import ProductComment from "./ProductComment";

import { TProductComment } from "../../types/product.types";

type TProductCommentsProps = {
  comments: TProductComment[];
};

export default function ProductComments({ comments }: TProductCommentsProps) {
  return (
    <section className="px-2 md:px-10 py-5 font-inter flex flex-col gap-4">
      {comments.map((comment, i) => (
        <ProductComment key={i} comment={comment} />
      ))}
    </section>
  );
}
