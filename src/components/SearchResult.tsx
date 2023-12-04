import React from "react";
import { useNavigate } from "react-router-dom";

interface SearchResultProps {
  shows: Array<{
    id: number;
    name: string;
    image?: { medium: string };
    rating?: { average: number };
  }>;
  onSelect: (showId: number) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({ shows, onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = (showId: number) => {
    onSelect(showId);
    navigate("/showdetails");
  };

  return (
    <div className="search-results">
      {shows.map((show) => (
        <div
          key={show.id}
          className="search-result-item"
          onClick={() => handleSelect(show.id)}
        >
          {show.image && <img src={show.image.medium} alt={show.name} />}
          <div className="search-result-title">{show.name}</div>
          {show.rating && (
            <div className="search-result-stars">
              {Array.from(
                { length: Math.floor(show.rating.average) },
                (_, index) => (
                  <span key={index} className="star">
                    ★
                  </span>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
