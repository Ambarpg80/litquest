import React from "react"
import ChildSummaryDetails from "./ChildSummaryDetail";

function ChildSummaries({ book, reviews, }){
   console.log(book)

    return(
        <div>
            <details  key={book.id}> 
              <summary> <b>Book:</b> {book.title} , <b>By:</b>  {book.author} </summary>
            {reviews.map(review => review.book_id === book.id ?
             <div key={review.id}>
              <ChildSummaryDetails review={review}/>
             </div> : null
            )}
            </details>
        </div>
    )
}

export default ChildSummaries;