import Link from "next/link";

import { honk } from "@/app/layout";
import { FaSearch } from "react-icons/fa";
import SubredditsDropdown from "../SubredditsDropdown/SubredditsDropdown";

const Header: React.FC = () => {
  return (
    <header className="z-49 fixed top-0 flex h-20 w-full items-center justify-between bg-zinc-900 px-4 shadow-md lg:px-20">
      <div className="flex items-center gap-4 md:gap-8">
        <Link href={"/"}>
          <h1
            className={`${honk.className} hidden text-7xl transition-all hover:scale-102 sm:block`}
          >
            threddit
          </h1>
          <span className={`${honk.className} text-7xl sm:hidden`}>t</span>
        </Link>
        <SubredditsDropdown />
      </div>
      
      {/* Search */}
      <div className="inline-flex h-11 items-center justify-center gap-2">
        <span className="overflow-hidden rounded-full border border-zinc-700 bg-zinc-800 px-6 shadow-sm transition-all hover:bg-zinc-700">
          <input
            type="search"
            placeholder="Search"
            className="h-11 w-28 outline-none md:w-80"
            aria-label="Search"
          />
        </span>
        <button
          type="button"
          title="Search"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-t from-pink-500 to-yellow-500 text-2xl shadow-sm transition-all hover:scale-110 hover:cursor-pointer"
          aria-label="Search Button"
        >
          <FaSearch aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
