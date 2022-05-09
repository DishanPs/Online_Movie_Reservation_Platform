import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import MovieCusMovies from "./components/MovieCusMovies";
import MovieAddMovies from "./components/MovieAddMovies";
import MovieAdminMovies from "./components/MovieAdminMovies";

function App() {
  return (
    <div>
       <Router>
                <div className = "App">
                      <MovieCusMovies />
                      {/* <MovieAddMovies /> */}
                      {/* <MovieAdminMovies /> */}
                            
                        
                </div>
            </Router>
    </div>
  );
}

export default App;
