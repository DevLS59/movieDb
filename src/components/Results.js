import React from 'react'

import './Results.scss'
import Result from '../components/Result'



const Results = ( {results, openPopup }) => {
    return(
        <section className="results">
            
            {results.map((result, index) => (
                <Result  key={index} result={result} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default Results 