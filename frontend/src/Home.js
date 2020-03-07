import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'


const Home = (props) => {
  const [index, set] = useState(0)

  return (
     <div className="container">
     <div className="App">
       <form class="form-inline">
         <button class="btn btn-lg btn-outline-success" type="button">Hjem</button>
         <a href="/form"><button class="btn btn-sm btn-outline-secondary" type="button" >Bliv en medlem</button></a>
       </form>
       <div className="row">
         <img src="ihaalogo.png" className="rounded mx-auto d-block " alt="Responsive image" width="450px"/>
       </div>
         <div className="align-self-center" >
         <h3>
           Hvem vi er
           <small class="text-muted">og hvad er vigtig til os</small>
         </h3>

         <div className="align-self-center" >
         <h3>
           Hvad vi laver
           <small class="text-muted">og hvordan du kan vaere en dele af det</small>
         </h3>
         </div>
         </div>
     </div>
     </div>

  )
}

export default Home
