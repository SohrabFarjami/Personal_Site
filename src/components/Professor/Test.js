import React from 'react';
import './Test.css';
import professor from '../../assets/professor.jpg';




export const Test = () => {

    const handleClick = () => {
        document.getElementById('amazing').style.width = '6%';
        document.getElementById('good').style.width = '4%';
        document.getElementById('average').style.width = '8%';
        document.getElementById('bad').style.width = '15%';
        document.getElementById('horrible').style.width = '70%';
        document.getElementById('rating').textContent = '0.8';
    }

    const handleClickButton = (event) => {
        document.getElementById(event.target.id).textContent = 'peepe'

    }
  return (
    <div className="container">
        <div id='leftcards'>
            <div id="border">
                <div id="professoricon">
                </div>
                <div id='information'>
                    <h2>Elon Musk </h2>
                    <h3>Koc University</h3>
                    <div id="classgroup">
                        <button onClick={handleClick} className='classicon' id='button1'>
                            <h4> Econ 101</h4>
                        </button>
                        <button className='classicon'></button>
                        <button onClick={handleClick} className='classicon'></button>
                    </div>

                </div>
            </div>
            <div>
                <h6  id="rating" >4.5</h6>
                <h7>Showing ratings for </h7>
                <h7 id='currentClass'>Econ 101</h7>
            </div>
            <div className="ratingbar">
                <div className="bargroup">
                    < div className='ratescale'><h10>Amazing</h10></div>
                    <div className='bar'>
                        <div className='innerbar' id='amazing'></div>
                    </div>
                </div>
                <div className="bargroup">
                    <div className='ratescale'><h10>Good</h10></div>
                    <div className='bar'>
                        <div className='innerbar' id='good'></div>
                    </div>
                </div>
                <div className="bargroup">
                <div className='ratescale'><h10>Average</h10></div>
                    <div className='bar'>
                        <div className='innerbar' id='average'></div>
                    </div>
                </div>
                <div className="bargroup">
                <div className='ratescale'><h10>Bad</h10></div>
                    <div className='bar'>
                        <div className='innerbar' id='bad'></div>
                    </div>
                </div>
                <div className="bargroup">
                <div className='ratescale'><h10>Horrible</h10></div>
                    <div className='bar'>
                        <div className='innerbar' id='horrible'></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="commentbox">
        </div>
    </div>
  )
}


export default Test