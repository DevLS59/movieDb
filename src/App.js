import React, {useState} from 'react';
import axios from 'axios'

import './App.css';


//import Components
import Header from './components/Header'
import Results from './components/Results'
import Error from './components/Error'
import Popup from './components/Popup'

function App() {
    
    const [saisie, setSaisie] = useState('')
    const [results, setResults] = useState([])
   const [selected, setSelected] = useState({})
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
          
        });
    }

    // descriptif film
    const openPopup = id => {

        // console.log(apiurl + "&i=" + id)
        axios(apiurl + "&i=" + id).then(({ data }) => {
          let result = data;
          setSelected(result)
          console.log(selected)
        
        });
      }

    const closePopup = () =>  {
        setSelected({})
    }
    return (
        
        <div className="App">
     
            <header className="app-header">
                <Header  handleInput = {handleInput} search={search} />
            </header>

            <main className="container-result">
                { (results) ?  <Results results={results} openPopup={openPopup} /> : <Error />
                    
                }

{(typeof selected.Title != "undefined" ) ? <Popup selected={selected} closePopup={closePopup} /> : false} 
            </main>
    </div>
  );
}

export default App;
