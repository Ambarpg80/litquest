import '../App.css';
import React from 'react';
import {  Routes, Route} from "react-router-dom";
import { UserProvider } from './context/UserProvider';
import LoginForm from './sessions/LoginForm';
import SignUpForm from './sessions/SignUpForm';
import NavBar from './NavBar';
import Home from './Home'
import BookList from './books/BookList';
import ParentPage from './ParentPage';


function App() { 
  

  return (
    <div className="App">
       <UserProvider>
        <nav className="App-header"> <NavBar/> </nav>
        
          <Routes>
            <Route exact path="/" element={ <Home/> } /> 
            <Route path="/me/books" element={<BookList   />}   />
            <Route path="/me/children" element={<ParentPage />} />
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
