import React from "react";   
import ChildDetails from "./ChildDetails";

function ChildrenList({children}){
   
  const childrensList = children.map(child=> <div key={child.name}><ChildDetails child={child}/></div>)
     return(
    <div >
      
       {childrensList}

     </div>
     )//
}
export default ChildrenList;

