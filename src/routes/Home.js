import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home(){
    const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(
    () =>{
      getMovies();
    }
  , [])
  
  return(
    <div>
      <h1>React Movie App</h1>
      {loading ? <h1>loading...</h1>:
      <div>
        {movies.map(
          movie => <Movie 
          key={movie.id}
          id={movie.id}
          coverImage={movie.medium_cover_image} 
          title ={movie.title}
          summary={movie.summary}
          genres={movie.genres}
          ></Movie>)
          }
      </div>}
    </div>
  )
}