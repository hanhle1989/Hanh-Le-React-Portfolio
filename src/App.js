
import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Header />
          <Route exact path="/"> <Home />
          </Route>

          {/*<Route path={process.env.PUBLIC_URL + "/Home"}> */}
         <Route path="/Home"> <Home />
          </Route>

          <Route exact path="/WebDevelopment"> <WebDevelopment />
          </Route>

          <Route exact path="/Contact"> <Contact />
          </Route>
          
        <Footer />
      </BrowserRouter>
  );
}

export default App;
