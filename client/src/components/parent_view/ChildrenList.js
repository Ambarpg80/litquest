import React, {useContext} from "react";   
import ChildDetails from "./ChildDetails";
import { userContext } from "../context/UserProvider";

function ChildrenList(){
  const {kids} = useContext(userContext);
  return(
    <div >
      {kids.map(child=> <div key={child.name}> <ChildDetails child={child} /> </div> )}
    </div>
  )
}
export default ChildrenList;

