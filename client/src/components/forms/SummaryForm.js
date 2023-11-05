import React, {useState, useContext} from "react";
import { userContext } from "../context/UserProvider";

//FORM UNDER EACH BOOK
function SummaryForm({book, onAddReview}){
    const [summaryError, setSummaryError] = useState("")
    const {currentUser} = useContext(userContext); 
    const [newReview, setNewReview] = useState({
           child_id: currentUser.id, 
           book_id: book.id,
           summary: "", 
           rating: "",
      });
      
       
       function handleChange(e){
        setNewReview({...newReview , 
                        [e.target.id]: e.target.value,});
       }
        
       const reviewInput ={child_id: newReview.child_id, 
                         book_id: newReview.book_id ,
                         summary: newReview.summary ,
                         rating: newReview.rating ,
                         }
    
       function reviewSubmission(e){
        e.preventDefault()
        fetch(`/reviews`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewInput),
        })
        .then(res => {
            if(res.ok){
            res.json().then(newAddedReview =>  { onAddReview(newAddedReview)   
                                                 setNewReview({summary: "" ,
                                                               rating: "" }) 
                                                })
            }else{
            res.json().then(error => setSummaryError( error.errors.map(err => <li key={err}>{err}</li>)) )
          }  
        })                        
        }
    return(
       <div >
        
        <div className='form-container'>
            <form onSubmit={reviewSubmission}>
                <label>Summary: 
                    <textarea type="text"
                            id="summary"
                            value={newReview.summary}
                            onChange={handleChange}></textarea>
                </label><br/>
                <label> Rating:
                    <input type="text"
                            id="rating"
                            placeholder="From 1 to 5"
                            value={newReview.rating}
                            onChange={handleChange}></input>
                </label><br/> 
            <button type="submit"> Submit Summary </button>
            </form>
            {summaryError}
          </div>
       </div>
    )
}

export default SummaryForm;