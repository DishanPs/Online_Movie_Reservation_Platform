import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import UserReg from './components/UserReg';
import UserLogin from './components/UserLogin';
import UserProfile from './components/UserProfile';
import MovieCusMovies from "./components/MovieCusMovies";
import MovieAddMovies from "./components/MovieAddMovies";
import MovieAdminMovies from "./components/MovieAdminMovies";
import MobilePayment from "./components/MobilePayment";
import PaymentOption from "./components/PaymentOption";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CusProfile from "./components/CusProfile";
import Ccard from "./components/Ccard";

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
          <Route path="/Userprofile" exact element={<UserProfile/>}/>
          <Route path="/Userreg" exact element={<UserReg/>}/>
          <Route path="/Userlogin" exact element={<UserLogin/>}/>
          <Route path="/cusprofile" exact element={<CusProfile/>}/>
          <Route path="/ccard" exact element={<Ccard/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
