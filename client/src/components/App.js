import '../App.css';
import React, { useEffect,  useState, useContext } from 'react';
import {  Routes, Route } from "react-router-dom";
import { UserProvider, userContext } from './context/UserProvider';
import LoginForm from './sessions/LoginForm';
import SignUpForm from './sessions/SignUpForm';
import NavBar from './NavBar';
import Home from './Home'
import BookList from './books/BookList';
import ParentPage from './ParentPage';


function App() {
  const [bookData, setBookData] = useState([]);
  // const {currentUser, addingBook} = useContext(userContext);
  
  useEffect(() => {
    fetch("/books")
      .then(res => res.json())
      .then(books => setBookData(books))
  }, []);

  //  console.log(bookData)// 
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

  return (
    <div className="App">
       <UserProvider>
        <nav className="App-header"> <NavBar/> </nav>
        
          <Routes>
            <Route exact path="/" element={ <Home/> } /> 
            <Route path="/my_books" element={<BookList bookData={bookData}
                                                    setBookData={setBookData}
                                                    onAddReview={addReview}
                                                    onRemoveReview={removeReview} 
                                                    onUpdateReview={updateReview}
                                                    onDelete={ handleBookRemoval}
                                                    onAddBook={handleBookAdded}
                                                    
                                          />} 
            />
            <Route path="/dashboard" element={<ParentPage />} />
            <Route path="/login" element= {<LoginForm/>} />
            <Route path="/logout" />
            <Route path= "/signup" element= {<SignUpForm/>} />
            <Route path="*" element={ <Home/> } /> 
          
          </Routes>
       
      </UserProvider> 
    </div>
  );
}

export default App;
