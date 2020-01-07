import React from 'react'

const Result = ( { result, openPopup }) => {

    // console.log(result)
    return(
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} alt="poster"/>
            <h3> {result.Title } </h3>    
        </div>
    )
}

export default Result  