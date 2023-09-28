import React from "react";
import BookDetails from "./BookDetails";

function BookList({bookData}){
    
    const displayedBooks = bookData.map(book =>  <div key={book.id}>  <BookDetails book={book}/>  </div> )
    
    return(
        <div>
        {displayedBooks}
        </div>
    )
}

export default BookList;