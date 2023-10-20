import React, {useState} from "react";
import SummaryEditForm from "./SummaryEditForm";

function SummaryDetails({review, book, onUpdateReview, onRemoveReview }){
const[editForm, setEditForm] = useState(false)
const buttonStyling = { marginRight: "5px", marginBottom: "10px"}

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
          { editForm ? <SummaryEditForm book={book} review={review} showEditForm={showEditForm} onUpdateReview={onUpdateReview}/> :
          <div>
          <p>Summary: {review.summary}</p> 
          <p>Rating: {review.rating} out of 5</p>
         </div>
         }
          <button onClick={showEditForm} 
                    style={buttonStyling} 
                    type="button"> Edit Summary 
            </button> 
           
          <button onClick={deleteReview}>Delete Summary</button>
        
       </div>
    )
}
export default SummaryDetails;