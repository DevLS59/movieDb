import React, {useState} from 'react';
import axios from 'axios'

import './App.css';


//import Components
import Header from './components/Header'
import Results from './components/Results'
import Error from './components/Error'

function App() {
    
    const [saisie, setSaisie] = useState('')
    const [results, setResults] = useState([])
    

    //recup saisie formulaire
    const handleInput = (e) => {
        let nomFilm = e.target.value
        setSaisie(nomFilm)
    }

    // recherche film
    const apiurl = "http://www.omdbapi.com/?apikey=35d99153";

    const search = (e) => {
        e.preventDefault()
        axios(apiurl +"&s=" + saisie).then(({data}) => {
            let results = data.Search
            setResults(results)
            console.log(results)
        });
    }

    return (
        
        <div className="App">
     
            <header className="app-header">
                <Header  handleInput = {handleInput} search={search} />
            </header>

            <main className="container-result">
                { (results) ?  <Results results={results} /> : <Error />
                    
                }
            </main>
    </div>
  );
}

export default App;
