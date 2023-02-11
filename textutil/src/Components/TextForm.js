import React, { useState } from "react";
import "../CSS/TextForm.css";
export default function TextForm(props) {

  // Convert UpperCase Method's
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };

  //   Convert LowerCase Method's
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };

  //   Clear TextArea Method's
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Clear!", "success");
  };

  // Copy Text Method's
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!", "success");
  };

  // Remove Extra Space's
  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed! ", "success");
  };

  //   Set All Text in TextArea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Use State Used
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClrClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space's
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {" "}
            {/* Not Remove's Extra Space's */}
            {/* {text.split(" ").length} words and {text.length} characters{" "} */}
            {/* Remove Extra Space's */}
            {
            //   text.split(" ").filter((element) => {
            //     return element.length !== 0;
            //   }).length
            // }{" "}
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
            words and {text.length} characters{" "}
          </b>
        </p>
        <p>
          {/* <b>{0.008 * text.split(" ").length} Minutes read </b>{" "} */}
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes read{" "}
          </b>{" "}
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to previews"}
        </p>
      </div>
    </>
  );
}
