import React, { useContext } from "react";
import ChildSummaries from "./ChildSummaries";
import { userContext } from "../context/UserProvider";


function ChildDetails({child}){
    const {handleDeletedChild} = useContext(userContext);
    const {books, name, reviews, rewards} = child
    
    console.log(child)
  

  function removeChild(){
    fetch(`/children/${child.id}`,{
      method: "DELETE"
    })
    .then(handleDeletedChild(child))
    }

     return(
    <div className="whole-child">
      <img alt="child avatar" className="avatar" src={child.image_url ? child.image_url : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}></img> 
      <h2>{name} , {child.age}</h2>
        <div  >
          { books.map(book =>  <div key={book.id} className="book"> 
          <ChildSummaries child={child} book={book} reviews={reviews} rewards={rewards}/></div> )}
        </div>
        <button style={{marginBottom: "15px" }} onClick={removeChild}> Remove Child</button>
      </div>
    )
}
export default ChildDetails;