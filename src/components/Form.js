import React, {useState}from 'react'

export default function Form(props) {
  const handleUpClick =()=>{   
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleClearClick=()=>{
    let newText = ""
    setText(newText)
    props.showAlert("text is cleared")
  }
  const handleCopy=()=>{
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("text is copied")
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed")
  }

  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here');
  //test = "new text"; wrong way to change the state
  //setText("new text");//correct way to change the state
  return (
    <>
    <div Style={{color:'dark' ? 'grey' : 'white'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:'dark'?'grey':'white'}} value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>-
 <button className="btn btn-danger my-1" onClick = {handleLoClick}>Convert to Lowercase</button>
 <button className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear text</button>
 <button className="btn btn-primary my-1" onClick={handleCopy}>copy text</button>
 <button className="btn btn-danger mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
</div>
 <div className="container" style= {{color:'dark' ? 'grey' : 'white'}}>
   <h1>your summary</h1>
   <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>read time = {0.008*text.split(" ").length}</p>
   <h2>Preview</h2>
   <p>{text}</p>
 </div>
</>
    
  )
}
