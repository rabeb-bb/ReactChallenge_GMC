import React from 'react'
import Rating from '@material-ui/lab/Rating';
import "./MovieCard.css"

const MovieCard = ({movie, handleName}) => {
    return (
        <div style={{margin:"2%"}} onClick={()=>handleName(movie.name)}>
            <div className="container">
          <div className="cellphone-container">    
            <div className="movie">       
              <img src={movie.image} className="movie-img" />
              <div className="text-movie-cont" style={{display:"flex", flexDirection:"column", alignContent:"space-between"}}>
                <div className="mr-grid">
                  <div className="col1">
                    <h1>{movie.name}</h1>
                    <ul className="movie-gen">
                      <li>PG-13  /</li>
                      <li>{movie.date}  /</li>
                      <li>{movie.type}</li>
                    </ul>
                  </div>
                </div>
                <div className="mr-grid summary-row">
                  <div className="col2">
                    <h5>SUMMARY</h5>
                  </div>
                </div>
                <div className="mr-grid">
                  <div className="col1">
                    <p className="movie-description">{movie.description} </p>
                  </div>
                </div>
                <div className="mr-grid action-row">
                <Rating name="read-only" value={movie.rating} readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
    )
}

export default MovieCard
