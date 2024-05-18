import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error('Please enter a search query');
    }

    setLoading(true);

    try {
      await onSubmit(query);
      setQuery('');
    } catch (error) {
      toast.error('Failed to fetch images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css['search-container']}>
      <header className={css['head-cont']}>
        <form onSubmit={handleSubmit}>
          <input
            className={css.inp}
            type="text"
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit" disabled={loading}>
            <FaSearch size={15} />
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
