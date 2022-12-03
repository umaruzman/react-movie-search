import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import MovieCard from './components/MovieCard';

const API_URL = "http://www.omdbapi.com/?apikey=267f2c47";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [timerId, setTimerId] = useState();

  const searchMovies = async (title: string) =>{
    const req = await axios.get(`${API_URL}&s=${title}`);
    const data = req.data;
    setMovies(data?.Search || []);
  }

  useEffect(()=>{
    if(timerId){
      clearTimeout(timerId);
    }
    const timeout = setTimeout(() => {
      searchMovies(searchTerm);
    }, 1000);

    setTimerId(JSON.parse(JSON.stringify(timeout)));
  }, [searchTerm])
  
  return (
    <div className="App">
      <h1>The Movie App</h1>
      <div className="search">
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>

      {
          movies?.length > 0
            ? (
              <div className="container">
                {
                  movies.map((movie: any) => (
                    <MovieCard movie={movie} key={movie?.imdbID}/>
                  ))
                }
        
              </div>
            )
            : (
              <div className="not-found">
                <h3> No Movies Found!</h3>
              </div>
            )
        }

      
    </div>
  );
}

export default App;
