import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import Form from '../components/Form'


function Header({handleInput, search}) {
    return (
        <div className="hero-bg">
        <section className="top">
            
            <header> <Link to='/'>MovieDb</Link> </header>
            <h1> <span>MovieDb</span>Movie Search experience</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus necessitatibus aspernatur provident commodi suscipit vel quae natus possimus quas voluptas!</p>

            <Form handleInput={handleInput} search={search} />
        </section>  
    </div>
    )
}

export default Header
