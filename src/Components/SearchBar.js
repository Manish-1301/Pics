import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    constructor (props){
        super(props);
    }
    render(){
        return(
            <form className="form" onSubmit={this.props.onSubmit}>
                <div className="SearchBar">
                    <label htmlFor="search" className="SearchBar__text">Image Search</label>
                    <input type="text"  id="search" placeholder="Type here" autoComplete="off" className="SearchBar__input" onChange={this.props.onInputChange} />
                </div>
            </form>
        );
    }
}

export default SearchBar;