import React, { useContext } from "react";
import SummaryDetails from "./SummaryDetails";
import { userContext } from "../context/UserProvider";

function SummaryList({book, onRemoveReview, onUpdateReview}){
const {currentUser} = useContext(userContext);

    return(
       <div>
        {book.reviews.map(review => review.child_id === currentUser.id ?
        <div key={review.summary}> 
             <SummaryDetails book={book} review={review} onRemoveReview={onRemoveReview} onUpdateReview={onUpdateReview}/>
        </div> : null )}
       </div>
    )
}

export default SummaryList;