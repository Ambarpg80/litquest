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
       <div style={{position: "relative", left:"30%"}}>
          { editForm ? <SummaryEditForm book={book} review={review} showEditForm={showEditForm} onUpdateReview={onUpdateReview} /> :
          <div>
            <h5>Summaries</h5>
          <p>Summary: {review.summary}</p> 
          <p>Rating: {review.rating} out of 5</p>
         </div>
         }
          <button onClick={showEditForm} 
                    style={buttonStyling} 
                    type="button"> Edit Summary 
            </button> 
           
          <button style={{position: "relative"}} onClick={deleteReview}>Delete Summary</button>
        
       </div>
    )
}
export default SummaryDetails;