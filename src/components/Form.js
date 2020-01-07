import React from 'react'

const Form = () => {

    return(
        <div className="form-container" >
        <form action="" >
            <div className="form-left">
                <label htmlFor="movie">Entrez le nom d'un film</label>
                <input type="text" name="movie" id="movie" />
                <p>exemple : batman</p>
            </div>
            <input type="button" value="Find Movie Now" id="cta-btn"/>
        </form >
    </div>
    )
}

export default Form