import React from "react";
import SummaryDetails from "../summaries/SummaryDetails";

function SummaryList({book, onUpdateReview, onRemoveReview}){
    
    return(
       <div>
        {book.reviews.map(review => 
        <div key={review.id}> <SummaryDetails book={book} review={review} onUpdateReview={onUpdateReview} onRemoveReview={onRemoveReview}/>
        </div> )}
       </div>
    )
}

export default SummaryList;