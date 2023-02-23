import React, { useState } from 'react';
import './App.css'

const App=() =>{
  const [initial,final] = useState(false)
  const [first,second]=useState(false)
  function change(){
    final(!initial);
    second(!first)
  }
  const color1 = initial ? 'black' :'white'
  const color2=  first ? 'pink' : 'black'
 
  const style1={backgroundColor:color1,color:color2}
  
  return (
    <>
     <div style={style1} className='mostouter'>
     <div className='header'>
      <h1>Overreacted</h1>
      <button onClick={change} style={{border:"none",backgroundColor:'pink',width:'60px',height:'30px'}}>Toggle</button>
    </div>
    <div className='maindiv'>
     <h1>The Wet Codebase</h1>
     <p>Sunday 4th,2020 5min read</p>
     <p className='ptag'>Come waste your time with me</p>
    </div>
    <div className='maindiv'>
     <h1>Goodbye,Clean Code</h1>
     <p>Friday 6th,2021 10min read</p>
     <p className='ptag'>Come waste your time with me</p>
    </div>
    <div className='maindiv'>
     <h1>My Decade in Review</h1>
     <p>Friday 10th,2022 10min read</p>
     <p className='ptag'>A personal reflection</p>
    </div>
    <div className='maindiv'>
     <h1>What are The React Principle</h1>
     <p>Monday 10th,2022 10min read</p>
    </div>
     </div>
    </>
  )
}
export default App;
