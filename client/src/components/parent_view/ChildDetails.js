import React, { useState, useEffect, useContext } from "react";
import ChildSummaries from "./ChildSummaries" 
import { useParams } from "react-router-dom";

function ChildDetails({child, onRemoveChild}){
       // const [childBooks, setChildBooks] = useState([])
       console.log(child)
       // useEffect(()=>{
       //     fetch(`me/children/${child.id}`)
       //       .then(res=> res.json())
       //       .then(childUser=> setChildBooks(childUser.books))
       // },[])
   
   
      return(
       <div  >
           {/* { childBooks.map(book =>  <div key={book.id} className="book">  
             <ChildSummaries  book={book} reviews={book.reviews} /></div> )} */}
       </div>
       )
   }

export default ChildDetails;