import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const userContext = React.createContext("");

function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/me")
          .then(res => res.json())
          .then( userData => { setCurrentUser(userData)
          userData.error ? setIsLoggedIn(isLoggedIn) : setIsLoggedIn(!isLoggedIn)
        })
    }, []);
     
    function login(user){
        setCurrentUser(user)
        setIsLoggedIn(true)
        navigate("/")
    }

    function logout(){
        setCurrentUser({})
        setIsLoggedIn(false)
        navigate("/")
    }
    function signup(user){
        setCurrentUser(user)
        setIsLoggedIn(true)
        navigate("/")
    }

    
    return(
        <userContext.Provider value={{currentUser, 
                                      setCurrentUser,
                                      isLoggedIn, 
                                      login, 
                                      logout, 
                                      signup,
                                      }}> {children} 
        </userContext.Provider>
    )
}
export { userContext, UserProvider };