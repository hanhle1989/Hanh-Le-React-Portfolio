
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/Header"

import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import Contact from './pages/Contact';

function App() {
  return (
      <Router>
        <Navbar />
        <Header />
          <Route pathname="/"> <Home />
          </Route>

          <Route pathname="/Home"> <Home />
          </Route>

          <Route pathname="/WebDevelopment"> <WebDevelopment />
          </Route>

          <Route pathname="/Contact"> <Contact />
          </Route>
          
        <Footer />
      </Router>
  );
}

export default App;
