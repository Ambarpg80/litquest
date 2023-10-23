import React, {useState, useEffect} from "react";
import BookDetails from "./BookDetails";
import NewBookForm from "./NewBookForm";

function BookList(){
    const [bookData, setBookData] = useState([]);
    const [showBookForm, setShowBookForm] = useState(false);
    const buttonStyle = { marginTop: "25px", marginBottom: "10px"}
    
  useEffect(() => {
    fetch(`/me/books`)
      .then(res => res.json())
      .then(books => setBookData(books))
  }, []);

  function handleBookAdded(addedBook){
  setBookData([...bookData, addedBook])
  }
  
  function handleBookRemoval(deletedBook){
    const filteredBookData = bookData.filter(book => book.id !== deletedBook.id ? book : null)
    setBookData(filteredBookData)
  }

  function addReview(addedReview){
    const oneBook = bookData.find(book => book.id === addedReview.book_id) //find single book to add review
    const newReviewArray = [...oneBook.reviews, addedReview] //copy book.reviews array and add new review
    const bookWithNewRev= {...oneBook, reviews: newReviewArray}//add new reviews array to single book object
    const newBooksList = bookData.map(bk => bk.id === bookWithNewRev.id ? bookWithNewRev :  bk)//map through books data and return either a book or the book with added review that matches the 
    setBookData(newBooksList)
  }

  function updateReview(updatedReview){
    const oneBook = bookData.find(book => book.id === updatedReview.book_id)
    const updatedReviews = oneBook.reviews.map(review => review.id === updatedReview.id ? updatedReview : review)
    const updatedBook = {...oneBook, reviews: updatedReviews}
    const updatedArray = bookData.map(bk => bk.id === updatedBook.id ? updatedBook : bk)
    setBookData(updatedArray)
  }

  function removeReview(deletedReview){
    const oneBook = bookData.find(book => book.id === deletedReview.book_id) 
    const filteredReviews = oneBook.reviews.filter(r => r.id !== deletedReview.id ? r : null)
    const filteredBook = {...oneBook, reviews: filteredReviews}
    const newFilteredList = bookData.map(bk=> bk.id === filteredBook.id ? filteredBook : bk)
    setBookData(newFilteredList)
  }

  function handleBookForm(){
    setShowBookForm(!showBookForm)
  }
    
    return(
      <div>
        <button style={buttonStyle} onClick={handleBookForm}> Add Book </button> 
        {showBookForm ? <NewBookForm onAddBook={handleBookAdded} handleBookForm={handleBookForm} /> : null} 
       {bookData.map(book =>  <div key={book.id}> <BookDetails book={book}
                                                               setBookData={setBookData}
                                                               onAddReview={addReview}
                                                               onRemoveReview={removeReview} 
                                                               onUpdateReview={updateReview}
                                                               onDelete={ handleBookRemoval}
                                                               onAddBook={handleBookAdded}
                                                    />
                              </div> )
        }
      </div>
    )
}

export default BookList;
                                     