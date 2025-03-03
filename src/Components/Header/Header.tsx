import Link from "next/link";
import SubredditsDropdown from "../SubredditsDropdown/SubredditsDropdown";
import SearchBar from "../SearchBar/SearchBar";
import { honk } from "@/app/layout";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-49 flex h-20 w-full items-center justify-between bg-zinc-900 px-4 shadow-md lg:px-20">
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
      <SearchBar />
    </header>
  );
};

export default Header;
