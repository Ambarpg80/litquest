import '../App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import NavBar from './NavBar';

function App() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("/")
      .then(res => console.log(res.json()))
      .then(books => setBookData(books));
  }, []);
  console.log(bookData)
  

  return (
    <div className="App">
       {/* <UserProvider> */}
      <nav className="App-header">  <NavBar/> </nav> 
        <Routes> 
          <Route path="/" element={ <BookList bookData={bookData}/> } />
          
        </Routes>
     
      {/* </UserProvider>  */}
    </div>
  );
}

export default App;
