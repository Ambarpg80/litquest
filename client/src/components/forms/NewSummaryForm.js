import React, {useState, useContext} from "react";
import { userContext } from "../context/UserProvider";

function NewSummaryForm({ allBooks, handleShowSummaries, onAddReview}){
    const [newSummaryError, setNewSummaryError] = useState("")
    const {currentUser} = useContext(userContext); 
    const [newReview, setNewReview] = useState({
           child_id: currentUser.id, 
           book_id: 0,
           summary: "", 
           rating: 0,
      });
      
       
       function handleChange(e){
        // console.log(e.target.id, e.target.value)
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
            res.json().then(newReview =>  { onAddReview(newReview)   
                                            handleShowSummaries() })
            }else{
            res.json().then(error => setNewSummaryError( error.errors.map(err => <li key={err}>{err}</li>) ) )
            }
        })                        
        }
    return(
       <div >
        
        <div className='form-container'>
          <form onSubmit={reviewSubmission}>
           <label> Select A Book : 
            <select style={{marginLeft:"10px"}} onChange={handleChange} id="book_id" value={newReview.book_id}>
                {allBooks.map(sumBk=> 
                    <option key={sumBk.id} 
                            id="book_id"
                            value={sumBk.id}> {sumBk.title}, by {sumBk.author}
                    </option>)}
              </select>
            </label><br/>
                <label>Summary: 
                    <textarea type="text"
                            id="summary"
                            value={newReview.summary}
                            onChange={handleChange}></textarea>
                </label><br/>
                <label> Rating:
                    <input type="text"
                            id="rating"
                            value={newReview.rating}
                            onChange={handleChange}></input>
                </label><br/> 
            <button type="submit"> Submit Summary </button>
            </form>
            {newSummaryError}
          </div>
       </div>
    )
}

export default NewSummaryForm;