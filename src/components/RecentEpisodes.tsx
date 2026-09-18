import { useState } from 'react';
import EpisodeCard from './EpisodeCard';

function RecentEpisodes() {
  const [search, setSearch] = useState('');
  const episodes = [
    {
      id: 1,
      title: 'Pizza',
      category: 'Lifestyle',
      duration: '32 min',
    },
    {
      id: 2,
      title: 'Burger',
      category: 'Motivation',
      duration: '28 min',
    },
    {
      id: 3,
      title: 'Calzone1',
      category: 'Business',
      duration: '45 min',
    },
    {
      id: 4,
      title: 'Calzone2',
      category: 'Business',
      duration: '45 min',
    },
    {
      id: 5,
      title: 'Calzone3',
      category: 'Business',
      duration: '45 min',
    },
  ];
  const filteredEpisodes = episodes.filter((epi) =>
    epi.title.toLowerCase().includes(search.toLowerCase()) ||
    epi.category.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <section className="recent-episodes">
      <div className="container">
        <h2>Recent Episode</h2>
        <div className="episode-search">
          <input
            type="text"
            placeholder="Search episodes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <p>You are searching: {search}</p>
        </div>

        <div className="episode-grid">
          {filteredEpisodes.map((epi) => (
            <EpisodeCard
              key={epi.id}
              title={epi.title}
              category={epi.category}
              duration={epi.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentEpisodes;
