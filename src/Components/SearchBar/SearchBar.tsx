"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { fetchPostsFromSearchResults } from "@/lib/features/postsSlice/postsSlice";
import { useAppDispatch } from "@/lib/hooks";


const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  // Sanitize and validate the search term
  const sanitizeSearchTerm = (term: string): string => {
    return term.replace(/[^\w\s.,-]/gi, "").trim();
  };

  // Handle form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedTerm = sanitizeSearchTerm(searchTerm);
    if (sanitizedTerm) {
      dispatch(fetchPostsFromSearchResults(sanitizedTerm));
    }
  };

  return (
    <form
      name="search"
      onSubmit={handleSearch}
      className="inline-flex items-center justify-center gap-2 h-11"
      role="search"
    >
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        id="search-input"
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-28 h-11 px-6 overflow-hidden outline-none rounded-full border border-zinc-700 bg-zinc-800 md:w-80 shadow-sm transition-all hover:bg-zinc-700 focus:bg-zinc-700 focus:border-3 focus:border-pink-500"
        aria-label="Search"
        aria-required="true"
        required
      />
      <button
        type="submit"
        title="Search"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-t from-pink-500 to-yellow-500 text-2xl shadow-sm transition-all hover:scale-110 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-zinc-800"
        aria-label="Search Button"
        disabled={!searchTerm.trim()}
      >
        <FaSearch aria-hidden="true" />
      </button>
    </form>
  );
};

export default SearchBar;
