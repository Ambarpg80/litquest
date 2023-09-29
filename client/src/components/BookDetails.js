import React from "react";

function BookDetails({book}){
    return(
      <div className="single-book">
         <div>
            <button style={{float: "left", marginRight: "5px", marginBottom: "10px"}}>Delete Book</button>
            <button style={{float: "left", marginBottom: "10px"}}>Add Book</button> 
         </div>
         <div className="book-details">
            <div className="thumbnail" style={{border: "1px solid rgb(65, 78, 67)"}}>
               <img src={book.thumbnail_url} alt={book.title} ></img> 
               <span className="caption">{book.title}</span> 
            </div>
            <div style={{ width: "25%", marginLeft: "5%", marginRight: "2%"}}>
               <p><b>Title:</b> {book.title}</p>
               <p><b>Author:</b> {book.author}</p>
               <p><b>Publisher:</b> {book.publisher}</p>
               <p><b>Genre:</b> {book.genre}</p>
            </div>
            <div style={{width: "50%", marginRight: "1%", float: "right"}}>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>  
            </div>
         </div> 
      <button > Add Summary </button>
      </div>
    )
}

export default BookDetails;