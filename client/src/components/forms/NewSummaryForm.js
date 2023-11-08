import React, {useState, useContext} from "react";
import { userContext } from "../context/UserProvider";

//FORM AT TOP OF PAGE
function NewSummaryForm({ allBooks, handleShowSummaries, addNewReview}){
    const [newSummaryError, setNewSummaryError] = useState("")
    const {currentUser} = useContext(userContext); 
    const [newReview, setNewReview] = useState({
           child_id: currentUser.id, 
           book_id: 1,
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
            res.json().then(newReview =>  { addNewReview(newReview)   
                                            handleShowSummaries() })
            }else{
            res.json().then(error => setNewSummaryError( error.errors.map(err => <ul key={err}>{err.map(er=><li key={er}>{er}</li>)}</ul>) ) )
            }
        })                        
        }
    return(
       <div >
        
        <div className='form-container'>
          <form onSubmit={reviewSubmission}>
          <p style={{textAlign: "center"}}> If your book is not part of our list, Click on <i>Add a New Book </i>to our list. </p>
           <label> Select A Book : 
            <select style={{marginLeft:"10px"}} onChange={handleChange} id="book_id"  value={newReview.book_id}>
                {allBooks.map(sumBk=> 
                    <option onChange={handleChange}
                            key={sumBk.id} 
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
                    <input type="number"
                            id="rating"
                            placeholder="From 1 to 5"
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