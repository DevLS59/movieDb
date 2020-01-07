import React from 'react'

const Form = ({handleInput, search}) => {

    return(
        <div className="form-container" onSubmit={search}>
        <form action="" >
            <div className="form-left">
                <label htmlFor="movie">Entrez le nom d'un film</label>
                <input type="text" name="movie" id="movie" onChange={handleInput}/>
                <p>exemple : batman</p>
            </div>
            <input type="button" value="Find Movie Now" id="cta-btn" onClick={search} />
        </form >
    </div>
    )
}

export default Form