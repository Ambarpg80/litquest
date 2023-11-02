import React, { useState} from "react";
import ChildrenList from "./ChildrenList";
import ChildSignupForm from "../sessions/ChildSignupForm";

function ParentPage(){ //parents will only be able to read child content
    const [showForm, setShowForm] = useState(false)
     function handleChildForm(){setShowForm(!showForm) }
    
   
  return(
    <div >
        <p> Click on the button to add your child below </p>
          <button onClick={handleChildForm} style={{marginBottom: "15px"}}>Add a Child</button>
                {showForm ? <div> <ChildSignupForm  onShowSignUp={handleChildForm} />  </div>: null}
        <div>
            <h3>Children</h3>
            <div> 
                <div > 
                    {<ChildrenList  /> }
                </div>
            </div> 
          
        </div>
       
        
    </div>
    )
  
}
export default ParentPage;