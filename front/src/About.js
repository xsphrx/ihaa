import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'


const Form = (props) => {
  const [index, set] = useState(0)

  return (
   <animated.div style={{ ...props.style, background: '', color: 'grey' }} className="page">
     <div className="container">
      <div className="row">
        <div className="mx-auto mt-4">
          About page
        </div>
      </div>
      <div className="row">
        <div className="btn btn-primary mx-auto mt-4" onClick={props.nextPage}>
          Form
        </div>
      </div>
     </div>

    </animated.div>
  )
}

export default Form
