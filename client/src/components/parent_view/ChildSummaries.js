import React from "react"
import ChildSummaryDetails from "./ChildSummaryDetail";

function ChildSummaries({child,  book }){

    return(
        <div>
            <details  key={book.id}> 
              <summary> <b>Book:</b> {book.title} , <b>By:</b>  {book.author} </summary>
            {book.reviews.map(review => review.child_id === child.id ?
             <div key={review.id}>
              <ChildSummaryDetails review={review}/>
             </div> : null
            )}
            </details>
        </div>
    )
}

export default ChildSummaries;