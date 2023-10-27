import React from "react"
import ChildSummaryDetails from "./ChildSummaryDetail";

function ChildSummaries({ book }){
   

    return(
        <div  className="book">
          <details > 
            <summary> <b>Book:</b> {book.title} , <b>By:</b>  {book.author} </summary> 
              {book.reviews.map(review => 
            <div >
              <ChildSummaryDetails review={review}/>
            </div> 
            )}
          </details>
          
        </div>
    )
}

export default ChildSummaries;