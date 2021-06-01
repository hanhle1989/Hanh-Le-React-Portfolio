
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/WebDevelopment" component={WebDevelopment} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
