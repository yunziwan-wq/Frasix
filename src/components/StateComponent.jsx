import { useState } from 'react'

// useXXX - function/method
// setter
// state variable - number/string/array/object

export function StateComponent(props) {
  const [counter, setCounter] = useState("");

  return (
    <div>
      <h1> {counter} </h1>
      <button onClick={() => {setCounter(counter + 10)}}> add </button>
    </div>
  )
}

// props

// yes please
// [] [] [] []
// por favor si




// hardcode
// handler (callback function)
function multiply(e) {
  return 2 * e;
}

// render