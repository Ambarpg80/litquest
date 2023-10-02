import '../App.css';
import React, { useEffect, useState } from 'react';
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
       {/* <UserProvider> */}
      <Home bookData={bookData} 
            onDelete={handleBookRemoval} 
            onAddBook={handleBookAdded}
            onBookUpdate={handleBookUpdate}
      /> 
       
      {/* </UserProvider>  */}
    </div>
  );
}

export default App;
