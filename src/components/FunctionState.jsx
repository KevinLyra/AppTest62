import React, { useState } from 'react'

const FunctionState = () => {
    
    const [counter, setCounter] = useState(0)


    // const addOne = () => {
    //     setCounter (counter => counter +1)
    // }

  return (
    <div>
        <p> Function State : {counter}</p>
        {/* <button onClick={addOne} >State dans Class </button> */}
        <button onClick={() => setCounter (counter => counter +1)} >State dans Class </button>
    </div>
  )
}

export default FunctionState