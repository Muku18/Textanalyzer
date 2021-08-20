import React, { useState } from 'react'
import './Navbar.css'


const TextForm = ( props ) => {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleRemovePunctuation = () => {
        let Punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        let newText = text.split('')
            .filter(function (letter) {
                return Punctuation.indexOf(letter) === -1;
            })
            .join('');

        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleextraSpaces = () => {
        var newText = text.replace(/\s+/g,' ').trim();
        setText(newText)
    }

  

    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style = {{color:props.mode === `dark` ? `white` : `black`}}>
            <div className="container">
                <h2 >{props.heading}</h2>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === `dark` ? `grey` : `white` ,color:props.mode === `dark` ? `white` : `black`}} placeholder="Enter your text" className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                </div>

                <div className = "btn">
                <button className="btn btn-danger mx-3" onClick={handleUpClick}> upperCase</button>
                <button className="btn btn-danger mx-3 my-3" onClick={handleLowClick}> lowerCase</button>
                <button className="btn btn-danger mx-3" onClick={handleclearClick}> clearText</button>
                <button className="btn btn-danger mx-3 my-3" onClick={handleCopy}> Copy</button>
                <button className="btn btn-danger mx-3" onClick={handleRemovePunctuation}> removePunctuation</button>
                <button className="btn btn-danger mx-3 my-3" onClick={handleextraSpaces}> removeExtraSpaces</button>
                </div>
                

            </div>
            <div className="container my-3">
                <ul>
                    <li><p> Entered text has <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters.</p></li>
                    <li><p> It will take <b>{0.008 * text.split(" ").length} minutes</b> to read the complete text. </p></li>
                </ul>
            </div>
            </div>
        </>

    )
}

export default TextForm

