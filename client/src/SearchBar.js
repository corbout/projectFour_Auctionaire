import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props, context) {
        super (props, context) 
        
        this.state = { term: '' };
        
        
    }
    
    render () {
        return (
            <div className="search-bar">
                <input type={'text'} placeholder={'Search here...'} value={ this.state.term }
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
            
        ); 
    };

    onInputChange(term) {
        this.setState({ term });
    }
}

export default SearchBar;