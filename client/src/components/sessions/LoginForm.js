import React, {useState, useContext} from 'react'
import { userContext } from '../context/UserProvider';

function LoginForm({onShowLogin}){
    const [loginError, setLoginError] = useState([])
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const {login} = useContext(userContext);
   
    function handleLogin(e){
        e.preventDefault()
        const loginParams = {username, password}           
        fetch("/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginParams)
        })
        .then(res => {
            if (res.ok){
            res.json().then(user =>{login(user)
                                    onShowLogin()} )           
           } else {
           res.json().then( err => setLoginError(err.error) )
           }
        })
    }   

    return (
    
    <div className='auth-container'>
       <form onSubmit={handleLogin} >
       <h3 >Please Login</h3>
            <label className='auth-label'>Username:
                <input className= "auth-input"
                       type="text" 
                       id="username" 
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}>
                </input>
            </label> <br/>
            <label className='auth-label'>Password:
                <input className= "auth-input"
                       type="password"  
                       id="password" 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}>
                </input>
            </label> <br/>
            <button type="submit">Login</button>
        </form> 
        <div >
        </div>
        <ul>{loginError}</ul>
    </div>
    
    )
}

export default LoginForm