import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };

  // Remove Body Classes
  const removeBodyClass = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-light");
  };
  // Dark Mode all method's
  const toggleMode = (cls) => {
    removeBodyClass(); //calling removeBodyClass
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enable", "success");
      // document.title = "TextUtils - Dark Mode";

      // Title Bar me Chamak
      // setInterval(()=>{
      //   document.title="TextUtil is Amazing Mode"
      // },2000)
      // setInterval(()=>{
      //   document.title="Install TextUtil Now"
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
          mode={mode}
        />
      </div>
      <div className="container my-5">
        {/* <About mode={mode} /> */}
       
      </div>
    </>
  );
}

export default App;
