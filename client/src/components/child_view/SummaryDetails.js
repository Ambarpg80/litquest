import React, { useState} from "react";
import SummaryEditForm from "../forms/SummaryEditForm";


function SummaryDetails({review, book, onRemoveReview, onUpdateReview }){
   const[editForm, setEditForm] = useState(false)
   const buttonStyling = {  marginBottom: "10px",position: "relative", left:"22%"}

   function showEditForm(){
      setEditForm(!editForm)
   }

   function deleteReview(){
      fetch(`/reviews/${review.id}`,{
      method: "DELETE" })
      .then(onRemoveReview(review))
   } 
  
   return(
       <div >
          { editForm ? <SummaryEditForm book={book} review={review} showEditForm={showEditForm} onUpdateReview={onUpdateReview} /> :
          <div id="summary">
               <p> {review.summary}</p> 
               <p>Rating: {review.rating} out of 5</p>
         </div>
         }
         <div id="summaryButtons">
            <button onClick={showEditForm} type="button"> Edit Summary </button> 
            <button  onClick={deleteReview} type="button">Delete Summary</button>
         </div>
       </div>
    )
}
export default SummaryDetails;