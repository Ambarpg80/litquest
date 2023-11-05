import React from "react";
import SummaryDetails from "./SummaryDetails";

function SummaryList({book, onRemoveReview, onUpdateReview}){

    return(
       <div>
        {book.reviews.map(review => 
        <div key={review.summary}>
             <SummaryDetails book={book} review={review} onRemoveReview={onRemoveReview} onUpdateReview={onUpdateReview}/>
        </div> )}
       </div>
    )
}

export default SummaryList;