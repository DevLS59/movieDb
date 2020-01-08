import React from 'react'
import imageDefault  from '../images/cinema-illustr1.jpg'
const Result = ( { result, openPopup }) => {

    console.log(result.Poster)
    return(
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            {  (result.Poster !== "N/A") ?  <img src={result.Poster} alt="poster"/> : <img src={imageDefault} alt="poster"/> }
            <h3> {result.Title } </h3>    
        </div>
    )
}

export default Result  