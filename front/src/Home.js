import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTrail, useTransition, animated } from 'react-spring'
import Goo from './Goo.js'
import Trails from './Trails.js'
import Multistage from './Multistage.js'


const Home = (props) => {
  const [index, set] = useState(0)

  return (
   <animated.div style={{ ...props.style, background: 'white' }} className="page">
    <Trails />
    <Multistage />
      <div class="container">
        <div class="row">
          <div class="mx-auto mt-4 logo">
            <img src="ihaalogo.png" height="400" width="400"/>
          </div>
        </div>
        <div class="row">
          <div className="mx-auto align-baseline more btn btn-primary" onClick={props.nextPage}>
            MORE
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Home
