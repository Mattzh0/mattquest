import videoBg from '../assets/bg.mp4'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import GameItem from '../components/GameItem.jsx';

export function Home() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalog');
  } 

  useEffect(() => {
    const getFeaturedGames = async () => {
      const response = await axios.get('http://localhost:8000/api/games');
      const featured = response.data.filter(game => game.featured === true);
      setFeaturedGames(featured);
    }
    getFeaturedGames();
  }, [])

  return (
    <>
      <div>
        <div className="hero min-h-screen relative">
          <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Placeholder</h1>
              <p className="mb-5">
                Placeholder
              </p>
              <button className="btn btn-primary" onClick={() => goToCatalog()}>Search for Games</button>
            </div>
          </div>
        </div>

        {/* Featured Games */}
        <div className="py-10 bg-base-150">
          <div className="max-w-screen-xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {
                featuredGames.map((game) => {
                  return(
                    <GameItem key={game.game_id} title={game.title} release_date={game.release_date} short_desc={game.short_desc} img_src={"https://via.placeholder.com/300"} rating={game.rating}  />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
