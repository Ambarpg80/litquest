import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(){
    const linkStyle ={marginRight: "15px",}
    return(
       <nav className="App-header active" >
        <NavLink style={linkStyle} to="/"> LitQuest </NavLink>
        <NavLink style={linkStyle} to="/books">Books</NavLink>
       </nav>
    )
}

export default NavBar;