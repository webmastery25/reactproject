import { useState } from 'react';

function SearchEpisode() {
  const [search, setSearch] = useState('');

  return (
    <div className="search-episode">
      <input
        type="text"
        placeholder="Search episode..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>You searched forwww: {search}</p>
    </div>
  );
}

export default SearchEpisode;
