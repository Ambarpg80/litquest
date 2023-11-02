import '../App.css';
import React, {useState, useEffect, useContext } from 'react';
import {  Routes, Route} from "react-router-dom";
import { userContext } from './context/UserProvider';
import LoginForm from './sessions/LoginForm';
import SignUpForm from './sessions/SignUpForm';
import NavBar from './NavBar';
import Home from './Home'
import BookList from './child_view/BookList.js';
import ParentPage from './parent_view/ParentPage';


function App() { 
  const {kidsBooks, setKidsBooks} = useContext(userContext);
  const [allBooks, setAllBooks] = useState([]);

  
useEffect(() => {
  fetch(`/books`)
    .then(res => res.json())
    .then(books => setAllBooks(books))
}, []);

function handleBookAdded(addedBook){
  const addedBookList = [...allBooks, addedBook]
setAllBooks(addedBookList)
setKidsBooks([...kidsBooks, addedBook])
}
console.log(kidsBooks)
// function handleBookRemoval(deletedBook){
//   const filteredkidsBooks = kidsBooks.filter(book => book.id !== deletedBook.id ? book : null)
//   setAllBooks(filteredkidsBooks)
// }

function addReview(addedReview){
  const oneBook = allBooks.find(book => book.id === addedReview.book_id) //find single book to add review
  const newReviewArray = [...oneBook.reviews, addedReview] //copy book.reviews array and add new review
  const bookWithNewRev= {...oneBook, reviews: newReviewArray}//add new reviews array to single book object
  const newBooksList = allBooks.map(bk => bk.id === bookWithNewRev.id ? bookWithNewRev :  bk)//map through books data and return either a book or the book with added review that matches the 
  const newKidsList = kidsBooks.map(bk => bk.id === bookWithNewRev.id ? bookWithNewRev :  bk)
  setAllBooks(newBooksList)
  setKidsBooks(newKidsList)
}

function updateReview(updatedReview){
  const oneBook = allBooks.find(book => book.id === updatedReview.book_id)
  const updatedReviews = oneBook.reviews.map(review => review.id === updatedReview.id ? updatedReview : review)
  const updatedBook = {...oneBook, reviews: updatedReviews}
  const updatedArray = allBooks.map(bk => bk.id === updatedBook.id ? updatedBook : bk)
  const updatedKidsList = kidsBooks.map(bk => bk.id === updatedBook.id ? updatedBook :  bk)
  setAllBooks(updatedArray)
  setKidsBooks(updatedKidsList)
}

function removeReview(deletedReview){
  const oneBook = allBooks.find(book => book.id === deletedReview.book_id) 
  const filteredReviews = oneBook.reviews.filter(r => r.id !== deletedReview.id ? r : null)
  const filteredBook = {...oneBook, reviews: filteredReviews}
  const newFilteredList = allBooks.map(bk=> bk.id === filteredBook.id ? filteredBook : bk)
  const filteredKidsList = kidsBooks.map(bk => bk.id === filteredBook.id ? filteredBook :  bk)
  setAllBooks(newFilteredList)
  setKidsBooks(filteredKidsList)
}

  return (
    <div className="App">
      <nav className="App-header"> <NavBar/> </nav>
        <Routes>
            <Route exact path="/" element={ <Home/> } /> 
            <Route path="/my_books" element={<BookList 
                                                       allBooks={allBooks} 
                                                       onAddReview={addReview} 
                                                       onUpdateReview={updateReview}
                                                       onRemoveReview={removeReview}
                                                       onBookAdded={handleBookAdded}
                                            />}   
            />
            <Route path="/me/children" element={<ParentPage />} />
            <Route path="/login" element= {<LoginForm/>} />
            <Route path="/logout" />
            <Route path= "/signup" element= {<SignUpForm/>} />
            <Route path="*" element={ <Home/> } /> 
          
          </Routes>
    </div>
  );
}

export default App;
