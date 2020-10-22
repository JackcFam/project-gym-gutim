import React from 'react';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/font-awesome.min.css';
import './../css/App.css';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Classes from './Classes/Classes.js';
import Blog from './Blog/Blog.js';
import Pricing from './Gallery/Pricing.js';
import Gallery from './Gallery/Gallery.js';
import Contact from './Contact/Contact.js';
import BlogContent from './Blog/BlogContent.js';


function App() {
  return (
    <>
      <Router>
      <Menu></Menu>
      <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog-content">
            <BlogContent />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      <Footer></Footer>
      </Router>

      </>
  );
}

export default App;
