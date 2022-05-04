import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";

function App() {
  return (
    <div>
       <Router>
                <div className = "App">
                      <Home/>
                            
                        
                </div>
            </Router>
    </div>
  );
}

export default App;
