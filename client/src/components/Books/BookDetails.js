import React, {useState} from "react";
import EditBookForm from "./EditBookForm";

function BookDetails({book, onDelete, onBookUpdate}){
   const [editForm, setEditForm] = useState(false)
 const buttonStyling = {float: "left", marginRight: "5px", marginBottom: "10px"}

   function showEditForm(){
      setEditForm(!editForm)
   }

function deleteBook(){
   fetch(`/books/${book.id}`,{
      method: "DELETE" })
      .then(onDelete(book))
     
  
}   

    return(
      <div className="single-book">
         <div>
            <button onClick={deleteBook}
                    style={buttonStyling} 
                    type="button"> Delete Book 
            </button>
            <button onClick={showEditForm} 
                    style={buttonStyling} 
                    type="button"> Edit Book 
            </button> 
            {editForm ? <EditBookForm book={book} onBookUpdate={onBookUpdate} showEditForm={showEditForm} /> : null}
         </div>
         <div className="book-details">
            <div className="thumbnail" style={{border: "1px solid rgb(65, 78, 67)"}}>
               <img src={book.thumbnail_url} alt={book.title} ></img> 
               <span className="caption">{book.title}</span> 
            </div>
            <div style={{ width: "25%", marginLeft: "5%", marginRight: "2%"}}>
               <p><b>Title:</b> {book.title}</p>
               <p><b>Author:</b> {book.author}</p>
               <p><b>Publisher:</b> {book.publisher}</p>
               <p><b>Genre:</b> {book.genre}</p>
            </div>
            <div style={{width: "50%", marginRight: "1%", float: "right"}}>
               <p>{book.preview}</p>
            </div>
         </div> 
      <button > Add Summary </button>
      </div>
    )
}

export default BookDetails;