import React from 'react';
import './search.css'

class Search extends React.Component {
    state = {
        search: ''
    }

    onChange = async e=> {
        e.persist();
        await this.setState({search: e.target.value});
        console.log(this.state.search)
    }

    render(){
        return (
            <section id='search_container'>
                <input 
                    type='text' 
                    placeholder='Search other cities...'
                    value={this.state.search}
                    onChange={this.onChange}
                ></input>
            </section>
        )
    }
}

export default Search;