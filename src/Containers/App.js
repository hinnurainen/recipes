import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
