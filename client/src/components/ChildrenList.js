import React from "react";   
import ChildDetails from "./ChildDetails";

function ChildrenList({children, onDeleteChild}){
  
  return(
    <div >
      {children.map(child=> <div key={child.name}> <ChildDetails child={child} onDeleteChild={onDeleteChild}/> </div> )}
    </div>
  )
}
export default ChildrenList;

