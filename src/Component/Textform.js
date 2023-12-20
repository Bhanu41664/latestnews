import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("Enter text here2");
    const handleUpClick=()=>{
        console.log("YOU ARE CLICKED")
        let newtext=text.toUpperCase();
        console.log("New text"+newtext);
        setText(newtext);

     }
     const handleDownClick=()=>{
        console.log("YOU ARE CLICKED")
        let newtext=text.toLowerCase();
        console.log("New text"+newtext);
        setText(newtext);

     }
     
    const handleOnChange= (event)=>{
        console.log("Onchangeclicked");
        setText(event.target.value)
    }
    const clearText=()=>{
        let newtext='';
        setText(newtext);
        
    }
    const copyText=()=>{
        let text2=document.getElementById('myBox')
        navigator.clipboard.writeText(text2.value);
    }
  return (
    <>
    <div className='container my-3'>
        <h1>{props.header
        }</h1>
        <div className="mb-3">
            <label for="Mytext" className="form-label">{props.header}</label>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>ConvertUppercase</button>
        <button className='btn btn-primary mx-3' onClick={handleDownClick}>ConvertoLowercase</button>
        <button className='btn btn-primary mx-3' onClick={clearText}>clear</button>
        <button className='btn btn-primary mx-3' onClick={copyText}>copy</button>
    </div>
    <div className='container my-3'>
        <h1>Text Summery</h1>
        <p>{text.split(" ").length} words, and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes required for read</p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>
    </>
  )
}
