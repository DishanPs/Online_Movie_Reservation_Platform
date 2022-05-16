import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import ResBookMovie from "./components/ResBookMovie";

function App() {
  return (
    <div>
       <Router>
                <div className = "App">
                      {/* <Home/> */}
                      <ResBookMovie/>
                            
                        
                </div>
            </Router>
    </div>
  );
}

export default App;
