import React, {useState} from "react"; // , useContext
// import { UserContext } from "./context/UserProvider";

function NewBookForm({onAddBook, handleShowForm}){
    const [bookError, setBookError] = useState("")
    // const {currentUser} = useContext(UserContext); 
    const [newBookInfo, setNewBookInfo] = useState({
        title: "",
        author: "",
        publisher: "",
        genre: "",
        thumbnail_url: "",
        preview: "",
      });
      
       
       function handleChange(e){
        setNewBookInfo({...newBookInfo , 
                        [e.target.id]: e.target.value,});
       }
        
       const bookInput ={title: newBookInfo.title, 
                         author: newBookInfo.author ,
                         publisher: newBookInfo.publisher ,
                         genre: newBookInfo.genre ,
                         thumbnail_url: newBookInfo.thumbnail_url,
                         preview: newBookInfo.preview ,
                         }
    
       function bookSubmission(e){
        e.preventDefault()
        fetch(`/books`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookInput),
        })
        .then(res => {
            if(res.ok){
            res.json()
            .then(newBook =>  { onAddBook(newBook)     
                               handleShowForm()})
            }else{
            res.json().then(error => setBookError( error.errors.map(err => <li key={err}>{err}</li>) ) )
            }
        })                        
        }
    return(
       <div >
        <div className='form-container'>
            <form onSubmit={bookSubmission}>
                <label>Title: 
                    <input type="text"
                            id="title"
                            value={newBookInfo.title}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Author:
                    <input type="text"
                            id="author"
                            value={newBookInfo.author}
                            onChange={handleChange}></input>
                </label><br/> 
                <label> Publisher:
                    <input type="text"
                            id="publisher"
                            value={newBookInfo.publisher}
                            onChange={handleChange}></input>
                </label><br/>
               
                <label> Genre:
                    <input type="text"
                            id="genre"
                            value={newBookInfo.genre}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Image:
                    <input type="text"
                            id="thumbnail_url"
                            value={newBookInfo.thumbnail_url}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Book Preview:
                    <textarea type="text"
                              id="preview"
                              value={newBookInfo.preview}
                              onChange={handleChange}>
                    </textarea>
                </label><br/>
            <button type="submit"> Submit Book </button>
            </form>
            {bookError}
          </div>
       </div>
    )
}
export default NewBookForm;