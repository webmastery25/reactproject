import { useState } from 'react';

type EpisodeCardProps = {
  title: string;
  category: string;
  duration: string;
};

function EpisodeCard({ title, category, duration }: EpisodeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="episode-card">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{duration}</p>

      <button
        onClick={() => {
          console.log('Button clicked');
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? 'Playing...' : 'Play Episode'}
      </button>
    </div>
  );
}

export default EpisodeCard;
