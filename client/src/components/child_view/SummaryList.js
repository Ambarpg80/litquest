import React from "react";
import SummaryDetails from "./SummaryDetails";
// import { userContext } from "../context/UserProvider";

function SummaryList({book, onRemoveReview, onUpdateReview}){
    // const {currentUser} = useContext(userContext)

    return(
       <div>
        {book.reviews.map(review => 
        <div key={review.summary}> <SummaryDetails book={book} review={review} onRemoveReview={onRemoveReview} onUpdateReview={onUpdateReview}/>
        </div> )}
       </div>
    )
}

export default SummaryList;