import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment,multiply } from './assets/counter/counterSlice'
function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar counter={count}/>
    <div>
    <button 
    onClick={() => dispatch(increment())}
    >+</button> currently counter is {count}

      <button
      onClick={() => dispatch(decrement())}
      >-</button>
      
      <button
      onClick={() => dispatch(multiply())}
      >*</button>
    </div>
          </>
  )
}

export default App
