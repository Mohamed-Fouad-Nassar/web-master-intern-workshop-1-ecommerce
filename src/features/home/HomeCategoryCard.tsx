import { Link } from "react-router";

type THomeCategoryCardProps = {
  path: string;
  title: string;
  categories: { img: string; title?: string; path: string }[];
};

export default function HomeCategoryCard({
  path,
  title,
  categories,
}: THomeCategoryCardProps) {
  return (
    <div className="bg-white px-4 py-6 shadow">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="grid grid-cols-2 gap-4">
        {categories.map(({ img, title, path }) => (
          <div className="cursor-pointer">
            <Link to={path}>
              <img
                src={img}
                alt="category-image"
                className="w-full mx-auto object-contain"
              />
            </Link>
            {title ? <p className="pt-2">{title}</p> : null}
          </div>
        ))}
      </div>

      <Link to={path} className="block mt-6 text-third hover:underline">
        Explore all
      </Link>
    </div>
  );
}
