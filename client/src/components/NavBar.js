import React, {useState, useContext} from "react";
import { NavLink } from 'react-router-dom';
import LoginForm from "./sessions/LoginForm";
import SignUpForm from "./sessions/SignUpForm";
import { userContext } from './context/UserProvider';


function NavBar(){
    const {currentUser, isLoggedIn ,logout} =useContext(userContext)
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

    function logoutUser(){
        fetch ("/logout",{
         method: "DELETE"
        })
        .then(() => logout())      
        }
    
    
  
    return(
    <div>
       
        <nav className="App-header active" >
            <NavLink style={linkStyle} to="/"> LitQuest </NavLink>
            <NavLink style={linkStyle} to="/me/children">{isLoggedIn && 
         currentUser.user_profile.profileable_type ===  "Parent" ? "Dashboard": null }</NavLink>
            <NavLink style={linkStyle} to="/me/books">{isLoggedIn && 
         currentUser.user_profile.profileable_type === "Child" ? "My Books": null }</NavLink>
            <NavLink style={loginLink} onClick={handleshowLogin}>{isLoggedIn ? null : "Login"}</NavLink>
            <NavLink style={signupLink} onClick={handleshowSignUp}>{isLoggedIn ? null : "Signup"} </NavLink>
            <NavLink style={logoutLink}  onClick={logoutUser}>{isLoggedIn ? "Logout" : null} </NavLink>
        
        </nav>
        <header > 
            { showLogin ? <LoginForm onShowLogin={handleshowLogin}/> : null}
            { showSignUp ? <SignUpForm onShowSignUp={handleshowSignUp}/> : null}
        </header>
    </div> 
    )
}

export default NavBar;