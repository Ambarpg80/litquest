import React from "react";
import { useNavigate } from "react-router-dom";


function ChildrenList({child, onRemoveChild}){
  const navigate = useNavigate("");
  const btnStyle= {marginTop: "3px", marginBottom: "5px", marginRight:"10px" }
 

 function removeChild(){
   fetch(`/children/${child.id}`,{
     method: "DELETE"
   })
   .then(onRemoveChild(child))
 }


 function handleChild(){
   navigate(`/me/children/${child.id}`)
 }

 return(
   <div className="card" > {/* child card */}
     <img alt="child avatar" className="avatar" src={child.image_url ? child.image_url : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}></img> <br/>
     <div className="card-container">
       <h2>{child.name} , {child.age}</h2>
       <button style={btnStyle} value={child.id} onClick={handleChild}> Child Progress Details</button>
       <button style={btnStyle} onClick={removeChild}> Remove Child</button>
     </div>
   </div>
   
)
}
export default ChildrenList;

