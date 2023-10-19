import React from 'react'
import CSS from './Guitar.module.css'
import Box from './components/Box'
import { Link } from 'react-router-dom'


export const Guitar = () => {

  return (
      <div>
        <section id={CSS.peepee}    >
          <div className={CSS.bigtext}> <h>IM A SLEEK LITTLE BOY OHH MAH GAWDDD. WHAT DA WHAT DA DOG DOING THO????</h></div>
          </section>
        <section id = {CSS.sectiontwo}>
             <Box/>
        </section>



        <section    ></section>
        <section    ></section>

      </div>
    
  )
}

export default Guitar