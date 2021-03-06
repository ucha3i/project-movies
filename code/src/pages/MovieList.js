import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './movielist.css';

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e0031d94cffec1ccfe74eefb45815869&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <div className="posters">

      {movies.map(movie => (
        <div className="one-poster">
        <Link key={movie.id} to={`/movies/${movie.id}`} >

          <div className="movie-title">
            {<h2>{movie.title}</h2>}
            {<p>Released {movie.release_date}</p>}
          </div>

          <div className="image">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt = "poster" />
          </div>

        </Link>
       </div> 
      ))}

    </div>
  )
}