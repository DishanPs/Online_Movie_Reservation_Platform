import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import ResBookMovie from "./components/ResBookMovie";
import MovieCusMovies from "./components/MovieCusMovies";
import MovieAddMovies from "./components/MovieAddMovies";
import MovieAdminMovies from "./components/MovieAdminMovies";
import MobilePayment from "./components/MobilePayment";
import PaymentOption from "./components/PaymentOption";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResBook from "./components/ResBook";
import ResCart from "./components/ResCart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>            
            <Route path="/checkout" exact element={<PaymentOption />} />
          <Route path="/checkout/mobilepay" exact element={<MobilePayment />} />
          <Route path="/movies" exact element={<MovieCusMovies />} />
          <Route path="/addmovie" exact element={<MovieAddMovies />} />
          <Route path="/adminmovies" exact element={<MovieAdminMovies/>}/>
          <Route path="/reserve" exact element={<ResBookMovie/>}/>
          <Route path="/book" exact element={<ResBook/>}/>
          <Route path="/cart" exact element={<ResCart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
