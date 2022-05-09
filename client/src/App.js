import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import UserReg from './components/UserReg';
import UserLogin from './components/UserLogin';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div>
       <Router>
                <div className = "App">
                      <UserProfile/>
                            
                        
                </div>
            </Router>
    </div>
  );
}

export default App;
