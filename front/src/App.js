import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'
import Home from './Home.js'
import Form from './Form.js'
import About from './About.js'

const pages = [
  ({ style, nextPage }) => <Home style={style} nextPage={nextPage}/>,
  ({ style, nextPage }) => <About style={style} nextPage={nextPage}/>,
  ({ style, nextPage }) => <Form style={style} nextPage={nextPage}/>

  // ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>
  //   A
  // </animated.div>,
  // ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  // ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const nextPage = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" >
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} nextPage={nextPage} />
      })}
    </div>
  )
}
