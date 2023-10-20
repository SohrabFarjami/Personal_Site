import React from 'react'
import CSS from './Typerwritertext.module.css'
import Typerwriter from 'typewriter-effect'


const Typerwritertext = (props) => {
  const text = props.text;
  console.log(text)

  return (
    <div className={CSS.container}>
        <Typerwriter
          onInit={(typewriter) => {
            typewriter.typeString(text).start()
          }}
        />
    </div>
  )
}

export default Typerwritertext