import '../App.css';
import React, { useEffect, useState } from 'react';
import {  Routes, Route } from "react-router-dom";
import BookList from './Books/BookList';
import NavBar from './NavBar';
import Home from './Home'

function App() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then(res => res.json())
      .then(books => setBookData(books))
  }, []);
   
  function handleBookAdded(addedBook){
   setBookData([...bookData, addedBook])
  }

  function handleBookUpdate(updatedBook){
    const updatedBookList = bookData.map(book => book.id === updatedBook.id ? updatedBook : book)
    setBookData(updatedBookList)
  }

  function handleBookRemoval(deletedBook){
    const filteredBookData = bookData.filter(book => book.id !== deletedBook.id ? book : null)
    setBookData(filteredBookData)
  }

  return (
    <div className="App">
       {/* <UserProvider> */}<nav className="App-header"> <NavBar/> </nav> 
        <Routes>
        
        <Route path="/books" element={ 
          <BookList bookData={bookData} 
                    onDelete={handleBookRemoval} 
                    onAddBook={handleBookAdded}
                    onBookUpdate={handleBookUpdate}
          /> } 
        />
        <Route exact path="/" element={ <Home/> } /> 
        <Route path="*" element={ <Home/> } /> 
        
      </Routes>
       
      {/* </UserProvider>  */}
    </div>
  );
}

export default App;
