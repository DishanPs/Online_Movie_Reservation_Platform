import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import MobilePayment from "./components/MobilePayment";
import PaymentOption from "./components/PaymentOption";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>            
            <Route path="/checkout" exact element={<PaymentOption />} />
            <Route path="/checkout/mobilepay" element={<MobilePayment />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
