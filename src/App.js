import React from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          path="/about"
          component={About}
        />

        <Route
          path="/contact"
          component={Contact}
        />

      </PageWrapper>
      <Footer />
    </Router>
  );
}

export default App;
