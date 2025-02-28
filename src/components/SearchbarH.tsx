import { Search } from "lucide-react";

const SearchbarH = () => {
  return (
    <div className="mx-2">
      <div className="relative">
        <select
          name="departments"
          id="departments"
          className="hidden md:block  bg-[#D9D9D9] text-[#676767] border-none outline-none rounded-bl-md rounded-tl-md p-2 absolute left-0"
        >
          <option className="text-black bg-white" value="All Departments">
            All
          </option>
          <option className="text-black bg-white" value="baby">
            Baby
          </option>
          <option className="text-black bg-white" value="books">
            Books
          </option>
          <option className="text-black bg-white" value="computers">
            Computers
          </option>

          <option className="text-black bg-white" value="fashion">
            Fashion
          </option>
          <option className="text-black bg-white" value="games">
            Games
          </option>
          <option className="text-black bg-white" value="movies">
            Movies
          </option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon.eg"
          className="bg-white text-black rounded-md md:rounded-br-md md:rounded-tr-md pl-3 w-full py-2   md:pl-32"
        />
        <button className="bg-[#FFCC00] py-2 px-1.5 rounded-md absolute right-0  hover:bg-[#FCBC00] cursor-pointer">
          <Search color="black" />
        </button>
      </div>
    </div>
  );
};

export default SearchbarH;
