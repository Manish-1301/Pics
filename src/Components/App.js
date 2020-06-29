import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            images: []
        }
    }
    onFormSubmit= async (term)=> {
        const response=await axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term,
            },
            headers: {
                Authorization: 'Client-ID YOUR_API_KEY'
            }
        });
        this.setState({images: response.data.results})
    }
    render(){
        return (
            <div className="Container">
                <SearchBar onSubmit={this.onFormSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
