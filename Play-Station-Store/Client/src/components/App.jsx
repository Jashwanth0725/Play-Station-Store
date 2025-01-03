import React, { useEffect } from "react";
import "../../src/assets/styles/App.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Basket from "./Basket.jsx";
import Login from "./Login.jsx";
import Checkout from "./Checkout.jsx";
import Practice from "./Practice.jsx";
import Register from "./Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "../features/Auth/firebase.js";
import { useStateValue } from "./StateProvider.jsx";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // console.log("user is >>", authUser);

      if (authUser) {
        //user is logged in / already logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route
              path="/practice"
              element={
                <>
                  <Header />
                  <Practice />
                </>
              }
            />

            <Route
              path="/basket"
              element={
                <>
                  <Header />
                  <Basket />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
