import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';
import Pagination from './Pagination';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            images: [],
            totalpages: 0,
            currentpage: 1,
            searchTerm:""
        }
    }
    onApiCall=async ()=>{
        console.log('onapicall')
        console.log(this.state);
        const response=await axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: this.state.searchTerm,
                page: this.state.currentpage
            },
            headers: {
                Authorization: 'Client-ID ljYKqmbjJ6cV-wumI4HWvgRnAP6Mkt53ghRzMxj3I6k'
            }
        });
        //console.log(response);
        this.setState({images: response.data.results, totalpages: response.data.total_pages})
    }
    onInputChange=(event)=>{
        this.setState({searchTerm:event.target.value})
    }
    onFormSubmit=(event)=> {
        event.preventDefault();
        this.setState({
            totalpages: 0,
            currentpage: 1
        },this.onApiCall)
    }
    onPageClick=(event)=>{
        console.log(event.selected+1)
        this.setState({currentpage: event.selected+1},this.onApiCall);
    }
    render(){
        return (
            <div className="Container">
                <SearchBar onSubmit={this.onFormSubmit} onInputChange={this.onInputChange} />
                <ImageList images={this.state.images} />
                <Pagination totalpages={this.state.totalpages} onPageClick={this.onPageClick}/>
            </div>
        );
    }
}

export default App;