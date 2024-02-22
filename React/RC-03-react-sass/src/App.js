
import React from 'react'
import "./App.scss"
import Header from './components/header/Header'
import Card from './components/card/Card'

import data from "./data"

const App = () => {
  return (
    <div>
  <Header/>
  <Card data={data}/>
    </div>
  )
}

export default App
