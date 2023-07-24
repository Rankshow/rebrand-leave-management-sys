import React, { useState, useEffect } from "react";

import Login from "./Login/login";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  // useEffect
  useEffect(() =>{
    setIsAuthenticated(JSON.parse(localStorage.getItem("is_authenticated")));
  }, []);

  // Rendering to the UI
  return (
    <>
      {
        isAuthenticated ? (<Dashboard setIsAuthenticated={setIsAuthenticated}/>)
        : (<Login setIsAuthenticated={setIsAuthenticated}/>)
      }
    </>
  );
};
export default App;