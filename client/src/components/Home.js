import React from "react";

function Home(){
  const stats= ["40% percent of fourth-grade students did not meet the NAEP Basic level in 2022.","30% percent of eighth-graders did not meet the NAEP Basic level","Students who struggle with reading, struggle in other academic areas. A students disposition changes when they are made to feel inadequate." ]
  const benefitsToChild= ["Practice promotes improved reading skills.",
  "Improvement of student writing, grammar and spelling",
  "Promotes a love of reading because kids get to choose books that are enjoyable",  
  "Promotes confidence in learning and discussion",
  "Lets parents be involved in their child’s education in a manageable way." 
  ]
  const benefitsToParent=[{title: "Connection", reason: "You learn about what your kids are into. It’s a chance to engage with kids beyond asking how their day was."},{title: "Development", reason: "You see how much your child is willing to challenge themselves." },{title: "Simple" , reason: "Reading for fun versus reading for enrichment."}, {title: "Comprehension" , reason: "Is what they read helping them mature, build vocabulary and offering new perspectives. Do they understand what they read?"},{title: "Learning Style" , reason: "How does the child learn? Reading speed vs retention. "},{title: "Expression" , reason: "How does the child talk about the book. Attention to details. Are they confident when they speak about what they read?"},]

    
  return(
    <div  >  
      <header >
        <div id="welcome-image"></div>  
        <div className="welcome-font">
        <h1 style={{fontSize: "70px"}}> Welcome to LitQuest</h1><br/>
        <p style={{fontSize: "35px"}}> Logging One Adventure At A Time</p> 
        </div>
      </header>

      <div className="stat-cards " >
        <h1 style={{textAlign:"center", paddingTop:"40px"}}> <em>Did You Know?</em></h1>
      {stats.map(stat=>  <div key={stat} className="stat-card"><div style={{padding:"5px", textAlign:"center", height:"275px",borderRadius:"20px"}}>{stat}</div> </div>)}
      </div>

      <div id="litquest" style={{paddingLeft: "70px", paddingTop: "25px"}} >
        <div style={{float: "left"}}>
        <h1 style={{fontFamily: 'Acme, sans-serif'}}>What is LitQuest?</h1>
          <p style={{display: "block", fontSize: "25px", width:"45%"}}>A book logging application for students that will help them to write about books that they read. It is a way for parents to keep track of what their kids are reading and give them insight into how their kids read as well as creating a means for discussion.</p>
       </div> 
       <div > 
          <div id="parent-portal" style={{float: "right", marginRight: "30%"}}></div>
          <div id="child-portal"  style={{float: "right", marginRight: "10%"}}></div>
        </div> 
      </div>

      <div id="children">
        <h2 style={{fontFamily: 'Acme, sans-serif'}}>Benefits to Children</h2>
         {benefitsToChild.map(benefit => <div key={benefit} id="kid-benefits">{benefit}</div>) }
      </div>

      <div id="parents"  >
          <h2 style={{textAlign: "center", padding: "15px", color:"rgb(75, 73, 70)", fontFamily: 'Acme, sans-serif'}}>
            Benefits for parents
          </h2 >
            {benefitsToParent.map(benefit => 
          <div key={benefit.title} id="parent-benefits">
              <p > <b>{benefit.title}</b> : {benefit.reason}</p>
          </div>) }
      </div>

      <footer >
        <p style={{textAlign:"center"}}>Thank you for your Support</p><br/>
        <a href="https://google.com/">Contact Us </a><br/>
        <a href="https://www.thenationalliteracyinstitute.com/literacy-statistics">National Literacy Institute </a><br/>
        <a href="https://www.nationsreportcard.gov/reading/nation/achievement/?grade=4">The Nation's Report Card </a><br/>
        <ul className="social container" >
          <a style={{color: "white"}} href="https://www.facebook.com/" ><i className="fa-brands fa-facebook"></i></a>
          <a style={{color: "white"}} href="https://twitter.com/"><i className="fa-brands fa-x-twitter"></i></a>
          <a style={{color: "white"}} href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
          <a style={{color: "white"}} href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
        </ul>
      </footer> 
    </div>    
   
    )
}

export default Home;