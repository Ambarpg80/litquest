import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(){
    return(
       <nav className="App-header active" >
        <NavLink to="/"> LitQuest </NavLink>
        <NavLink to="/books">Books</NavLink>
       </nav>
    )
}

export default NavBar;