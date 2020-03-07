import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'


const Form = (props) => {
  const [index, set] = useState(0)

  return (
     <div className="container">
     <form class="form-inline">
       <a href="/"><button class="btn btn-lg btn-outline-success" type="button">Hjem</button></a>
     </form>
     </div>

  )
}

export default Form
