import React from "react";
import BookDetails from "./BookDetails";

function BookList({bookData}){
    console.log(bookData)

    return(
        <div>
        {bookData.map(book =>  <div key={book.id}>  <BookDetails book={book}/>  </div> )}
        </div>
    )
}

export default BookList;