import React from "react";

function BookDetails({book}){
 const buttonStyling = {float: "left", marginRight: "5px", marginBottom: "10px"}

    return(
      <div className="single-book">
         <div>
            <button style={buttonStyling}> Delete Book </button>
            <button style={buttonStyling}> Add Book </button> 
            <button style={buttonStyling}> Edit Book </button> 
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
               <p>{book.preview}</p>
            </div>
         </div> 
      <button > Add Summary </button>
      </div>
    )
}

export default BookDetails;