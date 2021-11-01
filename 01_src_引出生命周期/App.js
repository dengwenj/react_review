import React, { useState } from 'react'

import Life from './components/Life'

export default function App() {
  const [l, setL] = useState(true)

  function handleClick() {
    setL(false)
  }

  return (
    <div>
      {l ? <Life></Life> : ''}
      <button onClick={handleClick}>不学了</button>
    </div>
  )
}
