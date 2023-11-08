import React, { useState} from "react"; 
// import { userContext } from "../context/UserProvider";useContext,


function NewBookForm({ onBookAdded, handleBookForm}){
    // const {handleBookAdded} = useContext(userContext)
    const [bookError, setBookError] = useState("")
    const [newBookSummary, setNewBookSummary]= useState("")
    const [newBookRating, setNewBookRating]= useState("")
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
                         summary: newBookSummary,
                         rating: newBookRating,
                         }
    
       function bookSubmission(e){
        e.preventDefault()
        fetch("/books",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookInput),
        })
        .then(res => {
            if(res.ok){
            res.json().then(newBook =>  { onBookAdded(newBook)
                                          handleBookForm() })
            }else{
            res.json().then(error => setBookError( error.errors.map(err => <li key={err}>{err}</li>) ) )
            }
        })                        
        }
    return(
       <div >
        <p> Add a book and summary below.</p>
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
                <label> About the Book:
                    <textarea type="text"
                              id="preview"
                              value={newBookInfo.preview}
                              onChange={handleChange}>
                    </textarea>
                </label><br/>
                <label> Book Summary:
                    <textarea type="text"
                              id="summary"
                              value={newBookSummary}
                              onChange={(e)=>setNewBookSummary(e.target.value)}>
                    </textarea>
                </label><br/>
                <label> Rating:
                    <input type="number"
                            id="rating"
                            value={newBookRating}
                            onChange={(e)=>setNewBookRating(e.target.value)}></input>
                </label><br/>
            <button type="submit"> Submit Book </button>
            </form>
           {bookError}
          </div>
          
       </div>
    )
}
export default NewBookForm;