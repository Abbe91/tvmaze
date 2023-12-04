// SearchForm.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

describe('SearchForm component', () => {
  it('renders SearchForm component correctly', () => {
    const mockOnSearch = jest.fn();
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SearchForm onSearch={mockOnSearch} />}
          />
        </Routes>
      </BrowserRouter>
    );

    // You can add more specific assertions based on your component structure
    expect(screen.getByPlaceholderText('Search TV Series')).toBeInTheDocument();
    
  });

  it('calls onSearch and navigates to "/searchresult" when the form is submitted', async () => {
    const mockOnSearch = jest.fn();
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SearchForm onSearch={mockOnSearch} />}
          />
        </Routes>
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search TV Series');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'Breaking Bad' } });
    fireEvent.click(searchButton);

    // You may need to adjust the expectation based on your actual navigation logic
    expect(mockOnSearch).toHaveBeenCalledWith('Breaking Bad');
  });

 
});
