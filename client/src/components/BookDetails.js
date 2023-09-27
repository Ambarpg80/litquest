import React from "react";

function BookDetails({book}){
    return(
       <div>
        {/* <div>{book.thumbnail_url}</div> */}
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
          <p>{book.genre}</p>
       </div>
    )
}

export default BookDetails;