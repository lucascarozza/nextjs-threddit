import Link from "next/link";

import { honk } from "@/app/layout";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full h-20 flex items-center justify-between px-4 lg:px-20 bg-zinc-900 shadow-md">
      <Link href={"/"}>
        <h1 className={`${honk.className} hidden sm:block text-7xl transition-all hover:scale-105`}>threddit</h1>
        <span className={`${honk.className} sm:hidden text-7xl`}>t</span>
      </Link>
      {/* Search */}
      <div className="inline-flex items-center justify-center h-11 gap-2">
        <span className="overflow-hidden px-6 bg-zinc-800 hover:bg-zinc-700 rounded-full shadow-sm transition-all">
          <input
            type="search"
            placeholder="Search"
            className="w-50 h-11 md:w-80 outline-0"
            aria-label="Search"
          />
        </span>
        <button
          type="button"
          title="Search"
          className="flex items-center justify-center w-11 h-11 text-2xl bg-gradient-to-t from-pink-500 to-yellow-500 rounded-full shadow-sm transition-all hover:scale-110 hover:cursor-pointer"
          aria-label="Search Button"
        >
          <FaSearch aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
