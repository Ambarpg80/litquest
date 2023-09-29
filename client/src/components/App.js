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
  
  

  return (
    <div className="App">
       {/* <UserProvider> */}
      <Home bookData={bookData} /> 
       
      {/* </UserProvider>  */}
    </div>
  );
}

export default App;
