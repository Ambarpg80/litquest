import React, {useContext, useState, useEffect} from "react";
import ChildrenList from "./ChildrenList";
import SignUpForm from "./sessions/SignUpForm";
import { userContext } from "./context/UserProvider";

function ParentPage(){ //parents will only be able to read child content
    const [childSignUp, setChildSignUp] = useState(false)
    const {currentUser} = useContext(userContext)
   const[children, setChildren]= useState([])
    
    function signUpChild(){setChildSignUp(!childSignUp) }
    
useEffect(()=>{
    fetch("/me/children")
    .then(res => res.json())
    .then(kids => setChildren(kids))},[])
   

return(
    <div >
          <button onClick={signUpChild}>Add a Child</button>
            {/* <button onClick={removeChild}>Remove a Child</button> */}
                {childSignUp ? <div> <SignUpForm parentId={currentUser.id} onshowSignUp={signUpChild} /> </div>: null}
        <div>
            <h3>Children</h3>
            <div> 
                <div > 
                    {<ChildrenList children={children} /> }
                </div>
            </div> 
          
        </div>
       
        
    </div>
    )
  
}
export default ParentPage;