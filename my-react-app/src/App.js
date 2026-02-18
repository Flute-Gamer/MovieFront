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

  return (
    <div>
      <h1>Cinema Fictício</h1>
      {
        movies.map((movie)=>{
          return (
            <div key={movie.tmdb_id}>
              <h3>{movie.titulo}</h3>
                <img 
                src={movie.poster_link} 
                alt={movie.titulo ?? "Poster de filme"}
                />
            </div>
          )
        })
      }
      <footer>
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    </footer>
    </div>
  );
}

export default App;
