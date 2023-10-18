import React from 'react'
import './intro.css';
import guitar from '../../assets/image.jpg';
import education from '../../assets/education.jpg';
import bg from '../../assets/elon.png';
import experimental from '../../assets/experimental.png'
import {Link} from 'react-router-dom';


const Intro = () => {
  return (
            <div className="group-icon" id="icons">

                <div className="icon">
                  <Link to="/hobbies">
                    <img src={guitar} alt="Profile" className="bg" />
                  </Link>
                </div>
               


                <div className="icon">
                  <Link to ="/professor">
                    <img src={education} alt="Profile" className="bg" />
                  </Link>
                </div>

                <div className="icon">
                <img src={bg} alt="Profile" className="bg" />
                </div>

                <div className="icon">
                <img src={bg} alt="Profile" className="bg" />
                </div>

                <div className="icon">
                  <Link to ='/experimental'>
                    <img src={experimental} alt="Profile" className="bg" />
                  </Link>
                </div>
            </div>
  )
}

export default Intro;