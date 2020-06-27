import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component{
    constructor (props){
        super(props);
        this.state={
            term: ''
        };
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <form className="form" onSubmit={this.onFormSubmit}>
                <div className="SearchBar">
                    <label htmlFor="search" className="SearchBar__text">Image Search</label>
                    <input type="text"  id="search" placeholder="Type here" autoComplete="off" className="SearchBar__input" onChange={(e)=>this.setState({term: e.target.value})} />
                </div>
            </form>
        );
    }
}

export default SearchBar;