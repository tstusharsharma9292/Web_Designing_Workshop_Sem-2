import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './components/Greeting'

function App() {

  return (
    <>
      <h1>Student Information</h1>
      <Greeting name = "Tushar Sharma" course = "Course: Computer Science" marks = "Marks: 95"/>
      <Greeting name = "Isha Kaushik" course = "Course: Biotechnology" marks = "Marks: 93"/>
      <Greeting name = "Vansh Panwar" course = "Course: Electronics" marks = "Marks: 87"/>
    </>
  )
}

export default App