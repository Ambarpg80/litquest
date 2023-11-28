import React, { useState, useEffect} from "react";
import ChildSummaries from "./ChildSummaries" 
import { useParams } from "react-router-dom";

function ChildDetails(){
  const [childUser, setChildUser] = useState([]);
  let params = useParams();
       
    useEffect(()=>{
      fetch(`/me/children/${params.id}`)
        .then(res=> res.json())
        .then(childUser=> setChildUser(childUser))
       },[])


      return(
      <div style={{marginTop:"5vh"}}>
        <h2>Books Read by {childUser.name} </h2>
        <div  style={{marginTop:"5vh"}}>
       
        {childUser.books?.map(book =>  
          <div key={book.id} className="book">  
             <ChildSummaries  child={childUser} book={book} />
          </div> )}
        </div>
      </div>
       )
   }

export default ChildDetails;