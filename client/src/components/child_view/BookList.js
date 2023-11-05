import React, {useState, useContext} from "react";
import BookDetails from "./BookDetails";
import NewBookForm from "../forms/NewBookForm.js";
import { userContext } from "../context/UserProvider";
import NewSummaryForm from "../forms/NewSummaryForm";

function BookList({allBooks, onBookAdded,onAddReview, onUpdateReview, onRemoveReview}){
    const {kidsBooks} = useContext(userContext);
    const [showBookForm, setShowBookForm] = useState(false);
    const [showSummaryForm, setShowSummaryForm]= useState(false);
    const buttonStyle = { marginTop: "25px", marginBottom: "10px", marginRight: "10px"}
    

  function handleBookForm(){
    setShowBookForm(!showBookForm)
  }
  function handleSummaryForm(){
    setShowSummaryForm(!showSummaryForm)
  }
    
    return(
      <div>
        <button style={buttonStyle} onClick={handleBookForm}> Add A New Book </button> 
        <button style={buttonStyle} onClick={handleSummaryForm}> Add Summary </button> 
        {showBookForm  ?  <div><NewBookForm  onBookAdded={onBookAdded} handleBookForm={handleBookForm} /></div> : null} 
        {showSummaryForm ? 
          <>
            <div> 
              <NewSummaryForm allBooks={allBooks} 
                              onAddReview={onAddReview} 
                              handleShowSummaries={handleSummaryForm} /> 
            </div>
          </>
        : null}
           
          
     
       {kidsBooks.map(book => 
          <div key={book.id}> 
            <BookDetails onAddReview={onAddReview} 
                        onUpdateReview={onUpdateReview}
                        onRemoveReview={onRemoveReview}
                        book={book}
                        /> 
          </div>)}
      </div>
    )
}

export default BookList;
                                     