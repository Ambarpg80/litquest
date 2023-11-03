import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const userContext = React.createContext("");

function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [kidsBooks, setKidsBooks]= useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/me")
          .then(res => res.json())
          .then( userData => { setCurrentUser(userData)
                               setKidsBooks(userData.books)
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

   

    // function kidsBookChange(book){
    //   const bookChange = kidsBooks.map(bk=> bk.id === book.id ? book : bk )
    //   setKidsBooks(bookChange)
    // }
    

    return(
        <userContext.Provider value={{currentUser, setCurrentUser,
                                      isLoggedIn, setIsLoggedIn,
                                      kidsBooks, setKidsBooks,
                                      login, 
                                      logout, 
                                      signup,
                                      // kidsBookChange,
                                      }}> {children} 
        </userContext.Provider>
    )
}
export { userContext, UserProvider };