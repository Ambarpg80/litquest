import React, {useState} from "react"; // , useContext
// import { UserContext } from "./context/UserProvider";

function EditBookForm({book, onBookUpdate, showEditForm}){
    const [bookError, setBookError] = useState("")
    // const {currentUser} = useContext(UserContext); 
    const [editedBook, setNewBookInfo] = useState({
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        genre: book.genre,
        thumbnail_url: book.thumbnail_url,
        preview: book.preview,
      });
      
       
       function handleChange(e){
        setNewBookInfo({...editedBook , 
                        [e.target.id]: e.target.value,});
       }
        
       const bookInput ={title: editedBook.title, 
                         author: editedBook.author ,
                         publisher: editedBook.publisher ,
                         genre: editedBook.genre ,
                         thumbnail_url: editedBook.thumbnail_url,
                         preview: editedBook.preview ,
                         }
    
       function handleBookEdit(e){
        e.preventDefault()
        fetch(`/my_books/${book.id}`,{
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookInput),
        })
        .then(res => {
            if(res.ok){
            res.json()
            .then(updatedBook =>  {onBookUpdate(updatedBook)
                                    showEditForm()
            }) 
                            
            }else{
            res.json().then(error => setBookError( error.errors.map(err => <li key={err}>{err}</li>) ) )
            }
        })                        
        }
    return(
       <div >
        <div className='form-container'>
            <form onSubmit={handleBookEdit}>
                <label>Title: 
                    <input type="text"
                            id="title"
                            value={editedBook.title}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Author:
                    <input type="text"
                            id="author"
                            value={editedBook.author}
                            onChange={handleChange}></input>
                </label><br/> 
                <label> Publisher:
                    <input type="text"
                            id="publisher"
                            value={editedBook.publisher}
                            onChange={handleChange}></input>
                </label><br/>
               
                <label> Genre:
                    <input type="text"
                            id="genre"
                            value={editedBook.genre}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Image:
                    <input type="text"
                            id="thumbnail_url"
                            value={editedBook.thumbnail_url}
                            onChange={handleChange}></input>
                </label><br/>
                <label> Book Preview:
                    <textarea type="text"
                            id="preview"
                            value={editedBook.preview}
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
export default EditBookForm;