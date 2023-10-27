import React, {useState} from 'react'


export default function TextForm(props) {

    const HandleUpClick = (props) =>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        useText(newText)
    }

    const HandleLoClick = (props) =>{
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase();
        useText(newText)
    }

    const HandleOnChange = (event) =>{
        console.log("On Change")
        useText(event.target.value);
    }

    const [text, useText] = useState('')

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter text here' value={text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
