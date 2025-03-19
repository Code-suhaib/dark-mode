import React, { useState, useEffect } from "react";
import "./App.css"
const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {

    document.body.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="container">
      <h1>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default App;
