import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';


const Pagination=({totalpages,onPageClick})=>{
    if(totalpages===0){
        return(null)
    }else{
        return (
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalpages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(event)=>onPageClick(event)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                />
        );
    }
    
}

export default Pagination;