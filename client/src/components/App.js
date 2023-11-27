import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  React from 'react';
import {useState, useEffect, useContext } from 'react';
import {  Routes, Route} from "react-router-dom";
import { userContext } from './context/UserProvider';
import LoginForm from './sessions/LoginForm';
import SignUpForm from './sessions/SignUpForm';
import NavBar from './NavBar';
import Home from './Home'
import BookList from './child_view/BookList.js';
import ParentPage from './parent_view/ParentPage';
import ChildDetails from './parent_view/ChildDetails';


function App() { 
  const {currentUser, kidsBooks, setKidsBooks, kidsBookChange} = useContext(userContext);
  const [allBooks, setAllBooks] = useState([]);
  
useEffect(() => {
  fetch(`/books`)
    .then(res => res.json())
    .then(books => setAllBooks(books))
}, []);

function handleBookAdded(addedBook){
setAllBooks([...allBooks, addedBook])
setKidsBooks([...kidsBooks, addedBook])
}

function handleBookRemoval(deletedBook){
  const filteredkidsBooks = kidsBooks.filter(book => book.id !== deletedBook.id ? book : null)
  setKidsBooks(filteredkidsBooks)
}

function addReviewtoBook(addedReview){
  const oneBook = allBooks.find(book => book.id === addedReview.book_id) //find single book to add review
  const newReviewArray = [...oneBook.reviews, addedReview] //copy book.reviews array and add new review
  const bookWithNewRev= {...oneBook, reviews: newReviewArray}//add new reviews array to single book object
  const newBooksList = allBooks.map(bk => bk.id === bookWithNewRev.id ? bookWithNewRev :  bk)//map through books data and return either a book or the book with added review that matches the 
  setAllBooks(newBooksList)
  kidsBookChange(bookWithNewRev)
  }
  
  function addNewReview(addedReview){
    const oneBook = allBooks.find(book => book.id === addedReview.book_id) //find single book to add review
    const newReviewArray = [...oneBook.reviews, addedReview] //copy book.reviews array and add new review
    const bookWithNewRev= {...oneBook, reviews: newReviewArray}//add new reviews array to single book object
    const newList = allBooks.map(bk => bk.id === bookWithNewRev.id ? bookWithNewRev :  bk)
    setAllBooks(newList)
    setKidsBooks([...kidsBooks,bookWithNewRev])
  }

function updateReview(updatedReview){
  const oneBook = allBooks.find(book => book.id === updatedReview.book_id)
  const updatedReviews = oneBook.reviews.map(review => review.id === updatedReview.id ? updatedReview : review)
  const updatedBook = {...oneBook, reviews: updatedReviews}
  const updatedArray = allBooks.map(bk => bk.id === updatedBook.id ? updatedBook : bk)
  setAllBooks(updatedArray)
  kidsBookChange(updatedBook)
}

function removeReview(deletedReview){
  const oneBook = kidsBooks.find(book => book.id === deletedReview.book_id) 
  const filteredReviews = oneBook.reviews.filter(r => r.id !== deletedReview.id ? r : null)
  const filteredBook = {...oneBook, reviews: filteredReviews}
  const newFilteredList = allBooks.map(bk=> bk.id === filteredBook.id ? filteredBook : bk)
  const filteredBookReviews= filteredBook.reviews.map(r=> r.child_id)
   if (filteredBookReviews.includes(currentUser.id)){
    setAllBooks(newFilteredList)
    kidsBookChange(filteredBook) 
  }else{
     handleBookRemoval(filteredBook)
  }
}

  return (
    <div style={{fontFamily: 'Acme, sans-serif'}} >
      <nav className="App-header"> <NavBar />  </nav>
        <Routes>
            <Route exact path="/" element={ <Home/> } /> 
            <Route path="/my_books" element={<BookList allBooks={allBooks} 
                                                       addNewReview={addNewReview}
                                                       onAddReview={addReviewtoBook} 
                                                       onUpdateReview={updateReview}
                                                       onRemoveReview={removeReview}
                                                       onBookAdded={handleBookAdded}
                                            />}   
            />
            <Route path="/me/children" element={ <ParentPage /> } />
            <Route path="/me/children/:id" element={<ChildDetails /> } />
            <Route path="/login" element={ <LoginForm/> } />
            <Route path="/logout" />
            <Route path= "/signup" element={ <SignUpForm/> } />
            <Route path="*" element={ <Home/> } /> 
          
          </Routes>
    </div>
  );
}

export default App;
