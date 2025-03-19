import React from "react";
import useLocalStorage from "use-local-storage"; // Correct import
import "./App.css";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light"); // Use the custom hook

  React.useEffect(() => {
    document.body.className = theme;
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
