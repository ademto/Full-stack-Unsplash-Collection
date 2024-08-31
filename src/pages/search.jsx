import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import SearchIcon from "../assets/Search.svg";

const Search = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  // Function to fetch photos
  const fetchPhotos = async (searchQuery) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=1&per_page=30&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      );
      if (response.status === 429) {
        // Rate limit exceeded
        console.log('Rate limit exceeded. Please try again later.');
        setLoading(false);
        return;
      }
      const data = await response.json();
      setPhotos(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false);
    }
  };

  // Fetch photos when the component mounts or when the query changes
  useEffect(() => {
    if (query) {
      fetchPhotos(query);
    }
  }, [query]);

  // Handle input change and search
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.searchQuery.value);
  };

  return (
    <div>
      <Navbar />
      <div className='bg-gradient-bg bg-center bg-no-repeat bg-cover w-full h-28 relative'>
        <div className='absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1/2 flex items-center'>
          <form onSubmit={handleSearch} className="w-full flex items-center">
            <input
              name="searchQuery"
              type="text"
              className="w-full rounded-md border-0 py-5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Enter your keywords...'
            />
            <button type="submit">
              <img className='absolute right-5' src={SearchIcon} alt="Search Icon" />
            </button>
          </form>
        </div>
      </div>
      <div className="gallery mt-20 max-w-[1280px] mx-auto">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {photos.length > 0 ? (
              photos.map(photo => (
                <div key={photo.id} className="relative mb-4">
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              ))
            ) : (
              <p>No photos found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
