import React,{useState} from 'react'
import IntroCSS from './intro.module.css';
import guitar from '../../assets/image.jpg';
import education from '../../assets/education.jpg';
import bg from '../../assets/elon.png';
import experimental from '../../assets/experimental.png'
import {Link} from 'react-router-dom';

const Intro = () => {
  return (
            <div className={IntroCSS.groupicon}>
                <Link to="/hobbies">
                <div className={IntroCSS.iconsmall}>
                    <img src={guitar}className={IntroCSS.bg} />
                </div>
                </Link> 

                
                <div className={IntroCSS.iconsmall}>
                  <Link to ="/professor">
                    <img src={education}className={IntroCSS.bg} />
                  </Link>
                </div>

                <div className={IntroCSS.iconsmall}>
                <img src={bg}className={IntroCSS.bg} />
                </div>

                <div className={IntroCSS.iconsmall}>
                <img src={bg}className={IntroCSS.bg} />
                </div>


                <Link to ='/experimental'>
                <div className={IntroCSS.iconsmall}>
                <img src={experimental} className={IntroCSS.bg} />
                </div>
                </Link>
    </div>
  )
}

export default Intro;