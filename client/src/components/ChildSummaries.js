import React from "react"

function ChildSummaries({ book, reviews, }){
   

    return(
        <div>
            <details  key={book.id}> 
              <summary> <b>Book:</b> {book.title} , <b>By:</b>  {book.author} </summary>
            {reviews.map(review => 
             <div key={review.id}>
               <p  style={{alignText: "left"}}>
                <b>Summary: </b> {review.summary} <br/>
                <b>Rating: </b> {review.rating} out of 5
               </p> <br/>
             </div>
            )}
            </details>
        </div>
    )
}

export default ChildSummaries;