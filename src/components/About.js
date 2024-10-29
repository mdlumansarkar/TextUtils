// import { useState } from "react"

import { useState } from "react"


const About = (props) => {
    // const [lightMood,darkMood] = useState(lightMood);

    // const DarkMood=()=>{

    // }

    const [btn,setBtn] = useState("Enable Dark Mood")

    const [myStyle,setMyStyle] = useState(
      
      {
        color : 'black',
        backgroundColor : 'white'
      }
    )

    const Dark=()=>{
      if (myStyle.color == 'black') {
        setMyStyle ({
          color:'white',
          backgroundColor:'black',
          border:'2px solid white'
        })
        setBtn("Enable Light Mood")
      }
      else {
        setMyStyle ({
          color:'black',
          backgroundColor:'white'
        }) 
        setBtn("Enable Dark Mood")
        }
      
    }
    

    
    return(
        <>
        <div style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}}  className="accordion container"  id="accordionExample">
  <div style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} className="accordion-item" >
    <h2 style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} className="accordion-header">
        <h1 className="my-2 mx-2"  >About Us</h1>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div  style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} className="accordion-body">
        <strong style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} >This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}}  className="accordion-item">
    <h2  style={{backgroundColor: props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'grey'}} className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div  className="accordion-body">
        <strong >This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
    <button onClick={Dark} className="btn btn-primary mx-3 my-3" >{btn}</button>
  </div>
</div>
        </>
    )
}

export default About