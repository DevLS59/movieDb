import React from 'react'

import './Results.scss'
import Result from '../components/Result'



const Results = ( {results}) => {
    return(
        <section className="results">
            
            {results.map((result, index) => (
                <Result  key={index} result={result} />
            ))}
        </section>
    )
}

export default Results 