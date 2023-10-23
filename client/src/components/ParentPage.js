import React, {useContext, useState, useEffect} from "react";
import ChildrenList from "./ChildrenList";
import { userContext } from "./context/UserProvider";
import ChildSignupForm from "./sessions/ChildSignupForm";

function ParentPage(){ //parents will only be able to read child content
    const [showForm, setShowForm] = useState(false)
    const {currentUser} = useContext(userContext)
   const[children, setChildren]= useState([])
    
   
    useEffect(()=>{
        fetch("/me/children")
        .then(res => res.json())
        .then(kids => setChildren(kids))
        },
    [])
   
 function handleChildForm(){setShowForm(!showForm) }

    function addChild(newChild){
      setChildren([...children, newChild])  
    }

    function handleDeletedChild(deletedChild){
      const filteredChildren = children.filter(child => child.id !== deletedChild.id)
      setChildren(filteredChildren)
    }


return(
    <div >
          <button onClick={handleChildForm}>Add a Child</button>
                {showForm ? <div> <ChildSignupForm parentId={currentUser.id} onShowSignUp={handleChildForm} onChildSignup={addChild} /> </div>: null}
        <div>
            <h3>Children</h3>
            <div> 
                <div > 
                    {<ChildrenList children={children} onDeleteChild={handleDeletedChild} /> }
                </div>
            </div> 
          
        </div>
       
        
    </div>
    )
  
}
export default ParentPage;