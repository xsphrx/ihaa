import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js'
import About from './About.js'
import Form from './Form.js'
import 'bootstrap';

export default function App() {
  return (
    <Router basename="/ihaa">
      <div>
        <nav class="navbar navbar-expand-xl navbar-light">
          <img src="ihaalogosmall.png" width="50px"/>
          <a class="navbar-brand" href="#">IHAA</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="nav-link">Home<span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#becomeamember" className="nav-link">Become a member</a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/member">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div className="py-5"></div>
        <footer class="page-footer font-small blue mt-4" style={{backgroundColor: '#f5f5f5'}}>
          <hr/>

          <div class="container-fluid text-center text-md-left">

            <div class="row">

              <div class="col-md-6 mt-md-0 mt-3">

                <h5 class="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>

              </div>

              <hr class="clearfix w-100 d-md-none pb-3" />

              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>

              </div>
              <div class="col-md-3 mb-md-0 mb-3">

                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>

        </footer>
        </div>
    </Router>
  )
}
