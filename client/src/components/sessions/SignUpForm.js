import React, {useState, useContext} from 'react'
import {userContext} from '../context/UserProvider'

function SignUpForm({ onShowSignUp}){
    const {signup} = useContext(userContext);
    const [signUpError, setSignUpError] = useState([])
    const [profileableName, setProfileableName]= useState("")
    const [newUser, setNewUser] = useState({
            parent_id: null ,
            name: "",
            email: "",
            age: 0,
            username: "",
            password: "",
            password_confirmation: "",
     })
   
 
    function inputChange(e){
        setNewUser({...newUser,
             [e.target.id]: e.target.value })
    }

    function handleSignup(e){
        e.preventDefault()
        const profile = {parent_id: null,
                         name: profileableName,
                         email: newUser.email,
                         age: parseInt(newUser.age),
                         username: newUser.username,
                         password: newUser.password,
                         password_confirmation: newUser.password_confirmation}
        fetch("/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(profile)
       })
        .then(res => {
            if(res.ok){
                (res.json()).then( user => {signup(user)
                                          onShowSignUp()}) 
            }else{
                res.json().then(err=> setSignUpError(err.errors.map(error => <li key={error}>{error}</li>)))
            }
            })
        }

    return(
    <div className= "auth-container" >
        <h2 >Please Sign up</h2>
        <form onSubmit={handleSignup}>
            <label > Name:
                <input onChange={(e)=> setProfileableName(e.target.value) } 
                        type="text" 
                        id="name" 
                       required value={profileableName}></input>
            </label> <br/>
            <label >Email:
                <input onChange={inputChange} 
                       type="text" 
                       id="email" 
                       required value={newUser.email}></input>
            </label> <br/>
            <label >Age:
                <input onChange={inputChange} 
                       type="text" 
                       id="age" 
                       required value={newUser.age}></input>
            </label> <br/>
            <label >Username:
                <input onChange={inputChange} 
                       type="text" 
                       id="username" 
                       required value={newUser.username}></input>
            </label> <br/>
            <label >Password:
                <input onChange={inputChange} 
                       type="password" 
                       id="password" 
                       required value={newUser.password}></input>
            </label> <br/>
            <label >Confirm Password:
                <input onChange={inputChange}
                       type="password" 
                       id="password_confirmation" 
                       required value={newUser.password_confirmation}></input>
            </label> <br/>
            <button>Sign Up</button>
        </form>
         {signUpError}
    </div>
    )
}
export default SignUpForm