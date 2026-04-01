import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const makeAPICall = async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const response = await fetch(`${API_URL}/movies`);
    const body = await response.json();
    const items = body[1]
    setMovies(items);
  }

  useEffect(() => {
    makeAPICall();
  }, []); 

if (movies.length === 0) {
    return <h2>Carregando filmes...</h2>;
  }

  return (
    <div className="app">
      <h1>Cinema Fictício</h1>

      <div className="movies-container">
        {movies.map((movie) => {
          return (
            <div className="movie-card" key={movie.tmdb_id}>
              <h3>{movie.titulo}</h3>
              <img
                src={movie.poster_link}
                alt={movie.titulo ?? "Poster de filme"}
              />
            </div>
          );
        })}
      </div>

      <footer>
        <p>
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </footer>
    </div>
  );
}

export default App;
