import React from "react";
import BookList from "./books/BookList";
function ChildDetails({child}){
    console.log(child)
    const {books, name, reviews, user_profile, rewards} = child
    

     return(
    <div >
        <h2>{name} , {user_profile.age}</h2>
        <ul style={{listStyleType: "none"}}>
          {books.map(book => 
          <div key={book.id}>
            <li>Title: {book.title}, Author: {book.author} </li>
           {reviews.map(review => <ul  style={{listStyleType: "none"}}>   Reviews:
                <li key={review.id}> {review.summary} </li>
                <li> {review.rating} out of 5</li>
            </ul>)}
          </div> )}
        </ul>
        <li style={{listStyleType: "none"}}> Reward: {rewards}</li>
        
     </div>
    )
}
export default ChildDetails;