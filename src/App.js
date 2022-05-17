import React from 'react'
import './App.css'
import {useSelector,useDispatch} from "react-redux";
import {INCNUM,DECNUM,RESET} from './actions/index'

function App() {
 const mystate= useSelector((state)=>state.changeTheNumber)
 const dispatch=useDispatch();
  return (
    <div className='container'>
      <h1>Increment/Decrement counter</h1>
      <div className="counter">
        <button  className="decrement" onClick={()=>dispatch(DECNUM())}><span>-</span></button>
        <input type="text" className="quantity" value={mystate}/>
        <button className="increment" onClick={()=>dispatch(INCNUM())}> <span>+</span></button>
      </div>
      <button onClick={()=>dispatch(RESET())} className="reset">RESET COUNTER</button>
    </div>
  )
}

export default App