import { useState } from "react";
import "./SearchBar.css"

type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  const handleChange = (value: string) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
