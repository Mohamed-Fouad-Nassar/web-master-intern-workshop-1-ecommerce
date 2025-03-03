import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

import Button from "./Button";

const SearchbarH = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(searchQuery);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) navigate(`/products`);
    navigate(`/products?query=${query}`);
  }

  return (
    <div className="mx-2">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          placeholder="Search Amazon.eg"
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white text-black rounded-md w-full px-4 py-2 outline-0 focus:ring-2 focus:ring-primary"
        />
        <Button
          type="submit"
          className="absolute right-0 top-0 text-black flex items-center gap-1.5"
        >
          <Search className="size-5" />
          <span className="hidden md:block">Search</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchbarH;
