import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import Projects from './components/Projects'
function App() {
  

  return (
    <><Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    </>
  )
}

export default App
