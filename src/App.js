import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar,
  showBlog,
} from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Freelance from "./components/home/Freelance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Freelance />
      <Project />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    <Footer />
  </BrowserRouter>
);

export default App;
