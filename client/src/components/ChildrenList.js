import React, {useContext} from "react";   
import ChildDetails from "./ChildDetails";
import { userContext } from "./context/UserProvider";

function ChildrenList({showChildren}){
  const {currentUser} = useContext(userContext)
  console.log(showChildren)
     return(
    <div >
      
       {showChildren.map(child=> <div key={child.name}><ChildDetails child={child}/></div>)}

     </div>
     )//
}
export default ChildrenList;

