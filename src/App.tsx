import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import ShowDetails from './components/ShowDetails';

import './App.css';

interface SearchResultItem {
  show: {
    id: number;
    name: string;
    summary: string;
    image: {
      medium: string;
    };
  };
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [selectedShow, setSelectedShow] = useState<{
    id: number;
    name: string;
    summary: string;
    image: {
      medium: string;
    };
    cast: any;
  } | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() !== '') {
        try {
          const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
          setSearchResults(response.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedShow(null);
  };

  const handleSelectShow = async (showId: number) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${showId}/cast`);
      const cast = response.data;
      const selected = searchResults.find((result) => result.show.id === showId);

      if (selected) {
        setSelectedShow({ ...selected.show, cast });
        console.log(response.data[1].person.image.medium);
      }
    } catch (error) {
      console.error('Error fetching cast information:', error);
      
    }
  };
  
  return (
    <div className="container">
    <Router>
    <SearchForm onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchResult shows={searchResults.map((result) => result.show)} onSelect={handleSelectShow} />
            </>
          }
        />
        <Route path="/searchresult" element={<SearchResultPage shows={searchResults} onSelect={handleSelectShow} />} />
        {selectedShow && <Route path="/searchresult" element={<ShowDetailsPage show={selectedShow} />} />}
        <Route path="/searchresult" element={<ShowDetailsPage show={selectedShow} />} />
        {selectedShow && <Route path="/searchresult" element={<ShowDetailsPage show={selectedShow} />} />}
      </Routes>
    </Router>
      {selectedShow && (
        <div>
          <ShowDetails show={selectedShow} />
          {selectedShow.image && <img className="search-image" src={selectedShow.image.medium} alt="Show" />}
        </div>
      )}  
  </div>
);
};
const SearchResultPage: React.FC<{ shows: SearchResultItem[]; onSelect: (showId: number) => void }> = ({ shows, onSelect }) => {
  return <SearchResult shows={shows.map((result) => result.show)} onSelect={onSelect} />;
};

const ShowDetailsPage: React.FC<{ show: any }> = ({ show }) => {
  return (
    <div>
    
    </div>
  );
};
export default App;
