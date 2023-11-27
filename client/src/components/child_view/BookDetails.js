import React, {useState} from "react";
import SummaryForm from "../forms/SummaryForm";
import SummaryList from "./SummaryList";


function BookDetails({book, onAddReview, onRemoveReview, onUpdateReview}){
   const [showSummaries, setShowSummaries]= useState(false)
   const buttonStyle = {position: "relative", left:"40%"}
   
   function handleShowSummaries(){ setShowSummaries(!showSummaries) }
   
  

    return(
      <div className="single-book">
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
         <button style={buttonStyle} onClick={handleShowSummaries}>{showSummaries ? "Close Sumaries" : "See Summaries"} </button>
        {showSummaries ? <div><SummaryForm book={book} handleShowSummaries={handleShowSummaries} onAddReview={onAddReview} onUpdateReview={onUpdateReview} /></div> : null} 
        {showSummaries ? <div> <SummaryList book={book} onUpdateReview={onUpdateReview} onRemoveReview={onRemoveReview} /></div>: null} 
      </div>
    )
}
export default BookDetails;
