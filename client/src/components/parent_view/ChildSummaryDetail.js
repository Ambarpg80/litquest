import React from "react"

function ChildSummaryDetails({ review }){
   

    return(
        <div >
            <p style={{alignText: "left"}}>
               <b>Summary: </b> {review.summary} <br/>
               <b>Rating: </b> {review.rating} out of 5
            </p> <br/>
        </div>
    )
}

export default ChildSummaryDetails;