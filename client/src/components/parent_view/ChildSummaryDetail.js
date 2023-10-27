import React from "react"

function ChildSummaryDetails({ review }){
   

    return(
        <div key={review.id}>
            <p style={{alignText: "left"}}>
               <b>Summary: </b> {review.summary} <br/>
               <b>Rating: </b> {review.rating} out of 5
            </p> <br/>
        </div>
    )
}

export default ChildSummaryDetails;