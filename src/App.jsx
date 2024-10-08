import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const title = 'Hello React'

function App() {
  return (
    <div>
      <h1>Hello world</h1>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App
