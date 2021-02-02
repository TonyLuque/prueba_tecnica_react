import React from 'react';
import './search.css'

class Search extends React.Component {
    render(){
        return (
            <section id='search_container'>
                <input type='text' placeholder='Search other cities...'></input>
            </section>
        )
    }
}

export default Search;