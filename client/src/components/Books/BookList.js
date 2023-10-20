import React, {useState} from "react";
import BookDetails from "./BookDetails";
import NewBookForm from "./NewBookForm";


function BookList({bookData, onDelete, onAddBook, onAddReview,onRemoveReview ,onUpdateReview}){
    
    const [showBookForm, setShowBookForm] = useState(false);
    const buttonStyle = { marginTop: "25px", marginBottom: "10px"}
    
    function handleBookForm(){
        setShowBookForm(!showBookForm)
    }

    const displayedBooks = bookData.map(book =>  
    <div key={book.id}> <BookDetails book={book} 
                                     onDelete={onDelete} 
                                     onAddReview={onAddReview} 
                                     onRemoveReview={onRemoveReview} 
                                     onUpdateReview={onUpdateReview}
                        /> 
    </div> )
    
    return(
        <div>
        <button style={buttonStyle} onClick={handleBookForm}> Add Book </button> 
        {showBookForm ? <NewBookForm onAddBook={onAddBook} handleBookForm={handleBookForm} /> : null} 
        {displayedBooks}
        </div>
    )
}

export default BookList;