// Import necessary dependencies
import { Outlet, NavLink, Route, Routes } from 'react-router-dom';

// Import your components
import Search from '../components/SearchForm'; // Assuming you have a Search component
import SearchResult from '../views/SearchResult';
import ShowDetails from '../views/ShowDetails';

// Rest of the code remains unchanged

const RootLayout: React.FC = () => {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <div className="nav-links">
            <NavLink className="nav-link" to="/">
              Search
            </NavLink>
            <NavLink className="nav-link" to="/searchresult">
              Result
            </NavLink>
            <NavLink className="nav-link" to="/showdetails">
              ShowDetails
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Search onSearch={function (query: string): void {
                      throw new Error('Function not implemented.');
                  } } />} />
          <Route path="/searchresult" element={<SearchResult shows={[]} onSelect={function (showId: number): void {
                      throw new Error('Function not implemented.');
                  } } />} />
          <Route path="/showdetails/:showId" element={<ShowDetails show={{
                      id: 0,
                      name: '',
                      summary: '',
                      image: {
                          medium: ''
                      },
                      cast: undefined,
                      genres: undefined
                  }} />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
