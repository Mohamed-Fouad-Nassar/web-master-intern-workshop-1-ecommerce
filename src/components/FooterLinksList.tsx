type TFooterLinksListProps = {
  title: string;
  links: { title: string; path: string }[];
};

export default function FooterLinksList({
  title,
  links,
}: TFooterLinksListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-medium">{title}</h4>
      <ul className="flex flex-col gap-0.5">
        {links.map(({ title, path }) => (
          <li>
            <a
              className="text-gray-300 hover:text-third hover:underline"
              href={path}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
