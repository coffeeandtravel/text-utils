import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffff";
      document.body.style.color = "black";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [buttonColor, setButtonColor] = useState("primary");
  const handleColorChange = (color) => {
    setButtonColor(color);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextThings"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          onColorChange={handleColorChange}
        />
        <Alert alert={alert} mode={mode}/>

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse."
                  mode={mode}
                  showAlert={showAlert}
                  buttonColor={buttonColor}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
