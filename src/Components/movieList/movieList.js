import React, { useEffect, useState } from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import "../Footer"
const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=862ff5ac4a278400dada9ca17b96f5e1&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        getData();
    }, [type]);

    // Use a loading indicator or conditionally render based on whether data has been fetched
    if (movieList.length === 0) {
        return <p>Loading...</p>; // You can replace this with a loading component
    }

    return (
        <div className="movie__list">
            <h2 className="list__title text-blue-300 font-bold text-2xl">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {movieList.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList;
