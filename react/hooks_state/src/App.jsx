import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert('count was changed')
  
  
  }, [count])
  

  return (
    <>
      <div>{count}</div>
    </>
  )
}

export default App
