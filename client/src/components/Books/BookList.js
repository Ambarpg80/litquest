import React, {useState} from "react";
import BookDetails from "./BookDetails";
import NewBookForm from "./NewBookForm";

function BookList({bookData, onDelete, onAddBook, onBookUpdate}){
    const [showForm, setShowForm] = useState(false);
    const buttonStyle = { marginTop: "25px", marginBottom: "10px"}
    
    function handleShowForm(){
        setShowForm(!showForm)
    }

    const displayedBooks = bookData.map(book =>  <div key={book.id} >  <BookDetails book={book} onBookUpdate={onBookUpdate} onDelete={onDelete}/>  </div> )
    
    return(
        <div>
        <button style={buttonStyle} onClick={handleShowForm}> Add Book </button> 
        {showForm ? <NewBookForm onAddBook={onAddBook} handleShowForm={handleShowForm} /> : null} 
        {displayedBooks}
        </div>
    )
}

export default BookList;