import React, {useState, useContext} from "react";
import { NavLink } from 'react-router-dom';
import LoginForm from "./sessions/LoginForm";
import SignUpForm from "./sessions/SignUpForm";
import { userContext } from './context/UserProvider';


function NavBar(){
    const {currentUser, isLoggedIn ,logout} =useContext(userContext)
    const [isActive, setIsActive] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    const linkStyle ={ 
                      position: 'absolute',
                      top: 10, }
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
    function handleActive(){setIsActive(!isActive)}

    function logoutUser(){
        fetch ("/logout",{
         method: "DELETE"
        })
        .then(()=>logout())      
        }
    
    
  
    return(
    <div className="">
        <header > 
             <div  className="auth-container" >{ showLogin && !isLoggedIn ? <LoginForm onShowLogin={handleshowLogin}/> : null}</div>
             <div className="auth-container">{ showSignUp && !isLoggedIn ? <SignUpForm onShowSignUp={handleshowSignUp}/> : null}</div>
        </header>
        <nav onClick={handleActive} >
            <NavLink  className={isActive ? "active" : ""} 
                      style={linkStyle} to="/"> LitQuest 
            </NavLink>
            <NavLink className={isActive ? "active" : ""} 
                     style={linkStyle} 
                     to="/me/children">{isLoggedIn && currentUser.user_profile.profileable_type ===  "Parent" ? "Dashboard": null }
            </NavLink>
            <NavLink className={isActive ? "active" : ""} 
                     style={linkStyle} 
                     to="/my_books">{isLoggedIn && currentUser.user_profile.profileable_type === "Child" ? "My Books": null }
            </NavLink>
            <NavLink className={isActive ? "active" : ""}  
                     style={loginLink} 
                     onClick={handleshowLogin}>{isLoggedIn ? null : "Login"}
            </NavLink>
            <NavLink className={isActive ? "active" : ""} 
                     style={signupLink} 
                     onClick={handleshowSignUp}>{isLoggedIn ? null : "Signup"} 
            </NavLink>
            <NavLink className={isActive ? "active" : ""} 
                     style={logoutLink}  
                     onClick={logoutUser}>{isLoggedIn ? "Logout" : null} 
            </NavLink>
        
        </nav>
    </div> 
    )
}

export default NavBar;