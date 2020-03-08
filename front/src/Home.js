import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTrail, useTransition, animated } from 'react-spring'
import Goo from './Goo.js'
import Trails from './Trails.js'
import Multistage from './Multistage.js'


const Home = (props) => {
  const [index, set] = useState(0)

  return (
    <div>
      <div class="wave-container">
      <div class="row">
        <div class="mx-auto mt-4 logo">
          <img src="ihaalogo1.png" height="400" width="400" class="img-fluid"/>
        </div>
      </div>
      <h3 className="pt-5">
        <a href="#about" className="pointunder">Hvem vi er</a>
        <small class="text-muted">og hvad der er vigtig for os</small>
      </h3>
      <h3>
        <a href="#whatwedo" className="pointunder">Hvad vi laver</a>
        <small class="text-muted">og hvordan du kan vaere en del af det</small>
      </h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,128L120,149.3C240,171,480,213,720,197.3C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      </div>
      <div className="container py-5" id="about">
        <div className="row d-flex justify-content-center">
          <h1>About us</h1>
        </div>
        <div className="row pt-3">
          <div className="col-12 col-sm-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <img src="https://image.shutterstock.com/image-vector/happy-group-people-jumping-on-260nw-518870674.jpg" class="img-fluid"/>
          </div>
        </div>
      </div>

      <div className="gradient">
        <div className="container py-5" id="whatwedo">
          <div className="row d-flex justify-content-center">
            <h1 className="text-white">What we do</h1>
          </div>
          <div className="row pt-3">
            <div className="col-12 col-sm-6">
              <img src="https://image.shutterstock.com/image-vector/happy-group-teen-university-student-600w-1101308990.jpg" class="img-fluid" />
            </div>
            <div className="col-12 col-sm-6">
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and mre recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
      <div className="row d-flex  justify-content-center pb-3"  id="becomeamember">
        <h1>Become a member</h1>
      </div>
      <div className="box">
      <form className="">
       <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
        </div>
       </div>
       <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
       </div>
       <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
       </div>
       <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity"/>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip"/>
        </div>
       </div>
       <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck"/>
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
       </div>
       <button type="submit" class="btn btn-primary">Become a member</button>
       </form>
      </div>
      </div>


    </div>
  )
}

export default Home
