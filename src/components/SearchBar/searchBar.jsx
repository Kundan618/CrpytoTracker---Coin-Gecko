import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext';

const SearchBar = () => {
      const { searchQuery, setSearchQuery, openSearch, setOpenSearch } = useContext(SearchContext);
    return (
        <>
         <input
                type="text"
                placeholder="Search coin..."
                className="input p-5 w-55 md:w-64 bg-base-100 text-white outline-none "
                autoFocus
                onBlur={() => setOpenSearch(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
        </>
    )
}

export default SearchBar
