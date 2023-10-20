import React from 'react'
import CSS from './Guitar.module.css'
import Box from './components/Box'
import { Link } from 'react-router-dom'
import Clock from './components/Clock/Clock'
import Typerwriter from './components/Typewriter/Typerwritertext'

export const Guitar = () => {
  const sentence = 'Im still building the site '
  return (
      <div>
        <section id={CSS.peepee}    >
          <div className={CSS.bigtext}>
          <Typerwriter
          text={sentence}/>
          </div>
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