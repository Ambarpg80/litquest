import React, {useState, useContext} from "react";
import { userContext } from "./context/UserProvider";

function SummaryEditForm({book, review, showEditForm, onUpdateReview}){
    const [sumEditError, setSumEditError] = useState("")
    const {currentUser} = useContext(userContext); 
    const [editReview, setEditReview] = useState({
           child_id: currentUser.id, 
           book_id: book.id,
           summary: review.summary, 
           rating: review.rating,
      });
      
       
       function handleChange(e){
        setEditReview({...editReview , 
                        [e.target.id]: e.target.value,});
       }
        
       const reviewInput ={child_id: currentUser.child_id, 
                         book_id: editReview.book_id ,
                         summary: editReview.summary ,
                         rating: editReview.rating ,
                         }
    
       function bookSubmission(e){
        e.preventDefault()
        fetch(`/reviews/${review.id}`,{
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewInput),
        })
        .then(res => {
            if(res.ok){
            res.json()
            .then(editBook =>  { onUpdateReview(editBook)   
                                 showEditForm()})
            }else{
            res.json().then(error => setSumEditError( error.errors.map(err => <li key={err}>{err}</li>) ) )
            }
        })                        
        }
    return(
       <div >
        <div className='form-container'>
            <form onSubmit={bookSubmission}>
                <label>Summary: 
                    <textarea type="text"
                            id="summary"
                            value={editReview.summary}
                            onChange={handleChange}></textarea>
                </label><br/>
                <label> Rating:
                    <input type="text"
                            id="rating"
                            value={editReview.rating}
                            onChange={handleChange}></input>
                </label><br/> 
                
            <button type="submit"> Submit Summary </button>
            </form>
            {sumEditError}
          </div>
       </div>
    )
}

export default SummaryEditForm;