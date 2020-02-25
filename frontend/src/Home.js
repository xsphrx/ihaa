import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'


const Home = (props) => {
  const [index, set] = useState(0)

  return (
   <animated.div style={{ ...props.style, background: 'lightpink' }} className="page">
      <div class="container">
        <div class="row">
          <div class="mx-auto mt-4">
            <img src="ihaalogo.jpg" height="400" width="400"/>
          </div>
        </div>
        <div class="row">
          <div className="mx-auto align-baseline more" onClick={props.nextPage}>
            MORE
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Home
