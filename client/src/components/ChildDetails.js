import React from "react";
import ChildSummaries from "./ChildSummaries";

function ChildDetails({child, onDeleteChild}){
    const {books, name, reviews, user_profile, rewards} = child
    
    
  

  function removeChild(){
    fetch(`/children/${child.id}`,{
      method: "DELETE"
    })
    .then(onDeleteChild(child))
    }

     return(
    <div className="whole-child">
      <img alt="placeholder" className="avatar" src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}></img> 
      <h2>{name} , {user_profile.age}</h2>
        <div  >
          { books.map(book =>  <div key={book.id} className="book"> 
          <ChildSummaries child={child} book={book} reviews={reviews} rewards={rewards}/></div> )}
        </div>
        <button style={{marginBottom: "15px" }} onClick={removeChild}> Remove Child</button>
      </div>
    )
}
export default ChildDetails;