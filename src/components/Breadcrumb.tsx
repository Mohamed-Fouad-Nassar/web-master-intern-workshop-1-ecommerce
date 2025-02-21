import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

type TBreadcrumbProps = {
  links: { title: string; path: string }[];
};

export default function Breadcrumb({ links }: TBreadcrumbProps) {
  return (
    <div className="flex justify-start items-center gap-1 py-4">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-1">
          <span className="text-gray-600 hover:text-third">
            <Link to={link.path}>{link.title}</Link>
          </span>
          {index < links.length - 1 && (
            <ChevronRight className="-mb-0.5 size-5 text-gray-600" />
          )}
        </div>
      ))}
    </div>
  );
}
