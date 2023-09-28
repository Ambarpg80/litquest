import '../App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import NavBar from './NavBar';

function App() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then(res => res.json())
      .then(books => setBookData(books))
  }, []);
  
  

  return (
    <div className="App">
       {/* <UserProvider> */}
      <nav className="App-header"> <NavBar/> </nav> 
        <Routes> 
          <Route path="/" element={ <BookList bookData={bookData}/> } />
          
        </Routes>
        <BookList bookData={bookData} />
      {/* </UserProvider>  */}
    </div>
  );
}

export default App;
