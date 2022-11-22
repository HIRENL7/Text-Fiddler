import React, { useState } from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    console.log("Upper Case Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To Upper Case", "success");
  }
  const handleDownClick = () => {
    console.log("Lower Case Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To Lower Case", "success");
  }
  const clearText = () => {
    console.log(text);
    let newText = "";
    setText(newText)
    props.showAlert("Cleared", "success");
  }
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "success");
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");
  }



  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#181828' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '   #181828' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert TO Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert TO Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>

      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#181828' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and  {text.length} letters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>


      </div>
    </>
  )
}
