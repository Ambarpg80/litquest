import React from "react";
import {  Routes, Route, Outlet } from "react-router-dom";
import BookList from './Books/BookList';
import NavBar from './NavBar';

function Home({bookData}){
    
    
    
    return(
        <div>
        <nav className="App-header"> <NavBar/> </nav> 
        <Routes>
        <Route path="/" element={ <Home/> } /> 
          <Route path="/books" element={ <BookList bookData={bookData}/> } />
          
        </Routes>
        <Outlet/>
        </div>
    )
}

export default Home;