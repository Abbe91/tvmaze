import React, { useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    navigate("/searchresult");
  };

  const handleGoHome = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="search-form-container">
      <Logo />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search TV Series"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button className="go-home" type="button" onClick={handleGoHome}>
        Home
      </button>
    </div>
  );
};

export default SearchForm;
