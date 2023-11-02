import React, {useState, useContext} from 'react'
import { userContext } from '../context/UserProvider'


function ChildSignupForm({ onShowSignUp}){
    const {currentUser, addChild} = useContext(userContext)
    const [signUpError, setsignUpError] = useState([])
    const [profileableName, setProfileableName]= useState("")
    const [newUser, setNewUser] = useState({
            parent_id: currentUser.id,
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

    function handleChildSignup(e){
        e.preventDefault()
        const profile = {parent_id: currentUser.id,
                         name: profileableName,
                         email: newUser.email,
                         age: parseInt(newUser.age),
                         username: newUser.username,
                         password: newUser.password,
                         password_confirmation: newUser.password_confirmation}
        fetch("/me/children",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(profile)
       })
        .then(res => {
            if(res.ok){
                (res.json()).then(user => {addChild(user)
                                          onShowSignUp()}) 
            }else{
                res.json().then(err => setsignUpError(err.errors.map(error => <ul key={error}><li> {error} </li></ul> ) ) )
            }
            })
        }

    
    return(
    <div className= "form-container">
        <p> Once you add a child, they will be able to access their account. As they add books, you will be able to see what they are working on .</p>
        <form onSubmit={handleChildSignup}>
            <label > Name:
                <input onChange={(e)=> setProfileableName(e.target.value) } 
                        type="text" 
                        id="name" 
                        value={profileableName}></input>
            </label> <br/>
            <label >Email:
                <input onChange={inputChange} 
                       type="text" 
                       id="email" 
                       value={newUser.email}></input>
            </label> <br/>
            <label >Age:
                <input onChange={inputChange} 
                       type="text" 
                       id="age" 
                       value={newUser.age}></input>
            </label> <br/>
            <label >Username:
                <input onChange={inputChange} 
                       type="text" 
                       id="username" 
                       value={newUser.username}></input>
            </label> <br/>
            <label >Password:
                <input onChange={inputChange} 
                       type="password" 
                       id="password" 
                       value={newUser.password}></input>
            </label> <br/>
            <label >Confirm Password:
                <input onChange={inputChange}
                       type="password" 
                       id="password_confirmation" 
                       value={newUser.password_confirmation}></input>
            </label> <br/>
            <button>Sign Up</button>
        </form>
       {signUpError}
    </div>
    )
}
export default ChildSignupForm;