import React from 'react'
import CSS from './Guitar.module.css'
import Box from './components/Box'
import { Link } from 'react-router-dom'
import Clock from './components/Clock/Clock'

export const Guitar = () => {

  return (
      <div>
        <section id={CSS.peepee}    >
          <div className={CSS.bigtext}> <h>IM A SLEEK LITTLE BOY OHH MAH GAWDDD. WHAT DA WHAT DA DOG DOING THO???ss?</h></div>
          </section>
        <section id = {CSS.sectiontwo}>
             <Clock/>

        </section>
        <section className={CSS.sectionthree}>
          <Box/>
        </section>
        <section    ></section>

      </div>
    
  )
}

export default Guitar