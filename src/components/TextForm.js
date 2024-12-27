import React, { useState } from "react";
import { sentence, paragraph } from "txtgen";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        // console.log("On Change affirmative")
        setText(event.target.value);

    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked", text);
        let upper = text.toUpperCase();
        setText(upper);
        if (text.length === 0) {
            props.showAlert("No text to convert", "danger");
        }

    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked", text);
        let lower = text.toLocaleLowerCase();
        setText(lower);
        if (text.length === 0) {
            props.showAlert("No text to convert", "danger");
        }
    }
    const clearClick = () => {
        setText("");
    }
    const genClick = () => {
        let sent = [sentence, paragraph];
        var random = Math.floor(Math.random() * 2);
        let sentenc = sent[random]();
        setText(sentenc);
    }
    const copyClick = () => {
        // let text = document.getElementById("forText").select();
        // navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to Clipboard", "success");
        if (text.length === 0) {
            props.showAlert("No text to convert", "danger");
        }
        else {
            navigator.clipboard.writeText(text).then(
                () => {
                    props.showAlert("Copied to Clipboard", "success");
                },
                (err) => {
                    props.showAlert("Failed to copy", "danger");
                    console.error("Error copying text: ", err);
                }
            );
            document.getSelection().removeAllRanges();
        }

    }

    const extraClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
        if (text.length === 0) {
            props.showAlert("No text to convert", "danger");
        }
    }
    return (
        <>
            <div className="container mt-1 ">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={props.mode === 'light' ? 'form-control bg-white text-dark' : 'form-control bg-dark text-light'} id="forText" onChange={handleOnChange} rows="8" value={text}></textarea>
                    <div className="">
                        <button className={`mt-3 btn btn-${props.buttonColor} my-1`} onClick={handleUpClick}>Uppercase</button>
                        <button className={`mt-3 btn btn-${props.buttonColor} mx-1 my-1`} onClick={handleLowClick}>Lowercase</button>
                        <button className={`mt-3 btn btn-${props.buttonColor} my-1`} onClick={clearClick}>Clear</button>
                        <button className={`mt-3 btn btn-${props.buttonColor} mx-1 my-1`} onClick={genClick}>Generate</button>
                        <button className={`mt-3 btn btn-${props.buttonColor} my-1`} onClick={copyClick}>Copy</button>
                        <button className={`mt-3 btn btn-${props.buttonColor} mx-1 my-1`} onClick={extraClick}>Remove Extra Spaces</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <h6>{text.split(" ").filter((element) => element.length !== 0).length} Words and {text.length} Characters</h6>
                <h6> Average time taken to read this paraghraph. {0.008 * text.split(" ").filter((element) => element.length !== 0).length} mins.</h6>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>
        </>
    );
}
