import React, { useState, useEffect} from "react";
import ChildSignupForm from "../sessions/ChildSignupForm";
import ChildrenList from "./ChildrenList";


function ParentPage(){ //parents will only be able to read child content
    const [showForm, setShowForm] = useState(false)
    const [kids, setKids] = useState([]);
    


    useEffect(()=>{
      fetch(`/me/children`)
        .then(res => res.json())
        .then(children => setKids(children))
    },[]) 

    function addChild(newChild){
      setKids([...kids, newChild])  
    }
          
    function handleDeletedChild(deletedChild){
      const filteredChildren = kids.filter(child => child.id !== deletedChild.id)
      setKids(filteredChildren)
    } 

    function handleChildForm(){
      setShowForm(!showForm) 
    }
    

  return(
    <div >
        <p> Click on the button to add your child below </p>
          <button onClick={handleChildForm} style={{marginBottom: "15px"}}>Add a Child</button>
                {showForm ? <div> <ChildSignupForm  onShowSignUp={handleChildForm} onAddChild={addChild} />  </div>: null}
        <div>
            <h3>Children</h3>
            <div> 
              {kids.map(child=> 
                <div key={child.id}>  
                  <ChildrenList child={child} onRemoveChild={handleDeletedChild} />
                </div> 
               
               )}
            </div> 
          
        </div>
       
        
    </div>
    )
  
}
export default ParentPage;