import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
    const handleName=(name)=> alert(name)
    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {movies.map((el,i) => 
                <MovieCard movie={el} key={i} handleName={handleName} />
            )}
        </div>
    )
}

export default MoviesList
