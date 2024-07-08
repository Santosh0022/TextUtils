import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log("Lower was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("Text is Changed");
        setText(event.target.value);
    }
  return (
    <>
        <div>
            <h3>
                {props.title}
            </h3>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Enter Text Here</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-3'onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} Words and {text.length} Characters</p>
            <p>{0.008 * text.length} Minutes to Read the Text</p>
            <h1><b>Text Preview </b></h1>
            <p><i> {text} </i></p>
        </div>
    </>
  )
}
