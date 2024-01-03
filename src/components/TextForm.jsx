import React, {useState} from 'react'



export default function TextForm(props) {

    // function uniqueWordCount(str) {
    //     let set = new Set(str.split(' '));
    //     return set.size;
    //     }
    
    const HandleClearClick = (props) =>{
        console.log("Text was cleared")
        let newText = '';
        useText(newText)
    }

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

    const HandleStartTrimClick = (props) =>{
        console.log("Starting Spaces Cleared")
        let newText = text.trimStart();
        useText(newText)
    }

    const HandleUniqueClick = (props) =>{
        let set = new Set(text.split(' '));
        console.log(set.size);
        alert("Number of Unique Words are: " + set.size)
    }

    const HandleOnChange = (event) =>{
        console.log("On Change")
        useText(event.target.value);
    }

    const [text, useText] = useState('')

    return (
        <>
        <div className="container"  style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter text here' value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode === 'light'?'dark':'light'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-info mx-2" onClick={HandleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={HandleStartTrimClick}>Remove starting spaces</button>
            <button className="btn btn-primary mx-2" onClick={HandleUniqueClick}>Number of Unique words</button>

        </div>
        <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
