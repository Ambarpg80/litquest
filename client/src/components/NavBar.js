import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import LoginForm from "./sessions/LoginForm";
import SignUpForm from "./sessions/SignUpForm";

function NavBar(){
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    const linkStyle ={marginRight: "15px"}
    const logoutLink = {fontFamily: "Helvetica",
                            position: 'absolute',
                            top: 10, 
                            right: 30, 
                            textDecoration: 'none'}
    
    const signupLink = {fontFamily: "Helvetica",
                            position: 'absolute',
                            top: 10, 
                            right: 120, 
                            textDecoration: 'none'}

    const loginLink = {fontFamily: "Helvetica",
                            position: 'absolute',
                            top: 10, 
                            right: 220, 
                            textDecoration: 'none'}

    function handleshowLogin(){setShowLogin(!showLogin)}
    function handleshowSignUp(){setShowSignUp(!showSignUp)}
    return(
    <div>
       
        <nav className="App-header active" >
            <NavLink style={linkStyle} to="/"> LitQuest </NavLink>
            <NavLink style={linkStyle} to="/books">Books</NavLink>
            <NavLink style={loginLink} onClick={handleshowLogin}>Login</NavLink>
            <NavLink style={signupLink} onClick={handleshowSignUp}>Signup</NavLink>
            <NavLink style={logoutLink}  >Logout</NavLink>
        </nav>
        <header > 
            { showLogin ? <LoginForm/> : null}
            { showSignUp ? <SignUpForm/> : null}
        </header>
    </div> 
    )
}

export default NavBar;