import React, { useState } from 'react'
import { Title, Main, Navbar } from './components/index'
import './app.css'
import menu from './components/data'


function App() {
  const [donnes, setDonnes] = useState(menu)
    
    const filterItems = (category) => {
        console.log('Mehdi va devenir un grand programmeur inchallah.');
        if(category === 'all'){
          return setDonnes(menu)
        }
        const filterCategory = menu.filter((item) => (
          item.category === category
        ))
        setDonnes(filterCategory)
    }

  return (
    <section className=''> 
      <Title/>
      <Navbar filterItems = {filterItems}/>
      <Main donnes = {donnes} filterItems = {filterItems}/>
    </section>
  )
}

export default App