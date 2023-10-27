import React from "react";
import ChildSummaries from "./ChildSummaries";
// import { useNavigate } from "react-router-dom";
f
function ChildDetails({child, onDeleteChild}){
    const {books, name, user_profile} = child
    // const navigate = useNavigate("")
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
      <div>
        {books.map(book =>  
          <div key={book.id}> <ChildSummaries child={child} book={book}/> </div>
        )}
      </div> 
      <button style={{marginBottom: "15px" }} onClick={removeChild}> Remove Child</button>
      </div>
    )
}
export default ChildDetails;
// onClick={()=>{navigate(`/children/${child.id}/books`)}}